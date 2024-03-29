import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { AttendanceService } from "../attendance.service";

@Component({
  selector: "app-line-manager",
  templateUrl: "./line-manager.component.html",
  styleUrls: ["./line-manager.component.css"],
})
export class LineManagerComponent implements OnInit {
  application_type = new FormControl("-1");
  application_status = new FormControl("-1");
  searched_by = new FormControl("");
  searchTerm = new FormControl("");
  correctionStatus = {
    type: "lm-Correction-Status",
  };
  correctionApplication = {
    type: "lm-Correction-Applicaitons",
  };
  empForm = {
    type: "lm-form",
    ComponenttypeId: 3,
  };
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
  applyFilter() {
    let url = `application_type=${this.application_type.value}&application_status=${this.application_status.value}&${this.searched_by.value}=${this.searchTerm.value}`;
    if (url != "") {
      this.attendanceService.setSearchTerm(url);
    }
  }
}
