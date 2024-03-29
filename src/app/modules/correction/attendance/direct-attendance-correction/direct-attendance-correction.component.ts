import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SharedService } from "src/app/shared/Service/shared.service";
import { AttendanceService } from "../attendance.service";
import { CustomValidators } from "../time.validator";
@Component({
  selector: "app-direct-attendance-correction",
  templateUrl: "./direct-attendance-correction.component.html",
  styleUrls: ["./direct-attendance-correction.component.css"],
})
export class DirectAttendanceCorrectionComponent implements OnInit {
  attendanceCorrectionForm: FormGroup;
  isSccessMessage: boolean;
  alertMessage: any;
  isSnaksBarDisplay: boolean;
  isWarnMessage: boolean;
  isFailMessage: boolean;
  errorList: any[];
  uploadedFile: any;
  isShowFileRequired: boolean;
  uploadedFileText;
  fileName: any;
  constructor(
    private _sservice: SharedService,
    private _attendanceService: AttendanceService
  ) { }

  ngOnInit(): void {
    this.attendanceCorrection();
    this.uploadedFileText = new FormControl("");
  }
  attendanceCorrection() {
    this.attendanceCorrectionForm = new FormGroup(
      {
        //employee
        employee_id: new FormControl("", Validators.required),
        roster_date: new FormControl("", Validators.required),
        time_in: new FormControl("", Validators.required),
        time_out: new FormControl("", Validators.required),
      },
      [CustomValidators.ValidateTime("time_in", "time_out")]
    );
  }
  onSubmitAttendaceCorrection(formDirective) {
    let formDatadata = this.attendanceCorrectionForm.value;
    formDatadata["client_id"] = localStorage.getItem("client_id");
    formDatadata["hr_id"] = localStorage.getItem("e_number");
    if (
      formDatadata.time_in == "" ||
      formDatadata.time_in == null ||
      formDatadata.time_out == "" ||
      formDatadata.time_out == null ||
      formDatadata.roster_date == "" ||
      formDatadata.roster_date == null ||
      this.attendanceCorrectionForm.controls["time_in"].status == "INVALID" ||
      this.attendanceCorrectionForm.controls["time_out"].status == "INVALID"
    ) {
      this.attendanceCorrectionForm.markAllAsTouched();

      return;
    }
    //if validation pass then submit the form
    formDatadata.time_in = this._sservice.twentyFourHourTime(
      formDatadata.time_in
    );
    formDatadata.time_out = this._sservice.twentyFourHourTime(
      formDatadata.time_out
    );
    formDatadata.roster_date = this._sservice.DateFormater(
      formDatadata.roster_date
    );

    //send API request to submit the data
    this._attendanceService
      .postSubmit(
        "/attendance_correction/hr_portal/hr_direct_attendance_approved",
        formDatadata
      )
      .subscribe({
        next: (res) => {
          if (res.message == "The given data is invalid.") {
            if (res.status && res.status == 'success') {
              this.attendanceCorrectionForm.reset();
              this.attendanceCorrection();
            }
            this.perepareErrorMessage(res);

            return;
          } else {
            this._attendanceService.setPostRequestData(
              "/attendance_correction/hr_portal/hr_direct_attendance_approved"
            );

            res.message == "This application already exists." ||
              res.message == "Attendance Correction Application already Approved"
              ? this.showWarnMessge(res.message)
              : this.showSuccessMessge(res.message);
            //this._sservice.successMessage(res.message);

            if (res.status && res.status == 'success') {
              this.attendanceCorrectionForm.reset();
              this.attendanceCorrection();
              formDirective.resetForm();
            }
          }

        },
        error: (error) => {
          this.showErrorMessage(error.message);
        },
      });
  }
  //on file upload
  onFileUploadChange(event) {
    this.resetUploadFile();
    this.uploadedFile = undefined;
    if (event.target.files.length > 0) {
      this.uploadedFile = event.target.files[0];
      this.fileName = this.uploadedFile.name;
      this.uploadedFileText.setValue(this.fileName);
    }
  }
  onFileUploadSubmit() {
    let data = {};
    if (this.uploadedFile == undefined) {
      this.isShowFileRequired = true;
      return;
    }
    data["import_file"] = this.uploadedFile;
    let formData = new FormData();
    for (var key in data) {
      formData.append(key, data[key]);
    }
    this._attendanceService
      .postFormDataSubmit(
        "/attendance_correction/hr_portal/attendance_bulk_upload",
        formData
      )
      .subscribe({
        next: (res) => {
          if (res.message == "The given data is invalid.") {
            this.perepareErrorMessage(res);

            this.resetUploadFile();
            return;
          }

          this._attendanceService.setPostRequestData(
            "/attendance_correction/hr_portal/attendance_bulk_upload"
          );
          this.showSuccessMessge(res.message);
          this.resetUploadFile();
        },
        error: (error) => {
          this.showErrorMessage(error.message);
        },
      });
  }
  //reset form
  resetUploadFile() {
    this.uploadedFile = undefined;
    this.fileName = undefined;
    this.uploadedFileText = undefined;
    this.uploadedFileText = new FormControl("");
    this.isShowFileRequired = false;
  }
  showSuccessMessge(message) {
    this.isSccessMessage = true;
    this.alertMessage = message;
    this.isSnaksBarDisplay = true;
    this.isWarnMessage = false;
    this.isFailMessage = false;
    setTimeout(() => {
      this.isSnaksBarDisplay = false;
      this.isSccessMessage = false;
    }, 4000);
  }
  showWarnMessge(message) {
    this.isSccessMessage = false;
    this.alertMessage = message;
    this.isSnaksBarDisplay = true;
    this.isWarnMessage = true;
    this.isFailMessage = false;
    setTimeout(() => {
      this.isSnaksBarDisplay = false;
      this.isWarnMessage = false;
    }, 4000);
  }
  showErrorMessage(message) {
    this.isSccessMessage = false;
    this.alertMessage = message;
    this.isSnaksBarDisplay = true;
    this.isWarnMessage = false;
    this.isFailMessage = true;
    setTimeout(() => {
      this.isSnaksBarDisplay = false;
      this.isFailMessage = false;
    }, 4000);
  }
  perepareErrorMessage(res) {
    this.errorList = [];
    let errorkeys = Object.keys(res.error);

    errorkeys.forEach((key: any) => {
      let subkey = Object.keys(res.error[key]);

      subkey.forEach((skey: any) => {
        this.errorList.push(res.error[key][skey]);
      });
    });

    this.showErrorMessage("no");
  }
}
