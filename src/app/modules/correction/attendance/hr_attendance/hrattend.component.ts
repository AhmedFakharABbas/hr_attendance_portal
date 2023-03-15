import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AttendanceService } from "../attendance.service";

@Component({
  selector: "app-hrattend",
  templateUrl: "./hrattend.component.html",
  styleUrls: ["./hrattend.component.css"],
})
export class HRAttendComponent implements OnInit {
  application_type = new FormControl("");
  application_status = new FormControl("");
  searched_by = new FormControl("");
  searchTerm = new FormControl("");

  correctionStatus = {
    type: "hr-Correction-Status",
  };
  correctionApplication = {
    type: "hr-Correction-Applicaitons",
  };
  empForm = {
    type: "hr-form",
    ComponenttypeId: 3,
  };
  firstName: any;
  constructor(private attendanceService: AttendanceService) {}

  ngOnInit(): void {
    this.SearchObjectForm();
    this.attendanceService.PostRequestData.subscribe((postUrl) => {
      if (postUrl != "") {
        this.SearchObjectForm();
      }
    });
  }
  SearchObjectForm() {
    this.application_type = new FormControl("-1");
    this.application_status = new FormControl("-1");
    this.searched_by = new FormControl("search_by_name");
    this.searchTerm = new FormControl("");
  }
  setSearchTerm() {
    // this.attendanceService.setSearchTerm(this.FilterValueFarmConctol.value);
  }
  applyFilter() {
    let url = `application_type=${this.application_type.value}&application_status=${this.application_status.value}&${this.searched_by.value}=${this.searchTerm.value}`;
    if (url != "") {
      this.attendanceService.setSearchTerm(url);
    }
  }
}