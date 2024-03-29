import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { AttendanceService } from "../attendance.service";

@Component({
  selector: "app-hrattend",
  templateUrl: "./hrattend.component.html",
  styleUrls: ["./hrattend.component.css"],
})
export class HRAttendComponent implements OnInit {
  FilterValueFarmConctol = new FormControl();
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
  constructor(private _attendanceService: AttendanceService) {}

  ngOnInit(): void {
    this.FilterValueFarmConctol = new FormControl("");
    // this.FilterValueFarmConctol.valueChanges.subscribe((value) => {
    //   this._attendanceService.setSearchTerm(value);

    // });
  }
  setSearchTerm() {
    this._attendanceService.setSearchTerm(this.FilterValueFarmConctol.value);
  }
  applyFilter(searchTerm) {
    if (searchTerm != "") {
      this._attendanceService.setSearchTerm(searchTerm);
    }
  }
}
