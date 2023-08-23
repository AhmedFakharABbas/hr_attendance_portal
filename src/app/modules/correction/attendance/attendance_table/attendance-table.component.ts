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
let ELEMENT_DATA: any[] = [];

@Component({
  selector: "app-attendance-table",
  templateUrl: "./attendance-table.component.html",
  styleUrls: ["./attendance-table.component.css"],
})
export class AttendanceTableComponent implements OnInit, AfterViewInit {
  pendingRequest: boolean;
  searchString: any;
  PostRequestDataSubscription: any;
  searchTermDataSubscription: any;
  constructor(
    private attendanceService: AttendanceService,
    private cdRef: ChangeDetectorRef,
    private sharedService: SharedService
  ) {}
  pageSize = 20;
  pageIndex;
  totalTableLength;
  displayedColumns: string[] = [
    "application_date",
    "month",
    "correction_date",
    "lm_status",
    "hr_status",
  ];
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
    this.searchTermDataSubscription =
      this.attendanceService.searchTermData.subscribe((searchTerm) => {
        //rowData.application_date

        if (searchTerm != "") {
          this.onGetFilterMetaData(searchTerm);
        }
      });
  }

  //get meta data on component load base on table and role
  onGetMetaData() {
    let id = +localStorage.getItem("e_number");
    this.searchString = undefined;
    this.gerCorrectionApplicationMetaData();
    if (this.componentType.type == "Emp-Correction-Status") {
      this.caURL = `${APIs.getEmpMonthlyCorrectionStatus}?employee_id=${id}`;
      this.getCorrectionStatus(this.caURL);
      this.pageIndex = 1;
    } else if (this.componentType.type == "lm-Correction-Status") {
      this.caURL = `${APIs.getLmMonthlyCorrectionStatus}?employee_id=${id}`;
      this.getCorrectionStatus(this.caURL);
      this.pageIndex = 1;
    } else if (this.componentType.type == "hr-Correction-Status") {
      this.caURL = `${APIs.getHrMonthlyCorrectionStatus}?employee_id=${id}`;
      this.getCorrectionStatus(this.caURL);
      this.pageIndex = 1;
    }
  }
  //get meta data on on the base of filter
  gerCorrectionApplicationMetaData() {
    let id = +localStorage.getItem("e_number");
    this.searchString = undefined;
    if (this.componentType.type == "Emp-Correction-Applicaitons") {
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.caURL = `${APIs.getEmpCorrectionApplicationList}?employee_id=${id}`;
      this.getAttendanceCorrectionData(this.caURL + "&per_page=20");
      this.pageIndex = 1;
    } else if (this.componentType.type == "lm-Correction-Applicaitons") {
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.caURL = `${APIs.getLmCorrectionApplicationList}?employee_id=${id}&application_status=-1`;
      this.getAttendanceCorrectionData(this.caURL + "&per_page=20");
      this.pageIndex = 1;
    } else if (this.componentType.type == "hr-Correction-Applicaitons") {
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.caURL = `${APIs.getHrCorrectionApplicationList}?employee_id=${id}`;
      this.getAttendanceCorrectionData(this.caURL + "&per_page=20");
      this.pageIndex = 1;
    }
  }
  onGetFilterMetaData(searchTerm) {
    if (searchTerm == "All") {
      this.gerCorrectionApplicationMetaData();
      return;
    }
    let id = +localStorage.getItem("e_number");
    //        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    if (this.componentType.type == "Emp-Correction-Applicaitons") {
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.caURL = `${APIs.getEmpCorrectionApplicationList}?employee_id=${id}`;
      this.getAttendanceCorrectionData(
        this.caURL + "&per_page=20&filter_by=" + searchTerm
      );
      this.searchString = searchTerm;
      this.pageIndex = 1;
    } else if (this.componentType.type == "lm-Correction-Applicaitons") {
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.caURL = `${APIs.getLmCorrectionApplicationList}?employee_id=${id}&application_status=-1`;
      this.getAttendanceCorrectionData(
        this.caURL + "&per_page=20&" + searchTerm
      );
      this.searchString = searchTerm;
      this.pageIndex = 1;
    } else if (this.componentType.type == "hr-Correction-Applicaitons") {
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.caURL = `${APIs.getHrCorrectionApplicationList}?employee_id=${id}`;
      this.getAttendanceCorrectionData(
        this.caURL + "&per_page=20&" + searchTerm
      );
      this.searchString = searchTerm;
      this.pageIndex = 1;
    }
  }
  //logic after view initialization
  ngAfterViewInit() {
    if (
      this.componentType.type === "Emp-Correction-Status" ||
      this.componentType.type === "lm-Correction-Status" ||
      this.componentType.type === "hr-Correction-Status"
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
    } else if (
      this.componentType.type === "Emp-Correction-Applicaitons" ||
      this.componentType.type === "lm-Correction-Applicaitons" ||
      this.componentType.type === "hr-Correction-Applicaitons"
    ) {
      this.dataSource = new MatTableDataSource(this.resData);

      //this.dataSource.paginator = this.paginator;
      if (
        this.componentType.type === "lm-Correction-Applicaitons" ||
        this.componentType.type === "hr-Correction-Applicaitons"
      ) {
        this.displayedColumns = [
          "employee_code",
          "employee_name",
          "application_date",
          "correction_type",
          "correction_date",
          "lm_status",
          "hr_status",
        ];
      }
      // this.pageSize=10;
      this.cdRef.detectChanges();
    }
    this.dataSource.paginator = this.paginator;
  }

  //To handle click on table row
  onRowClick(data: any) {
    data.componentType = this.componentType.type;

    this.attendanceService.setRowData(data);
  }

  getAttendanceCorrectionData(url) {
    this.attendanceService.getAttendMetaData(url).subscribe({

      next: (res: any) => {
        console.log(res)
        if (res.status != "failed") {
          this.dataSource.data = this.dataSource.data.concat(res.data.data);

          // this.pageIndex = res.data.current_page - 1;
          this.totalTableLength = res.data.total;
          this.pageSize = this.pageSize;

          this.pendingRequest = false;
          this.dataSource.sort = this.sort;
          console.log(res)
        }else{
          this.sharedService.warningMessage(res.message)
        }
      },
      error: (error) => {
        this.sharedService.erroMessage("Sorry something went wrong");
        this.pendingRequest = false;
      },
    });
  }
  //get correction status for correction status table
  getCorrectionStatus(url) {
    this.attendanceService.getAttendMetaData(url).subscribe({
      next: (res: any) => {
        if (res.status != "failed") {
          // this.dataSource = new MatTableDataSource(res.data);
          this.dataSource.data = this.dataSource.data.concat(res.data);
          this.dataSource.sort = this.sort;
        }

        //this.cdRef.detectChanges();
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
      } else if (
        this.componentType.type == "Emp-Correction-Applicaitons" ||
        this.componentType.type == "lm-Correction-Applicaitons" ||
        this.componentType.type == "hr-Correction-Applicaitons"
      ) {
        let nextPage = +this.pageIndex + 1;
        if (
          this.dataSource.filteredData.length < this.totalTableLength &&
          this.pendingRequest == false
        ) {
          this.pageIndex++;
          this.pendingRequest = true;
          if (this.searchString != undefined) {
            this.getAttendanceCorrectionData(
              this.caURL +
                `&per_page=20&page=${nextPage}&${this.searchString}`
            );
          } else {
            this.getAttendanceCorrectionData(
              this.caURL + `&per_page=20&page=${nextPage}`
            );
          }
        }
      }
    }
  }
  //on angular component destroy
  ngOnDestroy() {
    this.PostRequestDataSubscription.unsubscribe();
    this.searchTermDataSubscription.unsubscribe();
  }
}
