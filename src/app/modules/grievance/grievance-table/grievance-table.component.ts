import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { APIs } from "../../../../environments/environment";
import { CorrectionStatus } from "../../../shared/interfaces/correction-status";
import { EmployeeGrievance } from "../../../shared/interfaces/employee grievance";
import { SharedService } from "../../../shared/Service/shared.service";

import { GrievanceService } from "../grievance.service";
const APPLICATIONS_DATA: any[] = [];
const STATUS_DATA: CorrectionStatus[] = [];
let f: any[] = [];
@Component({
  selector: "app-grievance-table",
  templateUrl: "./grievance-table.component.html",
  styleUrls: ["./grievance-table.component.css"],
})
export class GrievanceTableComponent implements OnInit {
  constructor(private grievanceService: GrievanceService ,private sharedService: SharedService,) {}
  status = new FormControl();
  employeeNameFilter = new FormControl();

  @Input() applicationType;
  selectedValue: string;
  selectedCar: string;
  @ViewChild(MatSort) sort: MatSort;

  columnsToDisplay: string[];
  dataSource = new MatTableDataSource();
  tableURL: string;
  allApplications: any;

  ngOnInit(): void {
    this.getMetaData();
    this.onChangeTablePeramters();
  }
  //to get meta data
  getMetaData() {
    if (this.applicationType.type == "Emp-portal") {
      this.getEmployeePortalData();
    } else if (this.applicationType.type == "hrPortalEnquiries") {
      this.getHrEnquires();
    } else if (
      this.applicationType.type == "lmPortalEnquiries" ||
      this.applicationType.type == "lmPortalPersonalApplications"
    ) {
      this.getLmEnquires();
    }
  }
  //to handle change detection
  onChangeTablePeramters() {
    this.status.valueChanges.subscribe((value) => {
      this.statusFilterChange(value);
    });
    this.employeeNameFilter.valueChanges.subscribe((value) => {
      this.employeeNameFilterChange(value);
    });
    this.grievanceService.PostRequestData.subscribe((postUrl) => {
      //rowData.application_date

      if (postUrl != "") {
        this.dataSource = new MatTableDataSource();
        this.getMetaData();
      }
    });
  }
  //for employee portal
  getEmployeePortalData() {
    this.tableURL = APIs.getGrievanceApplication;
    this.columnsToDisplay = [
      "application_id",
      "issue_raised_against_employee",
      "against_employee_name",
      "create_at",
      "from_date",
      "to_date",

      "application_status",
    ];
    this.getGrievanceApplicaitonsData(APIs.getGrievanceApplication);
    // let columns=this.applicationColums.splice(1,1)
    // console.log(columns);
    // this.columnsToDisplay=[...this.applicationColums]
  }
  //for HR
  getHrEnquires() {
    this.tableURL = "/get_hr_enquiries_list";
    this.columnsToDisplay = [
      "employee_id",
      "complaiant_name",
      "create_at",
      "type",
      "from_date",
      "to_date",
      "lm_status",
    ];
    this.getGrievanceApplicaitonsData("/get_hr_enquiries_list");
  }
  //for Line manager portal
  getLmEnquires() {
    this.tableURL = APIs.getGrievanceApplication;
    this.columnsToDisplay = [
      "application_id",
      "issue_raised_against_employee",
      "against_employee_name",
      "create_at",
      "from_date",
      "to_date",
      "application_type",
      "application_status",
    ];
    this.getGrievanceApplicaitonsData(APIs.getGrievanceApplication);
  }
  //to handle grievance application
  getGrievanceApplicaitonsData(url) {
    this.dataSource = new MatTableDataSource();
    this.grievanceService.getData(url).subscribe({
      next: (res: any) => {
        console.log(res.data);
        if (this.applicationType.type == "lmPortalEnquiries") {
          let serverData = res[0];
          res.data.assigned_applications.forEach((application) => {
            application.against_employee_name =
              application.issue_raised_against_employee != null
                ? application.issue_raised_against_employee.name
                : "-";
            application.application_type = "Assigned";
          });
          res.data.lm_applications.forEach((application) => {
            application.against_employee_name =
              application.issue_raised_against_employee != null
                ? application.issue_raised_against_employee.name
                : "-";
            application.application_type = "Submitted";
          });
          let resData = [
            ...res.data.assigned_applications,
            ...res.data.lm_applications,
          ];

          resData.sort(this.dynamicDesSort("application_id"));
          this.dataSource.data = this.dataSource.data.concat(resData);
          this.dataSource.sort = this.sort;
        } else if (this.applicationType.type == "Emp-portal") {
          let serverData = res[0];
          res.data.forEach((application) => {
            application.against_employee_name =
              application.issue_raised_against_employee != null
                ? application.issue_raised_against_employee.name
                : "-";
            console.log(application);
          });
          this.dataSource.data = this.dataSource.data.concat(res.data);
          this.dataSource.sort = this.sort;
        }
        // else if(this.applicationType.type == "lmPortalPersonalApplications"){

        //   let serverData = res[0];
        //   res.data.lm_applications.forEach(application => {
        //    application.against_employee_name= application.issue_raised_against_employee!=null?application.issue_raised_against_employee.name:"-"
        //    console.log(application);
        //   });
        //    this.dataSource.data = this.dataSource.data.concat(
        //     res.data.lm_applications
        //    );
        //    this.dataSource.sort = this.sort;

        // }
      },
      error: (error) => {
        this.sharedService.erroMessage("Sorry something went wrong");
      },
    });
  }
  //to handle sorting
  dynamicSort(property) {
    return function (a, b) {
      return a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    };
  }
  dynamicDesSort(property) {
    return function (a, b) {
      return a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0;
    };
  }
  //on table scroll
  onTableScroll(e) {}
  //on status filter change
  statusFilterChange(value) {
    if (value != undefined && value.length >= 1) {
      if (value == "Approved") {
        this.dataSource = new MatTableDataSource();
        this.tableURL =
          this.applicationType.type == "Emp-portal"
            ? "/get_grievance_applicaitons&status=approved"
            : this.applicationType.type == "hrPortalEnquiries"
            ? "/get_grievance_applicaitons&status=approved"
            : "/get_grievance_applicaitons&status=approved";

        this.getGrievanceApplicaitonsData(this.tableURL);
      } else if (value == "Disapproved") {
        this.dataSource = new MatTableDataSource();
        // this.tableURL="/get_grievance_applicaitons&status=disapproved";
        this.tableURL =
          this.applicationType.type == "Emp-portal"
            ? "/get_grievance_applicaitons&status=disapproved"
            : this.applicationType.type == "hrPortalEnquiries"
            ? "/get_grievance_applicaitons&status=disapproved"
            : "/get_grievance_applicaitons&status=disapproved";

        this.getGrievanceApplicaitonsData(this.tableURL);
      } else if (value == "Pending") {
        this.dataSource = new MatTableDataSource();
        // this.tableURL="/get_grievance_applicaitons&status=pending";
        this.tableURL =
          this.applicationType.type == "Emp-portal"
            ? "/get_grievance_applicaitons&status=pending"
            : this.applicationType.type == "hrPortalEnquiries"
            ? "/get_grievance_applicaitons&status=pending"
            : "/get_grievance_applicaitons&status=pending";
        this.getGrievanceApplicaitonsData(this.tableURL);
      } else {
        this.dataSource = new MatTableDataSource();
        this.getMetaData();
      }
    } else {
      return null;
    }
  }
  //on employee name value cahnge
  employeeNameFilterChange(value) {
    if (value != undefined && value.length >= 1) {
    } else {
      return null;
    }
  }
  //to handle row click
  onRowClick(data: any) {


    data.componentType = this.applicationType.type;
    this.grievanceService.setRowData(data);
  }
}
