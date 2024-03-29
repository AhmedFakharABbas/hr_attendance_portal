import { Component, OnInit, Input } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from "@angular/forms";
import { contains, data } from "jquery";
import { SharedService } from "src/app/shared/Service/shared.service";
import { AttendanceService } from "../attendance.service";
import { AttendanceCorrection } from "src/app/shared/models/attendance-correction";
import { leaveReversal } from "src/app/shared/models/leave-reversal";
import { ShiftChangeData } from "src/app/shared/models/shift_change";
import { environment } from "src/environments/environment";
import { ThrowStmt } from "@angular/compiler";
import { CustomValidators } from "../time.validator";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { APIs } from "src/environments/environment.prod";
@Component({
  selector: "app-attendance-form",
  templateUrl: "./attendance-form.component.html",
  styleUrls: ["./attendance-form.component.css"],
})
export class AttendanceFormComponent implements OnInit {
  @Input() componentType;

  attendanceCorrectionForm: FormGroup;
  leaveReversalForm: any;
  shiftChangeRequestForm: any;
  res: AttendanceCorrection;
  attendCorreMData: AttendanceCorrection;
  leaveReversalMetaData: Array<leaveReversal>;
  isEmployee: boolean;
  selectedReversalData: leaveReversal;
  uploadedFile: File;
  employeeId: number;
  currentShiftList: any;
  requstedShiftList: any;
  fileName: any;
  uploadedFileText;
  lmData: any;
  file_upload_url: any;
  filterdReqShifts: Observable<any[]>;
  currentShiftname: any;
  requestedShiftname: any;
  isLmHrActionDisable: boolean = false;
  isEMPLRDataPatch: boolean;
  isEMPLShiftRequestDataPatch: boolean;
  lmShiftData: any;
  resubmitAttendanceCorrection: boolean;
  hrLRData: any;
  isEMPLRRequestDataPatch: any;
  employeeName: string;
  rowData: any;
  isAttendancDatapatch: boolean = false;
  isLRDatapatch: boolean = false;
  shiftChangeDataPatch: boolean = false;
  today: Date;
  rowDatasubscription: any;

  constructor(
    private attendanceService: AttendanceService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.onUserRowClick();
    this.uploadedFileText = new FormControl("");
  }
  //load forms/other data for form
  loadData() {
    this.today = new Date();
    this.employeeName = JSON.parse(localStorage.getItem("emp_name"));
    this.employeeId = +localStorage.getItem("e_number");
    this.leaveReversalMetaData = new Array<leaveReversal>();

    this.componentType.type == "Emp-form"
      ? (this.isEmployee = true)
      : (this.isEmployee = false);
    this.attendanceCorrection();
    this.leaveCorrection();
    this.shiftChangeRequest();
    // this.onGetMetaData();
  }
  //to handle rowClick
  onUserRowClick() {
    this.rowDatasubscription = this.attendanceService.clickedRowData.subscribe(
      (rowData) => {
        //rowData.application_date
        rowData.componentType;
        if (rowData != "") {
          this.rowData = rowData;

          this.getRowDataForForm(rowData);
        }
      }
    );
  }

  getRowDataForForm(rowData) {
    //for line manger get attendance correction and shift change data
    if (rowData.componentType == "lm-Correction-Applicaitons") {
      if (rowData.correction_type == "attendance_correction") {
        this.isAttendancDatapatch = true;
        this.shiftChangeDataPatch = false;
        this.isLRDatapatch = false;
        this.getLmAttendanceCorrectionData(rowData);
      } else if (rowData.correction_type == "shift_change") {
        rowData.application_date;
        this.shiftChangeDataPatch = true;
        this.isAttendancDatapatch = false;
        this.isLRDatapatch = false;
        this.getLmShiftChangeData(rowData);
      }
    }
    //for HR manger get attendance correction and leave reversal data
    else if (rowData.componentType == "hr-Correction-Applicaitons") {
      if (rowData.correction_type == "leave_reversal") {
        this.getLeaveReversalMetaData(rowData, true);
        //this.isLRDatapatch=true;
        this.isLRDatapatch = true;
        this.shiftChangeDataPatch = false;
        this.isAttendancDatapatch = false;
      } else if (rowData.correction_type == "attendance_correction") {
        if (rowData.lm_status == "Approved" || rowData.lm_status == 2)
          (this.isAttendancDatapatch = true),
            (this.isLRDatapatch = false),
            (this.shiftChangeDataPatch = false),
            this.getHrAttendanceCorrectionData(rowData);
        else {
          this.sharedService.warningMessage(
            "Application is not Approved by Line manager"
          );
        }
      }
    }
    //for Employee screen
    else if (rowData.componentType == "Emp-Correction-Applicaitons") {
      if (rowData.type == "leave_reversal") {
        this.getLeaveReversalMetaData(rowData, false);
        this.isLRDatapatch = true;
        this.shiftChangeDataPatch = false;
        this.isAttendancDatapatch = false;
      } else if (rowData.type == "attendance_correction") {
        this.getEmployeeAttendanceCorrectionData(rowData);
        this.isAttendancDatapatch = true;
        this.shiftChangeDataPatch = false;
        this.isLRDatapatch = false;
      } else if (rowData.type == "shift_change") {
        this.getEmpShiftData(rowData);
        this.shiftChangeDataPatch = true;
        this.isAttendancDatapatch = false;
        this.isLRDatapatch = false;
      }
    }
  }

  //to get leave reversal meta data
  getLeaveReversalMetaData(rowData, isHr) {
    this.attendanceService.getLRMetaData(`${APIs.getAllLeaveTypes}`).subscribe({
      next: (res: any) => {
        if (res.statusCode == 200) {
          this.leaveReversalMetaData = [];
          this.leaveReversalMetaData = res.data;
          isHr
            ? this.gethrLRMetaData(rowData)
            : this.getEmployeeLRData(rowData);
        }
      },
      error: (error) => {
        this.sharedService.erroMessage(error.message);
      },
    });
  }

  //leave reversal form
  leaveCorrection() {
    this.leaveReversalForm = new FormGroup({
      employee_id: new FormControl("", Validators.required),
      employee_code: new FormControl("", Validators.required),
      employee_name: new FormControl("", Validators.required),
      leave_type_id: new FormControl("", Validators.required),
      from_date: new FormControl("", Validators.required),
      to_date: new FormControl("", Validators.required),
      reason: new FormControl("", Validators.required),
      hr_comments: new FormControl(""),
      application_id: new FormControl(""),
    });
  }
  //attendance Correction form
  attendanceCorrection() {
    this.attendanceCorrectionForm = new FormGroup(
      {
        //employee
        employee_id: new FormControl("", Validators.required),
        employee_code: new FormControl("", Validators.required),
        employee_name: new FormControl("", Validators.required),
        application_id: new FormControl(""),
        roster_date: new FormControl("", Validators.required),
        auto_fill_time_in: new FormControl("", Validators.required),
        auto_fill_time_out: new FormControl("", Validators.required),
        time_in: new FormControl("", Validators.required),
        time_out: new FormControl("", Validators.required),
        reason: new FormControl("", Validators.required),

        // lm
        lm_date: new FormControl("", Validators.required),
        lm_time_in: new FormControl("", Validators.required),
        lm_time_out: new FormControl("", Validators.required),
        lm_comments: new FormControl(""),
        lm_status: new FormControl(""),

        //hr
        hr_date: new FormControl("", Validators.required),
        hr_time_in: new FormControl("", Validators.required),
        hr_time_out: new FormControl("", Validators.required),
        hr_comments: new FormControl(""),
        hr_status: new FormControl(""),
      },
      [
        CustomValidators.ValidateTime("time_in", "time_out"),
        CustomValidators.ValidateLMTime("lm_time_in", "lm_time_out"),
        CustomValidators.ValidateHRTime("hr_time_in", "hr_time_out"),
      ]
    );
  }
  //shiftChange Request  form
  shiftChangeRequest() {
    this.shiftChangeRequestForm = new FormGroup({
      employee_id: new FormControl("", Validators.required),
      employee_code: new FormControl("", Validators.required),
      employee_name: new FormControl("", Validators.required),
      shift_date: new FormControl("", Validators.required),
      requested_shift: new FormControl("", Validators.required),
      current_shift: new FormControl("", Validators.required),
      reason: new FormControl("", Validators.required),
      lm_comments: new FormControl(""),
      shift_change_id: new FormControl("", Validators.required),
    });
  }
  //on submit attendance correction
  onSubmitAttendaceCorrection(formDirective: FormGroupDirective) {
    let formdata = this.attendanceCorrectionForm.value;
    let data = this.attendanceCorrectionForm.value;

    //formateDate
    if (
      this.componentType.type == "Emp-form" &&
      (formdata.time_in == "" ||
        formdata.time_in == null ||
        formdata.time_out == "" ||
        formdata.time_out == null ||
        this.attendanceCorrectionForm.controls["reason"].status == "INVALID" ||
        this.attendanceCorrectionForm.controls["time_out"].status ==
          "INVALID" ||
        formdata.time_in == "null:00" ||
        formdata.time_in == null ||
        formdata.time_out == "null:00" ||
        formdata.time_out == null)
    ) {
      this.attendanceCorrectionForm.markAllAsTouched();

      return;
    }

    // data.time_in = data.time_in + ":00";
    // data.time_in = data.time_in + ":00";

    data.time_in = this.sharedService.twentyFourHourTime(data.time_in);
    data.time_out = this.sharedService.twentyFourHourTime(data.time_out);
    data.auto_fill_time_in = this.sharedService.twentyFourHourTime(
      data.auto_fill_time_in
    );
    data.auto_fill_time_out = this.sharedService.twentyFourHourTime(
      data.auto_fill_time_out
    );

    //set the date and client id
    data.roster_date = this.sharedService.DateFormater(data.roster_date);
    data.client_id = localStorage.getItem("client_id");
    data.employee_id = localStorage.getItem("e_number");
    //remove null values for other forms
    Object.keys(data).forEach((key) => {
      if (data[key] === null) {
        delete data[key];
      }
    });

    this.submitData(
      APIs.createEmpAttendCorrection,
      data,
      this.attendanceCorrectionForm,
      formDirective,
      true
    );
  }
  //on Re submit attendance correction application
  onReSubmitAttendaceCorrection(formDirective: FormGroupDirective) {
    let formdata = this.attendanceCorrectionForm.value;
    let data = this.attendanceCorrectionForm.value;
    //formateDate

    if (
      this.componentType.type == "Emp-form" &&
      (formdata.auto_fill_time_in == "" ||
        formdata.auto_fill_time_out == null ||
        this.attendanceCorrectionForm.controls["reason"].status == "INVALID" ||
        this.attendanceCorrectionForm.controls["reason"].status == "INVALID" ||
        formdata.roster_date == "" ||
        formdata.roster_date == null)
    ) {
      this.attendanceCorrectionForm.markAllAsTouched();
      return;
    }

    data.time_in = this.sharedService.twentyFourHourTime(
      data.auto_fill_time_in
    );
    data.time_out = this.sharedService.twentyFourHourTime(
      data.auto_fill_time_out
    );
    data.auto_fill_time_in = this.sharedService.twentyFourHourTime(
      data.auto_fill_time_in
    );
    data.auto_fill_time_out = this.sharedService.twentyFourHourTime(
      data.auto_fill_time_out
    );
    //data.time_out = data.time_out + ":00";

    //set the date and client id
    data.roster_date = this.sharedService.DateFormater(data.roster_date);
    data.client_id = localStorage.getItem("client_id");
    data.employee_id = localStorage.getItem("e_number");

    //remove null values for other forms
    Object.keys(data).forEach((key) => {
      if (data[key] === null) {
        delete data[key];
      }
    });

    this.submitData(
      APIs.createEmpAttendCorrection,
      data,
      this.attendanceCorrectionForm,
      formDirective,
      true
    );
  }
  //on  submit Leave reversal
  onSubmitLeaveReversal(formDirective: FormGroupDirective) {
    let formData = this.leaveReversalForm.value;
    formData.employee_id = +localStorage.getItem("e_number");
    formData.employee_name = localStorage.getItem("emp_name");

    if (
      this.componentType.type == "Emp-form" &&
      (formData.employee_id =
        "" ||
        formData.employee_name == "" ||
        formData.leave_type_id == "" ||
        formData.leave_type_id == null ||
        formData.reason == "" ||
        formData.reason == null ||
        this.leaveReversalForm.controls["reason"].status == "INVALID" ||
        formData.from_date == "" ||
        formData.from_date == null ||
        formData.to_date == "" ||
        formData.to_date == null)
    ) {
      this.leaveReversalForm.markAllAsTouched();
      return;
    }

    // /employee_id
    formData.client_id = +localStorage.getItem("client_id");
    formData.employee_id = +localStorage.getItem("e_number");
    formData.employee_name = localStorage.getItem("emp_name");

    formData.leave_id = this.selectedReversalData.leave_id;
    formData.from_date = this.selectedReversalData.from_date;
    formData.to_date = this.selectedReversalData.to_date;
    formData.file_upload = this.uploadedFile;
    delete formData["hr_comments"];
    delete formData["application_id"];
    if (formData.file_upload == undefined) {
      delete formData.file_upload;
    }
    this.submitData(
      APIs.createEmpLeaveReversalRequest,
      formData,
      this.leaveReversalForm,
      formDirective,
      false
    );
    formData = undefined;
  }
  //on  submit shift change application
  onSubmitShiftChange(formDirective: FormGroupDirective) {
    let formdata = this.shiftChangeRequestForm.value;
    formdata.employee_id = localStorage.getItem("e_number");
    formdata.employee_name = localStorage.getItem("emp_name");
    if (
      this.componentType.type == "Emp-form" &&
      (formdata.employee_id == "" ||
        formdata.employee_name == "" ||
        formdata.shift_date == "" ||
        formdata.shift_date == undefined ||
        formdata.requested_shift == "" ||
        formdata.requested_shift == undefined ||
        formdata.current_shift == "" ||
        formdata.current_shift == undefined ||
        this.shiftChangeRequestForm.controls["reason"].status == "INVALID")
    ) {
      this.shiftChangeRequestForm.markAllAsTouched();
      return;
    }

    formdata.client_id = localStorage.getItem("client_id");

    let fromDate = this.sharedService.DateFormater(formdata.from_date);
    formdata.from_date = undefined;
    formdata.from_date = fromDate;
    formdata.shift_date = this.sharedService.DateFormater(formdata.shift_date);

    let toDate = this.sharedService.DateFormater(formdata.to_date);
    formdata.from_date = undefined;
    formdata.to_date = toDate;
    // raised in feedback

    this.submitData(
      APIs.createEmpShiftChangeRequest,
      formdata,
      this.shiftChangeRequestForm,
      formDirective,
      false
    );
    formdata = undefined;
  }
  //on approve/disapprove attendance correction application by LM/HR
  onApproveStatus(aproveStatus: number, formDirective) {
    if (this.isLmHrActionDisable) {
      this.rowData.lm_status == "2" || this.rowData.hr_status == "2"
        ? this.sharedService.warningMessage("Application already approved")
        : this.rowData.lm_status == "3" || this.rowData.hr_status == "3"
        ? this.sharedService.warningMessage("Application already disapproved")
        : "";
      return;
    }
    let data = {};
    let url;
    let formDatadata = this.attendanceCorrectionForm.value;

    data["client_id"] = localStorage.getItem("client_id");
    data["user_id"] = localStorage.getItem("e_number");
    data["attendance_correction_id"] = 1;
    if (this.componentType.type == "lm-form") {
      if (
        formDatadata.lm_date == "" ||
        formDatadata.lm_date == null ||
        formDatadata.lm_time_in == "" ||
        formDatadata.lm_time_in == null ||
        formDatadata.lm_time_out == "" ||
        formDatadata.lm_time_out == null ||
        this.attendanceCorrectionForm.controls["lm_time_out"].status ==
          "INVALID"
      ) {
        this.attendanceCorrectionForm.markAllAsTouched();

        return;
      }
      // lm data
      data["lm_date"] = this.sharedService.DateFormater(formDatadata.lm_date);
      data["lm_time_in"] = this.sharedService.twentyFourHourTime(
        formDatadata.lm_time_in
      );
      data["lm_time_out"] = this.sharedService.twentyFourHourTime(
        formDatadata.lm_time_out
      );
      data["lm_comments"] = formDatadata.lm_comments;
      data["lm_status"] = aproveStatus;
      data["attendance_correction_id"] = this.attendCorreMData.application_id;
      this.submitData(
        APIs.createLmAttendanceCorrectionRemarks,
        data,
        this.attendanceCorrectionForm,
        formDirective,
        true
      );
    } else if (this.componentType.type == "hr-form") {
      if (
        formDatadata.hr_date == "" ||
        formDatadata.hr_date == null ||
        formDatadata.hr_time_in == "" ||
        formDatadata.hr_time_in == null ||
        formDatadata.hr_time_out == "" ||
        formDatadata.hr_time_out == null ||
        this.attendanceCorrectionForm.controls["hr_time_out"].status ==
          "INVALID"
      ) {
        this.attendanceCorrectionForm.markAllAsTouched();

        return;
      }

      data["attendance_correction_id"] =
        this.attendCorreMData.attendance_correction_id;
      //hr data
      data["hr_date"] = this.sharedService.DateFormater(formDatadata.hr_date);
      data["hr_time_in"] = this.sharedService.twentyFourHourTime(
        formDatadata.hr_time_in
      );
      data["hr_time_out"] = this.sharedService.twentyFourHourTime(
        formDatadata.hr_time_out
      );
      data["hr_comments"] = formDatadata.hr_comments;
      data["hr_status"] = aproveStatus;

      this.submitData(
        APIs.createHRAttendanceCorrectionRemarks,
        data,
        this.attendanceCorrectionForm,
        formDirective,
        true
      );
    }
  }
  //on approve/disapprove leave reversal application by HR
  onHrLRApproveStatus(aproveStatus: number, formDirective) {
    if (this.rowData.hr_status == "2" || this.rowData.hr_status == "3") {
      this.rowData.hr_status == "2" || this.rowData.hr_status == "2"
        ? this.sharedService.warningMessage("Application already approved")
        : this.rowData.hr_status == "3" || this.rowData.hr_status == "3"
        ? this.sharedService.warningMessage("Application already disapproved")
        : "";
      return;
    }
    let data: any = {};
    let url;
    let formDatadata = this.leaveReversalForm.value;
    data["client_id"] = +localStorage.getItem("client_id");
    data["hr_id"] = +localStorage.getItem("e_number");
    data["hr_status"] = aproveStatus;

    if (
      formDatadata.from_date == "" ||
      formDatadata.to_date == "" ||
      formDatadata.leave_type_id == ""
    ) {
      this.leaveReversalForm.markAllAsTouched();
      return;
    }
    data["hr_comments"] = formDatadata.hr_comments;
    data["application_id"] = formDatadata.application_id;

    this.submitData(
      APIs.createHRLeaveReversalRemarks,
      data,
      this.leaveReversalForm,
      formDirective,
      false
    );
  }
  // on  approve/disapprove shift change application by LM
  onLMAppveStatus(aproveStatus: number, formDirective) {
    if (this.rowData.lm_status == "2" || this.rowData.lm_status == "3") {
      this.rowData.lm_status == "2" || this.rowData.hr_status == "2"
        ? this.sharedService.warningMessage("Application already approved")
        : this.rowData.lm_status == "3" || this.rowData.hr_status == "3"
        ? this.sharedService.warningMessage("Application already disapproved")
        : "";
      return;
    }
    let data = {};
    let url;
    let formDatadata = this.shiftChangeRequestForm.value;

    data["client_id"] = localStorage.getItem("client_id");
    data["user_id"] = +localStorage.getItem("e_number");
    data["lm_status"] = aproveStatus;

    if (
      formDatadata.shift_date == "" ||
      formDatadata.shift_date == undefined ||
      formDatadata.requested_shift == "" ||
      formDatadata.requested_shift == undefined ||
      formDatadata.current_shift == "" ||
      formDatadata.current_shift == undefined ||
      formDatadata.reason == "" ||
      formDatadata.reason == undefined
    ) {
      // this.sharedService.warningMessage("unvalid data");

      this.shiftChangeRequestForm.markAllAsTouched();
      // this.sharedService.warningMessage("All input fields are required.");
      return;
    }

    data["shift_change_id"] = formDatadata.shift_change_id;
    data["lm_comments"] = formDatadata.lm_comments;

    this.submitData(
      APIs.createLmshiftChangeRemarks,
      data,
      this.shiftChangeRequestForm,
      formDirective,
      true
    );
  }
  //To hanlde all the post request of this form component
  submitData(url, data, form, formDirective, isattendanceForm: Boolean) {
    //i the request is leave reversal type then send the post request in fomrs FormData
    if (url == APIs.createEmpLeaveReversalRequest) {
      let formData = new FormData();
      for (var key in data) {
        formData.append(key, data[key]);
      }
      this.attendanceService.postFormDataSubmit(url, formData).subscribe({
        next: (res) => {
          if (res.message == "The given data is invalid.") {
            this.perepareErrorMessage(res);

            return;
          }
          if (isattendanceForm == true) {
            this.attendanceCorrection();
            this.lmData = undefined;
          }
          this.attendanceService.setPostRequestData(url);
          res.message == "This application already exists." ||
          res.message == "Attendance Correction Application already Approved"
            ? this.sharedService.warningMessage(res.message)
            : this.sharedService.successMessage(res.message);

          if (isattendanceForm == true) {
            this.attendanceCorrection();
            this.lmData = undefined;
          }
          form.reset();
          formDirective.resetForm();
          this.uploadedFile = undefined;
          this.fileName = undefined;
          this.file_upload_url = undefined;
          this.leaveReversalMetaData = [];
          this.uploadedFileText.reset();
          //shift data clear

          this.lmShiftData = undefined;
          this.isEMPLShiftRequestDataPatch = undefined;
          this.shiftChangeRequest();
          this.shiftChangeRequestForm.reset();
        },
        error: (error) => {
          this.sharedService.erroMessage(error.message);
          // this.sharedService.erroMessage("Sorry something went wrong");
        },
      });
    } else {
      this.attendanceService.postSubmit(url, data).subscribe({
        next: (res) => {
          //to handle any validataion error
          if (res.message == "The given data is invalid.") {
            this.perepareErrorMessage(res);
            return;
          }

          if (isattendanceForm == true) {
            this.attendanceCorrection();
            this.lmData = undefined;
          }
          //set the post request url in share service
          this.attendanceService.setPostRequestData(url);
          //to handle the exception
          res.message == "This application already exists." ||
          res.message == "Attendance Correction Application already Approved"
            ? this.sharedService.warningMessage(res.message)
            : this.sharedService.successMessage(res.message);
          //clear form data  and all the variables
          form.reset();
          formDirective.resetForm();
          this.uploadedFile = undefined;
          this.fileName = undefined;
          this.leaveCorrection();
          this.uploadedFileText.reset();
          this.file_upload_url = undefined;
          this.isEMPLRDataPatch = undefined;
          this.hrLRData = undefined;
          this.isEMPLRRequestDataPatch = undefined;
          this.leaveReversalForm.reset();
          this.isLRDatapatch = false;
          this.shiftChangeDataPatch = false;
          this.isAttendancDatapatch = false;
          this.rowData = undefined;
          // this.onGetMetaData();
        },
        error: (error) => {
          this.sharedService.erroMessage(error.message);
          // this.sharedService.erroMessage("Sorry something went wrong");
        },
      });
    }
  }

  //on file upload for leave reversal Application
  onLeaveReversalFileUpload(event) {
    // clear previous data
    this.uploadedFile = undefined;
    this.fileName = undefined;
    this.uploadedFileText = new FormControl("");
    //  set
    if (event.target.files.length > 0) {
      this.uploadedFile = event.target.files[0];
      this.fileName = this.uploadedFile.name;
      this.uploadedFileText.setValue(this.fileName);
    }
  }
  //to  get employee atendance Correction against the employee id and date.
  getEmpAttendanceCorrectionData(id, date) {
    if (this.attendCorreMData == undefined) {
      this.attendanceService
        .getAttendMetaData(
          `${APIs.getEmpRosterDetails}?employee_id=${id}&roster_date=${date}`
        )
        .subscribe({
          next: (res: any) => {
            if (res.status == "success") {
              this.attendCorreMData = res.data;

              this.attendCorreMData.auto_fill_time_in =
                this.sharedService.twelveHourTime(res.data.time_in);
              this.attendCorreMData.time_in = "";
              this.attendCorreMData.auto_fill_time_out =
                this.sharedService.twelveHourTime(res.data.time_out);
              this.attendCorreMData.time_out = "";
              this.attendanceCorrectionForm.reset();
              this.attendanceCorrectionForm.patchValue(this.attendCorreMData);

              // this.sharedService.successMessage(res.message);
              this.sharedService.successMessage(res.message);
            } else {
              this.sharedService.warningMessage(res.message);

              this.attendanceCorrectionForm.controls[
                "auto_fill_time_in"
              ].setValue("");
              this.attendanceCorrectionForm.controls[
                "auto_fill_time_out"
              ].setValue("");
            }
          },
          error: (error) => {
            this.sharedService.erroMessage(error.message);
            //this.sharedService.erroMessage("Sorry something went wrong");
          },
        });
    } else {
      this.attendanceCorrectionForm.reset();
      this.attendanceCorrectionForm.patchValue(this.attendCorreMData);
    }
  }
  //to get the employee leave types on the base of from datae , to_date
  getEmpLeaveReversalData(data) {
    this.attendanceService
      .getAttendMetaData(`${APIs.getEmpLeaveTypes}`, data)
      .subscribe({
        next: (res: any) => {
          if (res.status == "success") {
            //to clear previous data
            this.leaveReversalMetaData = [];
            this.leaveReversalMetaData = res.data;
            this.sharedService.successMessage(res.message);
          } else {
            if (res.message == "Record not found.") {
              this.sharedService.warningMessage("Record not found");
              return;
            }
            this.perepareErrorMessage(res);
          }
        },
        error: (error) => {
          this.sharedService.erroMessage(error.message);
        },
      });
  }
  //to get attendance lm metadata
  getLmAttendanceCorrectionData(rowData) {
    this.attendanceService
      .getAttendMetaData(
        `${APIs.getAttendApplicationDetails}?application_id=${rowData.application_id}`
      )
      .subscribe({
        next: (res: any) => {
          if (res.statusCode == 200) {
            //clear prevousData
            this.attendanceCorrectionForm.reset();
            this.attendanceCorrection();
            this.lmData = undefined;
            this.attendCorreMData = undefined;
            this.isLmHrActionDisable = false;
            //clear prevousData

            let Empdata: any = res.data.emp_details;
            Empdata.is_utility = res.data.emp_details.is_utility;
            this.lmData = this.sortData(
              res.data.lm_hr_details,
              "getLmAttendanceCorrectionData"
            );

            //to check if the lmdata has only one record of same user then it should reset

            //set EmpData
            Empdata.auto_fill_time_in = this.sharedService.twelveHourTime(
              Empdata.employee_time_in
            );
            Empdata.employee_time_in = undefined;
            Empdata.auto_fill_time_out = this.sharedService.twelveHourTime(
              Empdata.employee_time_out
            );
            Empdata.employee_time_out = undefined;
            Empdata.reason = Empdata.brief_reason_employee;
            //set date
            Empdata.roster_date = Empdata.employee_date;
            Empdata.lm_date = Empdata.employee_date;
            Empdata.lm_time_in = Empdata.auto_fill_time_in;
            Empdata.lm_time_out = Empdata.auto_fill_time_out;

            //LM section new
            let i = 0;
            for (let x of this.lmData) {
              let time_in = this.sharedService.twelveHourTime(
                x.time_in.split(" ").pop()
              );
              let time_out = this.sharedService.twelveHourTime(
                x.time_out.split(" ").pop()
              );

              let timeInFormControl = "lm_time_in_" + i;
              this.attendanceCorrectionForm.addControl(
                timeInFormControl,
                new FormControl(time_in, Validators.required)
              );
              let timeOutFormControl = "lm_time_out_" + i;
              this.attendanceCorrectionForm.addControl(
                timeOutFormControl,
                new FormControl(time_out, Validators.required)
              );

              this.attendanceCorrectionForm.addControl(
                "lm_comments_" + i,
                new FormControl(x.comments, Validators.required)
              );
              i++;
            }

            this.attendCorreMData = Empdata;
            //attach LM data if exist
            if (this.lmData.length) {
              let filterdLMData = this.lmData.filter(
                (lmdata) =>
                  lmdata.approver_empid ===
                    +localStorage.getItem("s_u_number") &&
                  lmdata.role == "LM" &&
                  lmdata.status != 1
              );


              if (filterdLMData.length ) {

                this.isLmHrActionDisable = true;
              } else {
                //this.isLmHrActionDisable = false;

                Empdata.is_utility === 1
                  ? (this.isLmHrActionDisable = true)
                  : (this.isLmHrActionDisable = false);
              }
            }

            // patch value with formate
            this.attendanceCorrectionForm.patchValue(this.attendCorreMData);
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            this.attendCorreMData = undefined;
            this.attendanceCorrectionForm.reset();

            this.sharedService.warningMessage(res.message);
          }
        },
        error: (error) => {
          this.sharedService.erroMessage(error.message);
        },
      });
  }
  //to get shift change  for lm of any employee
  getLmShiftChangeData(rowData) {
    let data: any = {};
    // if (this.attendCorreMData == undefined) {
    this.attendanceService
      .getAttendMetaData(
        `${APIs.getAttendApplicationDetails}?application_id=${rowData.application_id}`
      )
      .subscribe({
        next: (res: any) => {
          if (res.statusCode == 200) {
            //clear previously selected data
            this.lmShiftData = undefined;
            this.isEMPLShiftRequestDataPatch = undefined;
            this.shiftChangeRequest();
            this.shiftChangeRequestForm.reset();
            this.currentShiftList = [];
            this.requstedShiftList = [];
            //clear previously slected data

            let shiftChangeData: ShiftChangeData;
            let employeeData = res.data.emp_details;

            // add current shift in shifttypes
            let currentShiftObj: any = {};
            currentShiftObj.shift_name = employeeData.current_shift_name;
            currentShiftObj.current_shift = employeeData.current_shift_id;
            this.currentShiftList.push(currentShiftObj);
            //add requsted shift
            let reqshiftObj: any = {};
            reqshiftObj.name = employeeData.requested_shift_name;
            reqshiftObj.shift_id = employeeData.requested_shift_id;
            this.requstedShiftList.push(reqshiftObj);
            //add requsted shift end
            this.lmShiftData = this.sortData(
              res.data.lm_hr_details,
              "getLmShiftChangeData"
            );
            data.shift_date = employeeData.employee_date;
            data.requested_shift = employeeData.requested_shift_id;
            data.current_shift = employeeData.current_shift_id;
            data.reason = employeeData.brief_reason_employee;
            data.shift_change_id = rowData.application_id;
            data.employee_id = employeeData.employee_id;
            data.employee_code = employeeData.employee_code;
            data.employee_name = employeeData.employee_name || "";

            //insert form controls for LM HR data and patch the value
            let i = 0;
            for (let x of this.lmShiftData) {
              this.shiftChangeRequestForm.addControl(
                "lm_comments_" + i,
                new FormControl(x.comments, Validators.required)
              );
              i++;
            }
            let filterdLmHrData = this.lmShiftData.filter(
              (lmdata) =>
                lmdata.approver_empid === +localStorage.getItem("s_u_number") &&
                lmdata.role == "LM" &&
                lmdata.status != 1
            );

            if (filterdLmHrData.length) {
              this.isEMPLShiftRequestDataPatch = true;
            } else {
              this.isEMPLShiftRequestDataPatch = false;
            }
            this.shiftChangeRequestForm.patchValue(data);

            //this.sharedService.successMessage(res.message);
            window.scrollTo({ top: 0, behavior: "smooth" });
            // this.showSuccessMessge(res.message);
          } else {
            this.attendCorreMData = undefined;
            this.attendanceCorrectionForm.reset();
            // this.sharedService.warningMessage(res.message);

            this.sharedService.warningMessage(res.message);
          }
        },
        error: (error) => {
          // this.sharedService.erroMessage(error.message);
          this.sharedService.erroMessage(error.message);
        },
      });
  }
  //to get shift change  for EMP of any employee
  getEmpShiftData(rowData) {
    let data: any = {};
    this.attendanceService
      .getAttendMetaData(
        `${APIs.getAttendApplicationDetails}?application_id=${rowData.id}`
      )
      .subscribe({
        next: (res: any) => {
          if (res.statusCode == 200) {
            //clear previously selected data
            this.lmShiftData = undefined;
            this.isEMPLShiftRequestDataPatch = undefined;
            this.shiftChangeRequest();
            this.shiftChangeRequestForm.reset();
            this.currentShiftList = [];
            this.requstedShiftList = [];
            //clear previously slected data
            let employeeData = res.data.emp_details;
            this.lmShiftData = res.data.lm_hr_details;

            // add current shift in shifttypes
            let currentShiftObj: any = {};
            currentShiftObj.shift_name = employeeData.current_shift_name;
            currentShiftObj.current_shift = employeeData.current_shift_id;
            this.currentShiftList.push(currentShiftObj);
            //add requsted shift
            let reqshiftObj: any = {};
            reqshiftObj.name = employeeData.requested_shift_name;
            reqshiftObj.shift_id = employeeData.requested_shift_id;
            this.requstedShiftList.push(reqshiftObj);
            //add requsted shift end
            data.shift_date = employeeData.employee_date;
            data.requested_shift = employeeData.requested_shift_id;
            data.current_shift = employeeData.current_shift_id;
            data.reason = employeeData.brief_reason_employee;
            data.employee_id = employeeData.employee_id;
            data.employee_code = employeeData.employee_code;
            data.employee_name = employeeData.employee_name || "";

            this.isEMPLShiftRequestDataPatch = true;

            //insert form controls for LM HR data and patch the value
            let i = 0;
            for (let x of this.lmShiftData) {
              this.shiftChangeRequestForm.addControl(
                "lm_comments_" + i,
                new FormControl(x.comments, Validators.required)
              );
              i++;
            }
            //patch value  to form
            this.shiftChangeRequestForm.patchValue(data);
            window.scrollTo({ top: 0, behavior: "smooth" });
            // this.showSuccessMessge(res.message);
          }
        },
        error: (error) => {
          // this.sharedService.erroMessage(error.message);
          this.sharedService.erroMessage(error.message);
        },
      });
  }
  // to get Hr attendance metadata
  getHrAttendanceCorrectionData(rowData) {
    let data: any = {};

    this.attendanceService
      .getAttendMetaData(
        `${APIs.getAttendApplicationDetails}?application_id=${rowData.application_id}`
      )
      .subscribe({
        next: (res: any) => {
          if (res.statusCode == 200) {
            //clear previous data section start
            this.attendanceCorrectionForm.reset();
            this.attendanceCorrection();
            this.lmData = undefined;
            this.isLmHrActionDisable = false;
            this.attendCorreMData = undefined;
            //clear previous data section end

            let Empdata: any = {};
            let resData = res.data.emp_details;
            this.lmData = this.sortData(
              res.data.lm_hr_details,
              "getHRAttendanceCorrectionData"
            );

            //Emp Data
            Empdata.roster_date = resData.employee_date;
            Empdata.is_utility = resData.is_utility;
            Empdata.auto_fill_time_in = this.sharedService.twelveHourTime(
              resData.employee_time_in
            );
            Empdata.auto_fill_time_out = this.sharedService.twelveHourTime(
              resData.employee_time_out
            );

            Empdata.employee_id = resData.employee_id;
            Empdata.employee_code = resData.employee_code;
            Empdata.employee_name = resData.employee_name || "";
            Empdata.reason = resData.brief_reason_employee;
            Empdata.attendance_correction_id = resData.application_id;

            //Lm data binding portion start here
            let i = 0;
            for (let x of this.lmData) {
              let time_in = this.sharedService.twelveHourTime(
                x.time_in.split(" ").pop()
              );
              let time_out = this.sharedService.twelveHourTime(
                x.time_out.split(" ").pop()
              );

              let timeInFormControl = "lm_time_in_" + i;
              this.attendanceCorrectionForm.addControl(
                timeInFormControl,
                new FormControl(time_in, Validators.required)
              );
              let timeOutFormControl = "lm_time_out_" + i;
              this.attendanceCorrectionForm.addControl(
                timeOutFormControl,
                new FormControl(time_out, Validators.required)
              );

              this.attendanceCorrectionForm.addControl(
                "lm_comments_" + i,
                new FormControl(x.comments, Validators.required)
              );
              i++;
            }
            //Lm-HR data binding portion Ends here
            //check if current HR already given the details
            let filterdLmHrData = this.lmData.filter(
              (lmdata) =>
                lmdata.approver_empid === +localStorage.getItem("s_u_number") &&
                lmdata.role == "HR" &&
                lmdata.status != 1
            );

            if (filterdLmHrData.length) {
              this.isLmHrActionDisable = true;
            } else {
              // this.isLmHrActionDisable = false;

              Empdata.is_utility === 1
                ? (this.isLmHrActionDisable = true)
                : (this.isLmHrActionDisable = false);
            }
            // for auto approv

            //date binding for LM and HR
            Empdata.lm_date = resData.employee_date;
            Empdata.hr_date = resData.employee_date;

            Empdata.hr_time_in = this.sharedService.twelveHourTime(
              resData.employee_time_in
            );
            Empdata.hr_time_out = this.sharedService.twelveHourTime(
              resData.employee_time_out
            );
            // Empdata.hr_time_out=resData.employee_time_out;
            // // patch value with formate
            this.attendCorreMData = Empdata;

            this.attendanceCorrectionForm.patchValue(Empdata);

            window.scrollTo({ top: 0, behavior: "smooth" });
            //this.sharedService.successMessage(res.message);
            // this.showSuccessMessge(res.message);
          } else {
            this.attendCorreMData = undefined;
            this.attendanceCorrectionForm.reset();
            // this.sharedService.warningMessage(res.message);
            this.sharedService.warningMessage(res.message);
          }
        },
        error: (error) => {
          // this.sharedService.erroMessage(error.message);
          this.sharedService.erroMessage(error.message);
        },
      });
  }

  // to get Hr leave reversal metadata
  gethrLRMetaData(rowData) {
    let data: any = {};

    data.employee_id = rowData.employee_id;
    data.leave_type_id = this.leaveReversalMetaData[0].leave_type_id;
    data.date = rowData.leave_date;
    this.attendanceService
      .getLRMetaData(
        `${APIs.getAttendApplicationDetails}?application_id=${rowData.application_id}`
      )
      .subscribe({
        next: (res: any) => {
          //clear previously selected data
          this.hrLRData = undefined;
          this.isEMPLRRequestDataPatch = undefined;
          this.leaveCorrection();
          this.leaveReversalForm.reset();
          //clear previously slected data
          let data: any = {};
          let employeeData = res.data.emp_details;
          this.hrLRData = this.sortData(
            res.data.lm_hr_details,
            "lm_hr_details"
          );

          data.from_date = employeeData.employee_from_date;
          data.to_date = employeeData.employee_to_date;
          data.leave_type_id = employeeData.leave_type_id;
          data.employee_id = employeeData.employee_id;
          data.employee_code = employeeData.employee_code;
          data.employee_name = employeeData.employee_name || "";

          data.reason = employeeData.brief_reason_employee;
          data.application_id = rowData.application_id;
          this.file_upload_url = employeeData.file_upload;
          if (this.file_upload_url.length < 5) {
            this.file_upload_url = undefined;
          }

          //patch the deatials of hr
          let i = 0;
          for (let x of this.hrLRData) {
            this.leaveReversalForm.addControl(
              "hr_comments" + i,
              new FormControl(x.comments)
            );
            i++;
          }
          let filterdLmHrData = this.hrLRData.filter(
            (lmdata) =>
              lmdata.approver_empid === +localStorage.getItem("s_u_number") &&
              lmdata.role == "HR" &&
              lmdata.status != 1
          );
          if (filterdLmHrData.length) {
            this.isEMPLRRequestDataPatch = true;
          } else {
            this.isEMPLRRequestDataPatch = false;
          }
          this.leaveReversalForm.patchValue(data);
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        error: (error) => {
          this.sharedService.erroMessage(error.message);
        },
      });
  }
  // to get Employee attendance metadata
  getEmployeeAttendanceCorrectionData(rowData) {
    let data: any = {};
    this.attendanceService
      .getAttendMetaData(
        `${APIs.getAttendApplicationDetails}?application_id=${rowData.id}`
      )
      .subscribe({
        next: (res: any) => {
          if (res.statusCode == 200) {
            //clear previous data section start
            this.attendanceCorrectionForm.reset();
            this.attendanceCorrection();
            this.lmData = undefined;
            this.isLmHrActionDisable = false;
            this.attendCorreMData = undefined;
            this.resubmitAttendanceCorrection = false;
            //clear previous data section end

            let Empdata: any = {};
            let resData = res.data.emp_details;
            this.lmData = this.sortData(
              res.data.lm_hr_details,
              "getEmpAttendanceCorrectionData"
            );

            //Emp Data
            //  rowData.lm_status == "Disapproved" ||
            // if (rowData.hr_status == "Disapproved") {
            //   this.resubmitAttendanceCorrection = true;
            // }

            Empdata.roster_date = resData.employee_date;
            Empdata.auto_fill_time_in = this.sharedService.twelveHourTime(
              resData.employee_time_in
            );
            Empdata.auto_fill_time_out = this.sharedService.twelveHourTime(
              resData.employee_time_out
            );

            Empdata.employee_id = resData.employee_id;
            Empdata.employee_code = resData.employee_code;
            Empdata.employee_name = resData.employee_name || "";
            Empdata.reason = resData.brief_reason_employee;
            Empdata.attendance_correction_id = resData.application_id;

            //Lm data binding portion start here
            let i = 0;
            for (let x of this.lmData) {
              let time_in = this.sharedService.twelveHourTime(
                x.time_in.split(" ").pop()
              );
              let time_out = this.sharedService.twelveHourTime(
                x.time_out.split(" ").pop()
              );

              let timeInFormControl = "lm_time_in_" + i;
              this.attendanceCorrectionForm.addControl(
                timeInFormControl,
                new FormControl(time_in, Validators.required)
              );
              let timeOutFormControl = "lm_time_out_" + i;
              this.attendanceCorrectionForm.addControl(
                timeOutFormControl,
                new FormControl(time_out, Validators.required)
              );

              this.attendanceCorrectionForm.addControl(
                "lm_comments_" + i,
                new FormControl(x.comments, Validators.required)
              );
              i++;
            }
            //Lm-HR data binding portion Ends here
            //check if current HR already given the details
            let filterdLmHrData = this.lmData.filter(
              (lmdata) =>
                lmdata.approver_empid === +localStorage.getItem("s_u_number") &&
                lmdata.role == "HR"
            );
            if (filterdLmHrData.length) {
              this.isLmHrActionDisable = true;
            } else {
              this.isLmHrActionDisable = false;
            }
            //date binding for LM and HR
            Empdata.lm_date = resData.employee_date;
            Empdata.hr_date = resData.employee_date;

            // // patch value with formate
            this.attendCorreMData = Empdata;
            Empdata.application_id = rowData.id;
            this.attendanceCorrectionForm.patchValue(Empdata);

            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            this.attendCorreMData = undefined;
            this.attendanceCorrectionForm.reset();

            this.sharedService.warningMessage(res.message);
          }
        },
        error: (error) => {
          this.sharedService.erroMessage(error.message);
        },
      });
  }
  // to get Employee attendance metadata
  getEmployeeLRData(rowData) {
    let data: any = {};
    this.attendanceService
      .getAttendMetaData(
        `${APIs.getAttendApplicationDetails}?application_id=${rowData.id}`
      )
      .subscribe({
        next: (res: any) => {
          if (res.statusCode == 200) {
            //clear previously selected data
            this.hrLRData = undefined;
            this.isEMPLRRequestDataPatch = undefined;
            this.leaveCorrection();
            this.leaveReversalForm.reset();
            this.isEMPLRDataPatch = undefined;
            //clear previously slected data
            let data: any = {};
            let employeeData = res.data.emp_details;
            this.hrLRData = this.sortData(
              res.data.lm_hr_details,
              "lm_hr_details"
            );

            data.from_date = employeeData.employee_from_date;
            data.to_date = employeeData.employee_to_date;
            data.leave_type_id = employeeData.leave_type_id;

            data.reason = employeeData.brief_reason_employee;
            data.application_id = rowData.application_id;
            data.employee_id = employeeData.employee_id;
            data.employee_code = employeeData.employee_code;
            data.employee_name = employeeData.employee_name || "";
            this.file_upload_url = employeeData.file_upload;
            if (this.file_upload_url.length < 5) {
              this.file_upload_url = undefined;
            }

            //patch the deatials of hr
            let i = 0;
            for (let x of this.hrLRData) {
              this.leaveReversalForm.addControl(
                "hr_comments" + i,
                new FormControl(x.comments)
              );
              i++;
            }
            let filterdLmHrData = this.hrLRData.filter(
              (lmdata) =>
                lmdata.approver_empid === +localStorage.getItem("s_u_number") &&
                lmdata.role == "HR" &&
                lmdata.status != 1
            );

            this.leaveReversalForm.patchValue(data);
            this.isEMPLRDataPatch = true;
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        },
        error: (error) => {
          this.sharedService.erroMessage(error.message);
        },
      });
  }

  //handle date change  event for employee
  onRosterDateChange() {
    if (this.componentType.type == "Emp-form") {
      if (this.attendanceCorrectionForm.value.roster_date != null) {
        let date = this.sharedService.DateFormater(
          this.attendanceCorrectionForm.value.roster_date
        );
        //clear form data
        this.attendanceCorrectionForm.controls["time_in"].setValue("");
        this.attendanceCorrectionForm.controls["time_out"].setValue("");
        this.attendanceCorrectionForm.controls["reason"].setValue("");

        this.lmData = undefined;
        this.isLmHrActionDisable = false;
        this.attendCorreMData = undefined;

        //clear previous data section end
        this.getEmpAttendanceCorrectionData(this.employeeId, date);
      }
    } else {
      return;
    }
  }
  //to get shift date for employee when he  select the date
  onShiftDateChange() {
    if (this.shiftChangeRequestForm.value.shift_date != null) {
      let date = this.sharedService.DateFormater(
        this.shiftChangeRequestForm.value.shift_date
      );
      this.getRequstedShifts(this.employeeId, date),
        this.getCurrentShifts(this.employeeId, date);
    }
  }
  //on select leave type for employee
  onSelectLeaveType(event) {
    this.selectedReversalData = undefined;
    if (this.componentType.type == "Emp-form") {
      let leaveType = this.leaveReversalMetaData.filter(
        (leave) => leave.leave_type_id == event.value
      )[0];
      let leaveReversalData: any = {};

      this.selectedReversalData = leaveType;

      this.leaveReversalForm.patchValue(leaveReversalData);
    } else {
      return;
    }
  }
  //on select leave type for employee
  onLrDateChange() {
    if (
      this.componentType.type == "Emp-form" &&
      this.leaveReversalForm.get("from_date").value != "" &&
      this.leaveReversalForm.get("from_date").value != null &&
      this.leaveReversalForm.get("to_date").value != "" &&
      this.leaveReversalForm.get("to_date").value != null
    ) {
      //clear form data

      this.leaveReversalForm.controls["leave_type_id"].setValue("");
      this.leaveReversalForm.controls["reason"].setValue("");
      this.file_upload_url = undefined;
      this.fileName = undefined;
      //clear form data
      let data: any = {};
      data.from_date = this.sharedService.DateFormater(
        this.leaveReversalForm.get("from_date").value
      );
      data.to_date = this.sharedService.DateFormater(
        this.leaveReversalForm.get("to_date").value
      );
      data.employee_id = this.employeeId;

      this.getEmpLeaveReversalData(data);
    }
  }

  getCurrentShifts(id, date) {
    let data: any = {};
    data.employee_id = id;
    data.shift_date = date;
    this.attendanceService
      .getShiftMData(`${APIs.getEmpShiftDetails}`, data)
      .subscribe({
        next: (res: any) => {
          if (res.status == "success") {
            this.currentShiftList = res.data;
            data.current_shift = res.data[0].current_shift;
            this.currentShiftname = res.data[0].shift_name;
            this.shiftChangeRequestForm.patchValue(data);

            this.sharedService.successMessage(res.message);
          } else {
            this.attendCorreMData = undefined;
            this.attendanceCorrectionForm.reset();
            this.sharedService.warningMessage(res.message);
          }
        },
        error: (error) => {
          this.sharedService.erroMessage(error.message);
        },
      });
  }
  getRequstedShifts(employee_id, date) {
    // if (this.attendCorreMData == undefined) {
    this.attendanceService
      .getShiftMData(
        `${APIs.getEmpShiftTypes}?employee_id=${employee_id}&shift_date=${date}`
      )
      .subscribe({
        next: (res: any) => {
          if (res.status == "pass") {
            this.requstedShiftList = res.data;
          }
        },
        error: (error) => {
          this.sharedService.erroMessage(error.message);
        },
      });
  }
  //to handle the array of error messages from server
  perepareErrorMessage(res) {
    let errorkeys = Object.keys(res.error);

    errorkeys.forEach((key: any) => {
      let subkey = Object.keys(res.error[key]);

      subkey.forEach((skey: any) => {
        this.sharedService.erroMessage(res.error[key][skey]);
        // this.errorList.push(res.error[key][skey]);
      });
    });
  }
  //to open the LR view file in new window
  openFile() {
    window.open(this.file_upload_url);
  }
  // to sort data
  sortData(data, method) {
    let arrayLM = data.filter((x) => x.role == "LM");
    let arrayHR = data.filter((x) => x.role == "HR");
    for (let index = 0; index < arrayLM.length; index++) {
      arrayLM[index].count = index + 1;
    }
    for (let index = 0; index < arrayHR.length; index++) {
      arrayHR[index].count = index + 1;
    }
    return [...arrayLM, ...arrayHR];
  }

  //on component destroy
  ngOnDestroy() {
    this.rowDatasubscription.unsubscribe();
  }
}
