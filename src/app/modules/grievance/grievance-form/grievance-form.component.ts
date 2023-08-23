import { Component, OnInit, Input, TemplateRef } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { GrievanceService } from "../grievance.service";
import { SharedService } from "../../../shared/Service/shared.service";
import { Observable } from "rxjs/internal/Observable";
import { map, startWith } from "rxjs/operators";
import { APIs, environment } from "../../../../../src/environments/environment";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { element } from "protractor";
import { DomSanitizer } from "@angular/platform-browser";
import { type } from "os";
import { ChangeDetectorRef } from "@angular/core";
@Component({
  selector: "app-grievance-form",
  templateUrl: "./grievance-form.component.html",
  styleUrls: ["./grievance-form.component.css"],
})
export class GrievanceFormComponent implements OnInit {
  public baseUrl = environment.laravelUrl;
  modalRef?: BsModalRef;
  modalType: String;
  @Input() applicationType;
  grievanceForm: FormGroup;
  allDepartments: any;
  isFailMessage;
  isSnaksBarDisplay = false;
  show = false;
  alertMessage: string;
  isSccessMessage;
  isWarnMessage;

  allDesignations: any;
  myControl = new FormControl("");
  options: string[] = ["One", "Two", "Three"];
  filteredOptions: Observable<string[]>;
  employee_list: any;
  isAudioStatement = false;
  isWrittenStatement = false;
  isVideoStatement = false;
  isPicture = false;
  isAnonymous = false;
  uploadedFile: any;
  disableEmployeeFormSubmit: boolean = false;
  fileName: any;
  file_upload_url = undefined;
  evidenceArray = [];
  lmEvidenceArray = [];
  filteredEvidences: any = [];
  selectedEvidence: any;
  isDetailOPenbyLM: boolean = false;
  isDetailOpen: boolean = false;
  isSubmitedApp: boolean = false;

  allowedTypes = {
    audio: ["mp3", "wav", "ogg","mpeg"],
    video: ["mp4", "webm", "ogg"],
    image: ["jpg", "jpeg", "png"],
    file: ["doc", "docx", "pdf"],
  };
  isSavedApplications: boolean;
  today: Date;
  loginLMSection: any;
  pendingRequest: number=0;
  apiSubscriptions: any;

  constructor(
    private grievanceService: GrievanceService,
    private sharedService: SharedService,
    private modalService: BsModalService,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {

    this.today = new Date();
    this.initializeEvidences();
    this.loadGrievanceForm();
    // console.log(this.applicationType);
    this.onGetMetaData();

    this.grievanceService.clickedRowData.subscribe((rowData) => {
      //rowData.application_date
      rowData.componentType;
      this.initializeEvidences()
      if (rowData != "") {

        this.getRowDataForForm(rowData);
      }
    });
  }
  initializeEvidences() {
    if (this.applicationType.type == "lm-portal") {
      this.lmEvidenceArray = [
        {
          type: "",
          text: "",
          file: "",
        },
      ];
    }
    this.evidenceArray = [
      {
        type: "",
        text: "",
        file: "",
      },
    ];
  }
  //attach row data
  getRowDataForForm(rowData) {
    if (rowData.componentType == "Emp-portal") {
      this.resetGrievanceForm();
      this.grievanceService
        .getData(`${APIs.getGrievanceApplication}/${rowData.application_id}`)
        .subscribe({
          next: (res: any) => {
            if (res.status == 200) {
              let formobject: any = {};

              formobject.from_date = res.data.from_date;
              formobject.to_date = res.data.to_date;

              //by
              formobject.issue_raised_by_emp_id =
                res.data.issue_raised_by_emp_id;
              formobject.employee_name = res.data.issue_raised_by_employee.name;
              formobject.issue_raised_by_dept_id =
                res.data.issue_raised_by_dept_id;
              this.isAnonymous = res.data.anonymous == 1 ? true : false;


              formobject.issue_raised_by_dept_name =
                res.data.issue_raised_by_department.department_name;

              formobject.issue_raised_by_desig_id =
                res.data.issue_raised_by_desig_id;
                formobject.issue_raised_against_emp_id=res.data.issue_raised_against_emp_id;
              // formobject.issue_raised_by_desig_name =
              //   res.data.issue_raised_by_designation.name;
              res.data.issue_raised_against_emp_id == 0
                ? (formobject.target_type_id = "1")
                : (formobject.target_type_id = "2");
              formobject.issue_type_id = res.data.issue_type_id.toString();

              // against
              formobject.issue_raised_against_dept_id =
                res.data.issue_raised_against_dept_id;
              formobject.issue_raised_against_desig_id =
                res.data.issue_raised_against_desig_id;

              formobject.from_date = this.sharedService.DateFormater(
                res.data.from_date
              );
              formobject.to_date = this.sharedService.DateFormater(
                res.data.to_date
              );
              //set the evidence
              this.evidenceArray = [];
              if (res.data.detail_section != null) {
                if (res.data.detail_section.text_description != null) {
                  formobject.text = res.data.detail_section.text_description;
                }
                if (res.data.detail_section.videos.length > 0) {
                  this.evidenceArray = [
                    ...this.evidenceArray,
                    ...res.data.detail_section.videos.map((x) => {
                      return {
                        url: x.file_path,
                        type: "video",
                        text: "",
                        fileName: x.file_name
                          ? x.file_name
                          : "",
                        evidence_id: x.evidence_id,
                      };
                    }),
                  ];
                }
                if (res.data.detail_section.images.length > 0) {
                  this.evidenceArray = [
                    ...this.evidenceArray,
                    ...res.data.detail_section.images.map((x) => {
                      return {
                        url: x.file_path,
                        type: "image",
                        text: "",
                        fileName: x.file_name
                          ? x.file_name
                          : "",
                        evidence_id: x.evidence_id,
                      };
                    }),
                  ];
                }
                if (res.data.detail_section.audio.length > 0) {
                  this.evidenceArray = [
                    ...this.evidenceArray,
                    ...res.data.detail_section.audio.map((x) => {
                      return {
                        url: x.file_path,
                        type: "audio",
                        text: "",
                        fileName: x.file_name
                          ? x.file_name
                          : "",
                        evidence_id: x.evidence_id,
                      };
                    }),
                  ];
                }
              }
              //initilize evidence if evidence are empty

              if(this.evidenceArray.length==0){
                this.lmEvidenceArray = [
                  {
                    type: "",
                    text: "",
                    file: "",
                  },
                ];
              }


              if (res.data.save_draft == 1) {
                this.disableEmployeeFormSubmit = false;
                this.isSavedApplications = true;
                formobject.application_id = rowData.application_id;
              } else {
                this.disableEmployeeFormSubmit = true;
                this.isSavedApplications = false;
              }
              this.isDetailOpen = true;
              this.grievanceForm.patchValue(formobject);
              this.sharedService.successMessage("Application details");

              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          },
          error: (error) => {
            this.sharedService.erroMessage("Sorry something went wrong");
          },
        });
    }

    //for lm screen
    else if (rowData.componentType == "lmPortalEnquiries") {
      this.resetGrievanceForm();
      this.grievanceService
        .getData(`${APIs.getGrievanceApplication}/${rowData.application_id}`)
        .subscribe({
          next: (res: any) => {
            if (res.status == 200) {
              this.loadGrievanceForm();
              //issubmitted app will be true if this application is submitted by LM him self
              if (rowData.application_type == "Submitted") {
                this.isSubmitedApp = true;
              } else if (rowData.application_type == "Assigned") {
                this.isSubmitedApp = false;
              }
              //empty the formobject data
              let formobject: any = {};
              //to disable employee form submit for saved applications
              if (res.data.save_draft == 1 || !this.isSubmitedApp) {

                this.disableEmployeeFormSubmit = false;
                this.isSavedApplications = true;
                formobject.application_id = rowData.application_id;
              } else {
                this.disableEmployeeFormSubmit = true;
                this.isSavedApplications = false;
              }
              formobject.application_id = rowData.application_id;
              formobject.from_date = res.data.from_date;
              formobject.to_date = res.data.to_date;

              // issue raised by
              // formobject.issue_type_id=res.data.issue_type_id;
              //by
              formobject.issue_type_id = res.data.issue_type_id.toString();
              formobject.issue_raised_by_dept_id =
                res.data.issue_raised_by_dept_id;
              this.isAnonymous = res.data.anonymous == 1 ? true : false;
              formobject.issue_raised_by_dept_name =
                res.data.issue_raised_by_department.department_name;

              formobject.issue_raised_by_desig_id =
                res.data.issue_raised_by_desig_id;

              formobject.employee_name = res.data.issue_raised_by_employee.name;

              formobject.issue_raised_by_emp_id =
                res.data.issue_raised_by_emp_id;
              formobject.employee_name = res.data.issue_raised_by_employee.name;
              formobject.issue_raised_by_desig_name = res.data
                .issue_raised_by_designation
                ? res.data.issue_raised_by_designation.name
                : "";
              res.data.issue_raised_against_emp_id == 0
                ? (formobject.target_type_id = "1")
                : (formobject.target_type_id = "2");
              //raised against

              formobject.issue_raised_against_dept_id =
                res.data.issue_raised_against_dept_id;
              formobject.issue_raised_against_desig_id =
                res.data.issue_raised_against_desig_id;
              formobject.issue_raised_against_emp_id =
                res.data.issue_raised_against_emp_id;
              //date section
              formobject.from_date = this.sharedService.DateFormater(
                res.data.from_date
              );
              formobject.to_date = this.sharedService.DateFormater(
                res.data.to_date
              );
              //set the evidence for Employee's details section
              this.evidenceArray = [];
              if (res.data.detail_section != null) {
                if (res.data.detail_section.text_description != null) {
                  formobject.text = res.data.detail_section.text_description;
                }
                if (res.data.detail_section.videos.length > 0) {
                  this.evidenceArray = [
                    ...this.evidenceArray,
                    ...res.data.detail_section.videos.map((x) => {
                      return {
                        url: x.file_path,
                        type: "video",
                        text: "",
                        fileName: x.file_name
                          ? x.file_name
                          : "",
                        evidence_id: x.evidence_id,
                      };
                    }),
                  ];
                }
                if (res.data.detail_section.images.length > 0) {


                  this.evidenceArray = [
                    ...this.evidenceArray,
                    ...res.data.detail_section.images.map((x) => {
                      return {
                        url: x.file_path,
                        type: "image",
                        text: "",
                        fileName: x.file_name
                          ? x.file_name
                          : "",
                        evidence_id: x.evidence_id,
                      };
                    }),
                  ];
                }
                if (res.data.detail_section.audio.length > 0) {


                  this.evidenceArray = [
                    ...this.evidenceArray,
                    ...res.data.detail_section.audio.map((x) => {
                      return {
                        url: x.file_path,
                        type: "audio",
                        text: "",
                        fileName: x.file_name
                          ? x.file_name
                          : "",
                        evidence_id: x.evidence_id,
                      };
                    }),
                  ];
                }
              }
               //initilize evidence if evidence are empty
               if(this.evidenceArray.length==0){
                this.evidenceArray = [
                  {
                    type: "",
                    text: "",
                    file: "",
                  },
                ];
               }
              //set evidence for LM' details section
              this.loginLMSection=null;
              this.lmEvidenceArray=[];
              if (res.data.login_lm_section
                != null) {
                  this.loginLMSection=res.data.login_lm_section;
                  console.log( this.loginLMSection)
                if (res.data.login_lm_section.text_description != null) {

                  formobject.LMtext = res.data.login_lm_section.text_description;
                }
                if (res.data.login_lm_section.videos.length > 0) {
                  this.lmEvidenceArray = [
                    ...this.lmEvidenceArray,
                    ...res.data.login_lm_section.videos.map((x) => {
                      return {
                        url: x.file_path,
                        type: "video",
                        text: "",
                        fileName: x.file_name
                          ? x.file_name
                          : "",
                        evidence_id: x.evidence_id,
                      };
                    }),
                  ];
                }
                if (res.data.login_lm_section.images.length > 0) {


                  this.lmEvidenceArray = [
                    ...this.lmEvidenceArray,
                    ...res.data.login_lm_section.images.map((x) => {
                      return {
                        url: x.file_path,
                        type: "image",
                        text: "",
                        fileName: x.file_name
                          ? x.file_name
                          : "",
                        evidence_id: x.evidence_id,
                      };
                    }),
                  ];
                }
                if (res.data.login_lm_section.audio.length > 0) {


                  this.lmEvidenceArray = [
                    ...this.lmEvidenceArray,
                    ...res.data.login_lm_section.audio.map((x) => {
                      return {
                        url: x.file_path,
                        type: "audio",
                        text: "",
                        fileName: x.file_name
                          ? x.file_name
                          : "",
                        evidence_id: x.evidence_id,
                      };
                    }),
                  ];
                }
              }
              if(this.lmEvidenceArray.length==0){
                this.lmEvidenceArray = [
                  {
                    type: "",
                    text: "",
                    file: "",
                  },
                ];
               }
              //see the details and patch teh data
              console.log(formobject);
              this.isDetailOPenbyLM = true;
              console.log(this.evidenceArray);
              this.grievanceForm.patchValue(formobject);
              this.sharedService.successMessage("Application details");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          },
          error: (error) => {
            this.sharedService.erroMessage("Sorry something went wrong");
          },
        });
    }
  }
  // load form
  loadGrievanceForm() {
    this.grievanceForm = new FormGroup({
      application_id: new FormControl(""),
      issue_raised_by_desig_name: new FormControl(""),
      issue_raised_by_dept_name: new FormControl(""),
      employee_name: new FormControl("", Validators.required),
      issue_raised_by_emp_id: new FormControl("", Validators.required),
      issue_type_id: new FormControl("", Validators.required),
      issue_raised_against_emp_id: new FormControl("", Validators.required),
      issue_raised_by_dept_id: new FormControl("", Validators.required),
      issue_raised_by_desig_id: new FormControl("", Validators.required),
      target_type_id: new FormControl("", Validators.required),
      issue_raised_against_dept_id: new FormControl("", Validators.required),
      issue_raised_against_desig_id: new FormControl("", Validators.required),
      text: new FormControl(""),
      LMtext: new FormControl(""),
      from_date: new FormControl(""),
      to_date: new FormControl(""),
    });
  }
  //open file
  openFile() {
    let fileUrl = this.baseUrl + this.file_upload_url;

    window.open(fileUrl);
  }
  //  on SaveDraft
  onSaveDraft() {
    let formData = this.grievanceForm.value;
    if (formData.target_type_id == 1) {
      formData.issue_raised_against_emp_id = 0;
      this.grievanceForm.controls["issue_raised_against_emp_id"].setValue(0);
    }
    if (!this.grievanceForm.valid) {
      this.sharedService.warningMessage("Data is not valid");
      this.grievanceForm.markAllAsTouched();
      return;
    }
    formData.from_date = this.sharedService.DateFormater(formData.from_date);
    formData.to_date = this.sharedService.DateFormater(formData.to_date);
    formData.anonymous = +this.isAnonymous;
    formData.save_draft = 1;
    formData.recipient_type = "LM";

    let evidenceObj = {
      type: "text",
      text: "",
      file: null,
    };

    evidenceObj.type = "text";
    evidenceObj.text = formData.text;
    let evidence = [...this.evidenceArray];
    evidence.unshift(evidenceObj);

    //for genral  grievance
    formData.evidence = evidence;
    this.isSavedApplications
      ? this.updateFormData(
          `${APIs.getGrievanceApplication}/${formData.application_id}`,
          formData
        )
      : this.SubmitFormData(APIs.getGrievanceApplication, formData);
  }

  //  on SaveDraft
  onSendToLM() {
    let formData = this.grievanceForm.value;
    if (formData.target_type_id == 1) {
      formData.issue_raised_against_emp_id = 0;
      this.grievanceForm.controls["issue_raised_against_emp_id"].setValue(0);
    }
    if (!this.grievanceForm.valid) {
      this.sharedService.warningMessage("Data is not valid");
      this.grievanceForm.markAllAsTouched();
      return;
    }

    formData.from_date = this.sharedService.DateFormater(formData.from_date);
    formData.to_date = this.sharedService.DateFormater(formData.to_date);
    formData.anonymous = +this.isAnonymous;
    formData.save_draft = 0;
    formData.recipient_type = "LM";

    let evidenceObj = {
      type: "text",
      text: "",
      file: null,
    };

    evidenceObj.type = "text";
    evidenceObj.text = formData.text;
    console.log(evidenceObj);
    let evidence = [...this.evidenceArray];
    console.log(evidence);
    evidence.unshift(evidenceObj);
    console.log(evidence);

    formData.evidence = [...evidence];

    this.isSavedApplications
      ? this.updateFormData(
          `${APIs.getGrievanceApplication}/${formData.application_id}`,
          formData
        )
      : this.SubmitFormData(APIs.getGrievanceApplication, formData);
  }
  updateFormData(url, data) {
    let filteredArray = data.evidence.filter(
      (element) => element.url == undefined
    );
    data.evidence = [];
    data.evidence = filteredArray;
    this.SubmitFormData(url, data);
  }
  //  on SaveDraft
  onSendToHR() {
    let formData = this.grievanceForm.value;
    console.log(this.grievanceForm.value);
    if (formData.target_type_id == 1) {
      formData.issue_raised_against_emp_id = 0;
      this.grievanceForm.controls["issue_raised_against_emp_id"].setValue(0);
    }
    if (!this.grievanceForm.valid) {
      this.sharedService.warningMessage("Data is not valid");
      this.grievanceForm.markAllAsTouched();
      return;
    }

    formData.from_date = this.sharedService.DateFormater(formData.from_date);
    formData.to_date = this.sharedService.DateFormater(formData.to_date);
    formData.anonymous = +this.isAnonymous;
    formData.save_draft = 0;
    formData.recipient_type = "HR";
    //if lm opend some someone  details
    console.log(this.isDetailOPenbyLM);
    if (
      this.isDetailOPenbyLM == true &&
      this.isSavedApplications &&
      !this.isSubmitedApp
    ) {
      let evidenceObj = {
        type: "text",
        text: "blah blah",
        file: null,
      };

      evidenceObj.type = "text";
      evidenceObj.text = formData.LMtext;
      let evidence = [...this.lmEvidenceArray];
      evidence.unshift(evidenceObj);
      let LMUploadEvidence: any = {};
      LMUploadEvidence.lmEvidenceArray = evidence;
      this.LmSubmitDatatoHR(
        `${APIs.uploadGrievanceEvidence}/${formData.application_id}`,
        LMUploadEvidence
      );
      return;
    }

    //normal submit to HR
    let evidenceObj = {
      type: "text",
      text: "blah blah",
      file: null,
    };
    evidenceObj.type = "text";
    evidenceObj.text = formData.text;
    let evidence = [...this.evidenceArray];
    evidence.unshift(evidenceObj);
    formData.evidence = evidence;
    this.isSavedApplications
      ? this.updateFormData(
          `${APIs.getGrievanceApplication}/${formData.application_id}`,
          formData
        )
      : this.SubmitFormData(APIs.getGrievanceApplication, formData);
  }
  fileUploadHandler(evidence, fileUploadTemplate) {
    if (evidence.type == "" || evidence.type == null) {
      this.sharedService.warningMessage("Select evidence type");
      return;
    }
    fileUploadTemplate.click();
  }
  parseEvidencesTypes(evidences) {
    return evidences.map((x) => "." + x);
  }
  typeIsAllowed(type, evidenceType) {

    let uploadedType = type.toLowerCase();
    let selectedAllowedTypes = this.allowedTypes[evidenceType];

    if (selectedAllowedTypes) {
      return selectedAllowedTypes.includes(uploadedType);
    }
  }
  // file upload
  fileUpload(event, evidence, index) {
    if (evidence.type == "" || evidence.type == null) {
      this.sharedService.warningMessage("Select evidence type");
      return;
    }

    this.uploadedFile = undefined;

    if (event.target.files.length > 0) {
      let type = this.getFileType(event.target.files[0].type, "/");
      if (!this.typeIsAllowed(type, evidence.type)) {
        this.sharedService.warningMessage("Please select a valid file");
        return;
      }
      this.uploadedFile = event.target.files[0];
      console.log(this.uploadedFile);
      this.fileName = this.uploadedFile.name;
      //push evidence in array
      this.evidenceArray[index].file = event.target.files[0];
      this.evidenceArray[index].fileName =
        event.target.files[0].name;

      //show success message
      let message = this.fileName + " attached successfully";
      this.sharedService.successMessage(message);
    }
  }
  lmFileUpload(event, evidence, index) {
    if (evidence.type == "" || evidence.type == null) {
      this.sharedService.warningMessage("Select evidence type");
      return;
    }

    this.uploadedFile = undefined;

    if (event.target.files.length > 0) {
      this.uploadedFile = event.target.files[0];
      this.fileName = this.uploadedFile.name;
      //push evidence in array
      this.lmEvidenceArray[index].file = event.target.files[0];
      this.lmEvidenceArray[index].fileName =
        event.target.files[0].name;

      let message = this.fileName + " attached successfully";
      this.sharedService.successMessage(message);
    }
  }
  //Get meta data
  onGetMetaData() {
    //get meta data
    this.getAllDepartments();
    this.getAllDesiginations();
    this.getAllEmployees();

    //if employee open the screen
    this.setEmployeeData();
  }
  setEmployeeData() {
    if (
      this.applicationType.type == "Emp-portal" ||
      this.applicationType.type == "lm-portal"
    ) {
      let user = JSON.parse(localStorage.getItem("user_info"));
      console.log(user);
      this.grievanceForm.controls["employee_name"].setValue(
        user.name
      );
      this.grievanceForm.controls["issue_raised_by_emp_id"].setValue(
        localStorage.getItem("e_number")
      );
      this.grievanceForm.controls["issue_raised_by_emp_id"].setValue(
        localStorage.getItem("e_number")
      );

      this.grievanceForm.controls["issue_raised_by_dept_id"].setValue(
        user.department_id
      );
      this.grievanceForm.controls["issue_raised_by_dept_name"].setValue(
        user.department
      );
      this.grievanceForm.controls["issue_raised_by_desig_name"].setValue(
        user.designation_name
      );
      //correct
      // this.grievanceForm.controls["issue_raised_by_desig_id"].setValue(
      //   user.designation
      // );
      //for testing
      this.grievanceForm.controls["issue_raised_by_desig_id"].setValue(8);
      //get the employee issue_raised_by_dept_name and issue raised against from server
      this.grievanceService.getData(APIs.getLoginUserDetails).subscribe({
        next: (res: any) => {
          if (res.status == 200) {
            this.grievanceForm.controls["issue_raised_by_desig_id"].setValue(
              res.data.designation
            );
          }
        },
        error: (error) => {},
      });
    }
  }
  //reset form
  resetGrievanceForm() {
    // this.uploadedFile = undefined;
    // this.fileName = undefined;
    this.loginLMSection=null;
    this.grievanceForm.reset();
    this.isAnonymous = false;
    this.file_upload_url = undefined;
    this.isDetailOPenbyLM = false;
    this.isDetailOpen = false;
    this.disableEmployeeFormSubmit = false;
    this.isSavedApplications = false;
    this.isSubmitedApp = false;

    this.evidenceArray = [
      {
        type: "",
        text: "",
        file: "",
      },
    ];
    this.lmEvidenceArray = [
      {
        type: "",
        text: "",
        file: "",
      },
    ];
    this.setEmployeeData();
    if ( this.apiSubscriptions ) {
      this.pendingRequest=0;
      this.apiSubscriptions.unsubscribe();
   }
  }
  onSelectDesignation(event) {
    let departmentID = this.grievanceForm.value.issue_raised_against_dept_id;
    let desiginationID = this.grievanceForm.value.issue_raised_against_desig_id;
  }
  getAllDepartments() {
    this.grievanceService.getData(APIs.getAllDepartments).subscribe({
      next: (res: any) => {
        if (res.status == 200) {
          this.allDepartments = res.data;
        }
      },
      error: (error) => {
        this.sharedService.erroMessage("Sorry something went wrong");
      },
    });
  }
  getAllDesiginations() {
    this.grievanceService.getData(APIs.getAllDesignations).subscribe({
      next: (res: any) => {
        if (res.status == 200) {
          this.allDesignations = res.data;
        }
        // let serverData = res[0];
        // this.allDepartments = serverData.Departments;
        // this.allDesignations = serverData.Designations;
        // this.employee_list = serverData.Employees;
        // this.grievanceForm.patchValue(serverData.employee);
      },
      error: (error) => {},
    });
  }
  getAllEmployees() {
    this.grievanceService.getData(APIs.getAllEmployees).subscribe({
      next: (res: any) => {
        if (res.status == 200) {
          this.employee_list = res.data;
        }
        // let serverData = res[0];
        // this.allDepartments = serverData.Departments;
        // this.allDesignations = serverData.Designations;
        // this.employee_list = serverData.Employees;
        // this.grievanceForm.patchValue(serverData.employee);
      },
      error: (error) => {},
    });
  }
  getEmpFormData(url) {
    //to get data for  emp portal form
    this.grievanceService.getData(url).subscribe({
      next: (res: any) => {
        let serverData = res[0];
        this.allDepartments = serverData.Departments;
        this.allDesignations = serverData.Designations;
        this.employee_list = serverData.Employees;
        this.grievanceForm.patchValue(serverData.employee);
      },
      error: (error) => {},
    });
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  onChangeEvidenceType(event, index, type) {
    this.evidenceArray[index] = {
      file: null,
      type: "",
      text: "",
    };
    if (event.checked == true) {
      this.evidenceArray[index].type = type;
    }
  }
  onLMChangeEvidenceType(event, index, type) {
    if (event.checked == true) {
      this.lmEvidenceArray[index].type = type;
    }
  }
  onChangeAnynomus(event) {
    if (event.checked == true) {
      this.isAnonymous = true;
    } else {
      this.isAnonymous = false;
    }
  }
  SubmitFormData(url, data) {
    this.pendingRequest++;
    let formData = new FormData();
    for (var key in data) {
      if (key != "evidence") formData.append(key, data[key]);
    }
    data.evidence = data.evidence.filter(
      (element) => element.type == "text" || element.file != ""
    );

    for (let i = 0; i < data.evidence.length; i++) {
      formData.append(`evidence[${i}][type]`, data.evidence[i].type);
      formData.append(`evidence[${i}][text]`, data.evidence[i].text || "");
      formData.append(`evidence[${i}][file]`, data.evidence[i].file || "");
    }

    this.apiSubscriptions=  this.grievanceService.postFormDataSubmit(url, formData).subscribe({
      next: (res) => {
        this.pendingRequest--;
        this.grievanceService.setPostRequestData("get the list");
        this.sharedService.successMessage("Application created successfully.");
        this.resetGrievanceForm();

      },
      error: (error) => {
        this.pendingRequest--;
        this.sharedService.erroMessage("Sorry something went wrong");
      },
    });
  }
  deleteEvidence(ur, i) {
    this.grievanceService.deleteEvidence(ur).subscribe({
      next: (res) => {
        this.grievanceService.setPostRequestData("get the list");
        this.sharedService.successMessage("Evidence deleted successfully.");
      },
      error: (error) => {
        this.sharedService.erroMessage("Sorry something went wrong");
      },
    });
  }
  LmSubmitDatatoHR(url, data) {
    this.pendingRequest++;
    delete data[data.application_id];
    let formData = new FormData();
    data.lmEvidenceArray = data.lmEvidenceArray.filter(
      (element) => element.type == "text" || element.file != ""
    );
    //
    for (let i = 0; i < data.lmEvidenceArray.length; i++) {
      formData.append(`evidence[${i}][type]`, data.lmEvidenceArray[i].type);
      formData.append(
        `evidence[${i}][text]`,
        data.lmEvidenceArray[i].text || ""
      );
      formData.append(
        `evidence[${i}][file]`,
        data.lmEvidenceArray[i].file || ""
      );
    }
    this.apiSubscriptions=  this.grievanceService.postFormDataSubmit(url, formData).subscribe({
      next: (res) => {
        this.pendingRequest--;
        this.grievanceService.setPostRequestData("get the list");
        this.sharedService.successMessage("Application created successfully.");
        this.resetGrievanceForm();

      },
      error: (error) => {
        this.pendingRequest--;
        this.sharedService.erroMessage("Sorry something went wrong");

      },
    });
  }
  cancelUploadImage(index) {
    //delete from server
    if (this.evidenceArray[index].evidence_id != undefined) {
      this.deleteEvidence(
        `${APIs.deleteGrievanceEvidence}/${this.evidenceArray[index].evidence_id}`,
        index
      );
    }

    if (index == 0 && this.evidenceArray.length == 1) {
      this.evidenceArray = [
        {
          type: "",
          text: "",
          file: "",
        },
      ];
      return;
    }
    this.evidenceArray.splice(index, 1);
  }

  lmCancelUploadImage(index) {
    if (index == 0 && this.lmEvidenceArray.length == 1) {
      this.lmEvidenceArray = [
        {
          type: "",
          text: "",
          file: "",
        },
      ];
      return;
    }
    this.lmEvidenceArray.splice(index, 1);
  }
  addNewEvidence() {
    let evidenceObj = {
      type: "",
      text: "",
      file: "",
    };
    this.evidenceArray.push(evidenceObj);
  }
  addNewLMEvidence() {
    let evidenceObj = {
      type: "",
      text: "",
      file: "",
    };
    this.lmEvidenceArray.push(evidenceObj);
  }
  perepareErrorMessage(res) {
    let errorkeys = Object.keys(res.error);

    errorkeys.forEach((key: any) => {
      let subkey = Object.keys(res.error[key]);

      subkey.forEach((skey: any) => {
        this.sharedService.erroMessage(res.error[key][skey]);
      });
    });

    this.sharedService.erroMessage("no");
  }
  openModal(template: TemplateRef<any>, type: String) {
    // this.filteredEvidences=
    this.modalType = type;
    this.filteredEvidences = [
      ...this.evidenceArray.filter((element) => element.type == type),
    ];
    console.log(this.evidenceArray, this.filteredEvidences);
    this.modalRef = this.modalService.show(template);
  }
  openLMModal(template: TemplateRef<any>, type: String) {
    // this.filteredEvidences=
    this.modalType = type;
    this.filteredEvidences = [
      ...this.lmEvidenceArray.filter((element) => element.type == type),
    ];
    console.log(this.lmEvidenceArray, this.filteredEvidences);
    this.modalRef = this.modalService.show(template);
  }
  preview(evidence) {

    if (evidence.src) {
      evidence.src = null;
      return;
    }
    this.evidenceArray = [
      ...this.evidenceArray.map((x) => {
        x.src = null;
        return x;
      }),
    ];

    if (evidence.url) {
      let type = this.getFileType(evidence.url);
      evidence.src = environment.laravelUrl + evidence.url;
      evidence.fileType = type;
      return;
    } else {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        evidence.src = this.domSanitizer.bypassSecurityTrustUrl(
          e.target.result
        );
      };
      reader.readAsDataURL(evidence.file);
    }
  }
  getFileType(text, splitor = ".") {
    let split = text.split(splitor);
    let type = split[split.length - 1];
    return type;
  }
}
