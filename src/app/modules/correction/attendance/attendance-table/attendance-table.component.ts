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

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const STATUS_DATA: any[] = [
  // {
  //   month_name: "January",
  //   corrections: "21",
  //   approved: "4",
  //   pending: "0",
  //   rejected: "8",
  // },
  // {
  //   month_name: "February",
  //   corrections: "8",
  //   approved: "1.5",
  //   pending: "5",
  //   rejected: "8",
  // },
  // {
  //   month_name: "March",
  //   corrections: "8",
  //   approved: "2.25",
  //   pending: "0",
  //   rejected: "0",
  // },
  // {
  //   month_name: "April",
  //   corrections: "15",
  //   approved: "0",
  //   pending: "0",
  //   rejected: "0",
  // },
  // {
  //   month_name: "May",
  //   corrections: "-",
  //   approved: "0",
  //   pending: "0",
  //   rejected: "5",
  // },
  // {
  //   month_name: "June",
  //   corrections: "-",
  //   approved: "1",
  //   pending: "5",
  //   rejected: "5",
  // },
  // {
  //   month_name: "July",
  //   corrections: "-",
  //   approved: "0",
  //   pending: "5",
  //   rejected: "5",
  // },
  // {
  //   month_name: "Auguest",
  //   corrections: "8",
  //   approved: "5",
  //   pending: "0",
  //   rejected: "0",
  // },
  // {
  //   month_name: "September",
  //   corrections: "8",
  //   approved: "0",
  //   pending: "0",
  //   rejected: "0",
  // },
  // {
  //   month_name: "October",
  //   corrections: "15",
  //   approved: "8",
  //   pending: "0",
  //   rejected: "0",
  // },
  // {
  //   month_name: "November",
  //   corrections: "8",
  //   approved: "0",
  //   pending: "2",
  //   rejected: "2",
  // },
  // {
  //   month_name: "December",
  //   corrections: "8",
  //   approved: "0",
  //   pending: "2",
  //   rejected: "2",
  // },
  // {
  //   month_name: "January",
  //   corrections: "21",
  //   approved: "4",
  //   pending: "0",
  //   rejected: "8",
  // },
  // {
  //   month_name: "February",
  //   corrections: "8",
  //   approved: "1.5",
  //   pending: "5",
  //   rejected: "8",
  // },
  // {
  //   month_name: "March",
  //   corrections: "8",
  //   approved: "2.25",
  //   pending: "0",
  //   rejected: "0",
  // },
  // {
  //   month_name: "April",
  //   corrections: "15",
  //   approved: "0",
  //   pending: "0",
  //   rejected: "0",
  // },
  // {
  //   month_name: "May",
  //   corrections: "-",
  //   approved: "0",
  //   pending: "0",
  //   rejected: "5",
  // },
  // {
  //   month_name: "June",
  //   corrections: "-",
  //   approved: "1",
  //   pending: "5",
  //   rejected: "5",
  // },
  // {
  //   month_name: "July",
  //   corrections: "-",
  //   approved: "0",
  //   pending: "5",
  //   rejected: "5",
  // },
  // {
  //   month_name: "Auguest",
  //   corrections: "8",
  //   approved: "5",
  //   pending: "0",
  //   rejected: "0",
  // },
  // {
  //   month_name: "September",
  //   corrections: "8",
  //   approved: "0",
  //   pending: "0",
  //   rejected: "0",
  // },
  // {
  //   month_name: "October",
  //   corrections: "15",
  //   approved: "8",
  //   pending: "0",
  //   rejected: "0",
  // },
  // {
  //   month_name: "November",
  //   corrections: "8",
  //   approved: "0",
  //   pending: "2",
  //   rejected: "2",
  // },
  // {
  //   month_name: "December",
  //   corrections: "8",
  //   approved: "0",
  //   pending: "2",
  //   rejected: "2",
  // },
];
let ELEMENT_DATA: any[] = [
  // {
  //   hr_id: 55572,
  //   employee_id: 17275,
  //   application_id: 16,
  //   employee_name: "Aziz Muhammad",
  //   application_date: "2022-05-20",
  //   correction_date: "2022-05-20",
  //   month:"May",
  //   correction_type: "attendance_correction",
  //   hr_status: "1",
  //   leave_type_id: null,
  //   lm_status: "1",
  // },
  // {
  //   hr_id: 55572,
  //   employee_id: 17275,
  //   application_id: 16,
  //   employee_name: "Aziz Muhammad",
  //   application_date: "2022-05-20",
  //   correction_date: "2022-05-20",
  //   month:"May",
  //   correction_type: "attendance_correction",
  //   hr_status: "1",
  //   leave_type_id: null,
  //   lm_status: "1",
  // },
  // {
  //   hr_id: 55572,
  //   employee_id: 17275,
  //   application_id: 16,
  //   employee_name: "Aziz Muhammad",
  //   application_date: "2022-05-20",
  //   correction_date: "2022-05-20",
  //   month:"May",
  //   correction_type: "attendance_correction",
  //   hr_status: "1",
  //   leave_type_id: null,
  //   lm_status: "1",
  // },
  // {
  //   hr_id: 55572,
  //   employee_id: 17275,
  //   application_id: 16,
  //   employee_name: "Aziz Muhammad",
  //   application_date: "2022-05-20",
  //   correction_date: "2022-05-20",
  //   month:"May",
  //   correction_type: "attendance_correction",
  //   hr_status: "1",
  //   leave_type_id: null,
  //   lm_status: "1",
  // },
  // {
  //   hr_id: 55572,
  //   employee_id: 17275,
  //   application_id: 16,
  //   employee_name: "Aziz Muhammad",
  //   application_date: "2022-05-20",
  //   correction_date: "2022-05-20",
  //   month:"May",
  //   correction_type: "attendance_correction",
  //   hr_status: "1",
  //   leave_type_id: null,
  //   lm_status: "1",
  // },
  // {
  //   hr_id: 55572,
  //   employee_id: 17275,
  //   application_id: 16,
  //   employee_name: "Aziz Muhammad",
  //   application_date: "2022-05-20",
  //   correction_date: "2022-05-20",
  //   month:"May",
  //   correction_type: "attendance_correction",
  //   hr_status: "1",
  //   leave_type_id: null,
  //   lm_status: "1",
  // },
  // {
  //   hr_id: 55572,
  //   employee_id: 17275,
  //   application_id: 16,
  //   employee_name: "Aziz Muhammad",
  //   application_date: "2022-05-20",
  //   correction_date: "2022-05-20",
  //   month:"May",
  //   correction_type: "attendance_correction",
  //   hr_status: "1",
  //   leave_type_id: null,
  //   lm_status: "1",
  // },
  // {
  //   hr_id: 55572,
  //   employee_id: 17275,
  //   application_id: 16,
  //   employee_name: "Aziz Muhammad",
  //   application_date: "2022-05-20",
  //   correction_date: "2022-05-20",
  //   month:"May",
  //   correction_type: "attendance_correction",
  //   hr_status: "1",
  //   leave_type_id: null,
  //   lm_status: "1",
  // },
  // {
  //   hr_id: 55572,
  //   employee_id: 17275,
  //   application_id: 16,
  //   employee_name: "Aziz Muhammad",
  //   application_date: "2022-05-20",
  //   correction_date: null,
  //   month:"May",
  //   correction_type: "attendance_correction",
  //   hr_status: "1",
  //   leave_type_id: null,
  //   lm_status: "1",
  // },
  // {
  //   hr_id: 55572,
  //   employee_id: 17275,
  //   application_id: 16,
  //   employee_name: "Aziz Muhammad",
  //   application_date: "2022-05-20",
  //   correction_date: null,
  //   month:"May",
  //   correction_type: "attendance_correction",
  //   hr_status: "1",
  //   leave_type_id: null,
  //   lm_status: "3",
  // },
  // {
  //   hr_id: 55572,
  //   employee_id: 17275,
  //   application_id: 16,
  //   employee_name: "Aziz Muhammad",
  //   application_date: "2022-05-20",
  //   correction_date: null,
  //   month:"May",
  //   correction_type: "attendance_correction",
  //   hr_status: "1",
  //   leave_type_id: null,
  //   lm_status: "3",
  // },
  // {
  //   hr_id: 55572,
  //   employee_id: 17275,
  //   application_id: 16,
  //   employee_name: "Aziz Muhammad",
  //   application_date: "2022-05-20",
  //   correction_date: null,
  //   month:"May",
  //   correction_type: "attendance_correction",
  //   hr_status: "1",
  //   leave_type_id: null,
  //   lm_status: "2",
  // },
  // {
  //   hr_id: 55572,
  //   employee_id: 17275,
  //   application_id: 16,
  //   employee_name: "Aziz Muhammad",
  //   application_date: "2022-05-20",
  //   correction_date: null,
  //   month:"May",
  //   correction_type: "attendance_correction",
  //   hr_status: "1",
  //   leave_type_id: null,
  //   lm_status: "2",
  // },
  // {
  //   hr_id: 55572,
  //   employee_id: 17275,
  //   application_id: 16,
  //   employee_name: "Aziz Muhammad",
  //   application_date: "2022-05-20",
  //   correction_date: null,
  //   month:"May",
  //   correction_type: "attendance_correction",
  //   hr_status: "0",
  //   leave_type_id: null,
  //   lm_status: "2",
  // },
  // {
  //   hr_id: 55572,
  //   employee_id: 17275,
  //   application_id: 16,
  //   employee_name: "Aziz Muhammad",
  //   application_date: "2022-05-20",
  //   correction_date: "2022-05-20",
  //   month:"May",
  //   correction_type: "attendance_correction",
  //   hr_status: "2",
  //   leave_type_id: null,
  //   lm_status: "2",
  // },
  // {
  //   hr_id: 55572,
  //   employee_id: 17275,
  //   application_id: 16,
  //   employee_name: "Aziz Muhammad",
  //   application_date: "2022-05-20",
  //   correction_date: "2022-05-20",
  //   month:"May",
  //   correction_type: "attendance_correction",
  //   hr_status: "1",
  //   leave_type_id: null,
  //   lm_status: "2",
  // },
  // {
  //   hr_id: 55572,
  //   employee_id: 17275,
  //   application_id: 16,
  //   employee_name: "Aziz Muhammad",
  //   application_date: "2022-05-20",
  //   correction_date: "2022-05-20",
  //   month:"May",
  //   correction_type: "attendance_correction",
  //   hr_status: "1",
  //   leave_type_id: null,
  //   lm_status: "2",
  // },
  // {
  //   hr_id: 55572,
  //   employee_id: 17275,
  //   application_id: 16,
  //   employee_name: "Aziz Muhammad",
  //   application_date: "2022-05-20",
  //   correction_date: "2022-05-20",
  //   month:"May",
  //   correction_type: "attendance_correction",
  //   hr_status: "1",
  //   leave_type_id: null,
  //   lm_status: "3",
  // },
  // {
  //   hr_id: 55572,
  //   employee_id: 17275,
  //   application_id: 16,
  //   employee_name: "Aziz Muhammad",
  //   application_date: "2022-05-20",
  //   correction_date: "2022-05-20",
  //   month:"May",
  //   correction_type: "attendance_correction",
  //   hr_status: "1",
  //   leave_type_id: null,
  //   lm_status: "1",
  // },
];

/**
 * @title Table with sorting
 */
@Component({
  selector: "app-attendance-table",
  templateUrl: "./attendance-table.component.html",
  styleUrls: ["./attendance-table.component.css"],
})
export class AttendanceTableComponent implements OnInit, AfterViewInit {
  pendingRequest: boolean;
  searchString: any;
  constructor(
    private _attendanceService: AttendanceService,
    private cdRef: ChangeDetectorRef,
    private _sservice: SharedService
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
    this._attendanceService.PostRequestData.subscribe((postUrl) => {
      //rowData.application_date

      if (postUrl != "") {
        this.dataSource = new MatTableDataSource();
        this.totalTableLength = undefined;
        this.caURL = undefined;
        this.onGetMetaData();
      }
    });
    this._attendanceService.searchTermData.subscribe((searchTerm) => {
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
      this.caURL = `/attendance_correction/employee_portal/monthly_correction_status?employee_id=${id}`;
      this.getCorrectionStatus(this.caURL);
      this.pageIndex = 1;
    } else if (this.componentType.type == "lm-Correction-Status") {
      this.caURL = `/attendance_correction/lm_portal/monthly_correction_status?employee_id=${id}`;
      this.getCorrectionStatus(this.caURL);
      this.pageIndex = 1;
    } else if (this.componentType.type == "hr-Correction-Status") {
      this.caURL = `/attendance_correction/hr_portal/monthly_correction_status?employee_id=${id}`;
      this.getCorrectionStatus(this.caURL);
      this.pageIndex = 1;
    }
  }
  //get meta data on on the base of filter
  gerCorrectionApplicationMetaData(){
    let id = +localStorage.getItem("e_number");
    this.searchString = undefined;
    if (this.componentType.type == "Emp-Correction-Applicaitons") {
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.caURL = `/attendance_correction/employee_portal/correction_application_list?employee_id=${id}`;
      this.getAttendanceCorrectionData(this.caURL + "&per_page=20");
      this.pageIndex = 1;
    } else if (this.componentType.type == "lm-Correction-Applicaitons") {
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.caURL = `/attendance_correction/lm_portal/correction_application_list?employee_id=${id}`;
      this.getAttendanceCorrectionData(this.caURL + "&per_page=20");
      this.pageIndex = 1;
    } else if (this.componentType.type == "hr-Correction-Applicaitons") {
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.caURL = `/attendance_correction/hr_portal/correction_application_list?employee_id=${id}`;
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
      this.caURL = `/attendance_correction/employee_portal/correction_application_list?employee_id=${id}`;
      this.getAttendanceCorrectionData(
        this.caURL + "&per_page=20&filter_by=" + searchTerm
      );
      this.searchString = searchTerm;
      this.pageIndex = 1;
    } else if (this.componentType.type == "lm-Correction-Applicaitons") {
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.caURL = `/attendance_correction/lm_portal/correction_application_list?employee_id=${id}`;
      this.getAttendanceCorrectionData(
        this.caURL + "&per_page=20&filter_by=" + searchTerm
      );
      this.searchString = searchTerm;
      this.pageIndex = 1;
    } else if (this.componentType.type == "hr-Correction-Applicaitons") {
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.caURL = `/attendance_correction/hr_portal/correction_application_list?employee_id=${id}`;
      this.getAttendanceCorrectionData(
        this.caURL + "&per_page=20&filter_by=" + searchTerm
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
          "employee_id",
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

    this._attendanceService.setRowData(data);
  }

  //handle page click
  // handlePage(event) {
  //   if (
  //     this.componentType.type == "Emp-Correction-Applicaitons" ||
  //     this.componentType.type == "lm-Correction-Applicaitons" ||
  //     this.componentType.type == "hr-Correction-Applicaitons"
  //   ) {
  //     let pageIndex = event.pageIndex + 1;

  //     this.getAttendanceCorrectionData(
  //       this.caURL + `&per_page=20 &page=${pageIndex}`
  //     );
  //   }
  // }
  // to get the get Attendance Correction Data on the base of url
  getAttendanceCorrectionData(url) {
    this._attendanceService.getAttendMetaData(url).subscribe({
      next: (res: any) => {
        if (res.status != "failed") {
          this.dataSource.data = this.dataSource.data.concat(res.data.data);

          // this.pageIndex = res.data.current_page - 1;
          this.totalTableLength = res.data.total;
          this.pageSize = this.pageSize;

          this.pendingRequest = false;
          this.dataSource.sort = this.sort;
        }

        this.cdRef.detectChanges();
      },
      error: (error) => {
        this.pendingRequest = false;
        // this._sservice.erroMessage("An error occurred");
      },
    });
  }
  //get correction status for correction status table
  getCorrectionStatus(url) {
    this._attendanceService.getAttendMetaData(url).subscribe({
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
        // this._sservice.erroMessage("An error occurred");
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
              this.caURL + `&per_page=20&page=${nextPage}&filter_by=${this.searchString}`
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
  // setCredintials(){
  //   if(this.componentType.type == "Emp-Correction-Status"||this.componentType.type == "Emp-Correction-Applicaitons" ){
  //     this._attendanceService.empLogin()
  //   }else if(this.componentType.type == "lm-Correction-Status"||this.componentType.type == "lm-Correction-Applicaitons"){
  //     this._attendanceService.lmLogin()
  //   }
  //   else if(this.componentType.type == "hr-Correction-Status"||this.componentType.type == "hr-Correction-Applicaitons"){
  //     this._attendanceService.hrLogin()
  //   }
  // }
}
