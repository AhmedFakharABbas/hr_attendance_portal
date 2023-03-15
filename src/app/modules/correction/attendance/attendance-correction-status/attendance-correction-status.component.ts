import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  Input,
  ChangeDetectorRef,
} from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { AttendanceService } from "../attendance.service";
import { SharedService } from "src/app/shared/Service/shared.service";
import { APIs } from "src/environments/environment";
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const STATUS_DATA: any[] = [];
let ELEMENT_DATA: any[] = [

];
@Component({
  selector: "app-attendance-correction-status",
  templateUrl: "./attendance-correction-status.component.html",
  styleUrls: ["./attendance-correction-status.component.css"],
})
export class AttendanceCorrectionStatusComponent implements OnInit {
  pendingRequest: boolean;
  searchString: any;
  PostRequestDataSubscription: any;
  hrCorrectionStatusMetaData: any;
  constructor(
    private attendanceService: AttendanceService,
    private cdRef: ChangeDetectorRef,
    private sharedService: SharedService
  ) {}
  pageSize = 20;
  pageIndex;
  totalTableLength;
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  caURL;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @Input() componentType;
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatSort) sort: MatSort;
  resData: any;
  ngOnInit(): void {
    // this.setCredintials
    this.onGetMetaData();
    this.PostRequestDataSubscription =
      this.attendanceService.PostRequestData.subscribe((postUrl) => {
        //rowData.application_date
        if (postUrl != "") {
          this.dataSource = new MatTableDataSource();
          this.totalTableLength = undefined;
          this.caURL = undefined;
          this.onGetMetaData();
        }
      });
    this.hrCorrectionStatusMetaData =
      this.attendanceService.hrCorrectionStatusMetaData.subscribe(
        (correctionStatusMetaData) => {
          if(correctionStatusMetaData != "") {
            console.log(correctionStatusMetaData);
            let id = +localStorage.getItem("e_number");
            this.pendingRequest = true;
            this.caURL =   this.componentType.type == "lm-Correction-Status"?`${APIs.getLmMonthlyCorrectionStatus}?employee_id=${id}${correctionStatusMetaData}`:this.componentType.type == "hr-Correction-Status"?`${APIs.getHrMonthlyCorrectionStatus}?employee_id=${id}${correctionStatusMetaData}`:'';
            this.getCorrectionStatus(this.caURL, true);
            this.pageIndex = 1;
          }
        }
      );
  }
  //get meta data on component load base on table and role
  onGetMetaData() {
    let id = +localStorage.getItem("e_number");
    let date = new Date();
    this.searchString = undefined;
    if (this.componentType.type == "Emp-Correction-Status") {
      this.caURL = `${APIs.getEmpMonthlyCorrectionStatus}?employee_id=${id}`;
      this.getCorrectionStatus(this.caURL);
      this.pageIndex = 1;
    } else if (this.componentType.type == "lm-Correction-Status") {
      this.caURL = `${APIs.getLmMonthlyCorrectionStatus}?employee_id=${id}&fiscal_year=${date.getFullYear()}-${date.getMonth()+1}`;
      this.getCorrectionStatus(this.caURL);
      this.pageIndex = 1;
    } else if (this.componentType.type == "hr-Correction-Status") {

      this.caURL = `${
        APIs.getHrMonthlyCorrectionStatus
      }?employee_id=${id}&fiscal_year=${date.getFullYear()}-${date.getMonth()+1}`;
      this.getCorrectionStatus(this.caURL);
      this.pageIndex = 1;
    }
  }
  //get meta data on on the base of filter

  //logic after view initialization
  ngAfterViewInit() {
    if (
      this.componentType.type === "Emp-Correction-Status"
    ) {
      this.dataSource = new MatTableDataSource(STATUS_DATA);
      this.displayedColumns = [
        "month_name",
        "corrections",
        "approved",
        "pending",
        "rejected",
      ];
      this.cdRef.detectChanges();
    }
    else if (this.componentType.type === "lm-Correction-Status") {
      this.dataSource = new MatTableDataSource(STATUS_DATA);
      this.displayedColumns = [
        "employee_name",
        "corrections",
        "approved",
        "pending",
        "rejected",
      ];
      this.cdRef.detectChanges();
    }
     else if (this.componentType.type === "hr-Correction-Status") {
      this.dataSource = new MatTableDataSource(STATUS_DATA);
      this.displayedColumns = [
        "employee_name",
        "corrections",
        "approved",
        "pending",
        "rejected",
      ];
      this.cdRef.detectChanges();
    }
    this.dataSource.paginator = this.paginator;
  }
  //get correction status for correction status table
  getCorrectionStatus(url, isNewData?) {
    this.attendanceService.getAttendMetaData(url).subscribe({
      next: (res: any) => {
        if (res.status != "failed") {
          if (isNewData == true) {
            // this.dataSource = new MatTableDataSource(ELEMENT_DATA);
            this.dataSource.data = res.data;
            this.dataSource.sort = this.sort;
            this.pendingRequest = false;
            return;
          }
          // this.dataSource = new MatTableDataSource(res.data);
          this.dataSource.data = this.dataSource.data.concat(res.data);
          this.dataSource.sort = this.sort;
        } else if ((res.statusCode = 404)) {
          this.dataSource = new MatTableDataSource(ELEMENT_DATA);
          this.pendingRequest = false;
        }
        this.cdRef.detectChanges();
        this.pendingRequest = false;
      },
      error: (error) => {
        this.sharedService.erroMessage("Sorry something went wrong");
        this.pendingRequest = false;
      },
    });
  }
  //on scroll event
  onTableScroll(e) {
    const tableViewHeight = e.target.offsetHeight; // viewport: ~500px
    const tableScrollHeight = e.target.scrollHeight; // length of all table
    const scrollLocation = e.target.scrollTop; // how far user scrolled
    // If the user has scrolled within 200px of the bottom, add more data
    const buffer = 200;
    const limit = tableScrollHeight - tableViewHeight - buffer;
    if (scrollLocation > limit) {
      if (
        this.componentType.type == "hr-Correction-Status" ||
        this.componentType.type == "lm-Correction-Status" ||
        this.componentType.type == "Emp-Correction-Status"
      ) {
        if (this.pendingRequest == false) {
          this.pageIndex++;
          this.pendingRequest = true;
          this.getCorrectionStatus(this.caURL);
        }
      }
    }
  }
  //on angular component destroy
  ngOnDestroy() {
    this.PostRequestDataSubscription.unsubscribe();
    this.hrCorrectionStatusMetaData.unsubscribe();
  }
}
