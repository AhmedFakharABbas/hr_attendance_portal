import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ConsoleService } from "@ng-select/ng-select/lib/console.service";
import { decisionMakers } from "src/app/shared/models/decision_makers";
import { EnquiryTypes } from "src/app/shared/models/enquiry-types";
import { Investigator } from "src/app/shared/models/investigator";
import { SharedService } from "src/app/shared/Service/shared.service";
import { APIs } from "src/environments/environment";
import { GrievanceService } from "../../../grievance.service";

@Component({
  selector: "app-conduct-setup",
  templateUrl: "./conduct-setup.component.html",
  styleUrls: ["./conduct-setup.component.css"],
})
export class ConductSetupComponent implements OnInit {
  investigatorsDataArray: any = [];
  authorities: any = [
    {
      authority_id: 1,
      authority_name: "Warning",
      field_type: "dropdown",
      field_value: "verbal",
      is_multiple: "no",
    },
    {
      authority_id: 2,
      authority_name: "Show Cause",
      field_type: "dropdown",
      field_value: "yes,no",
      is_multiple: "no",
    },
    {
      authority_id: 3,
      authority_name: "Penalty",
      field_type: "dropdown",
      field_value: "yes,no",
      is_multiple: "no",
    },
    {
      authority_id: 4,
      authority_name: "Amount",
      field_type: "text",
      field_value: null,
      is_multiple: "no",
    },
    {
      authority_id: 5,
      authority_name: "Suspension",
      field_type: "dropdown",
      field_value: "yes,no",
      is_multiple: "no",
    },
    {
      authority_id: 6,
      authority_name: "Suspension Type",
      field_type: "dropdown",
      field_value: "Suspension with pay,Presence required at Office",
      is_multiple: "yes",
    },
    {
      authority_id: 7,
      authority_name: "Termination",
      field_type: "dropdown",
      field_value: "yes,no",
      is_multiple: "no",
    },
  ];
  decisionMakerArray: any = [];
  enquiryFormGrop: FormGroup;
  allDepartments: any;
  allDesignations: any;
  employee_list: any;
  isupdate: boolean = false;
  applicationId: number;
  updateDecesionMakerArray: any;
  enqiryTypeObject:any;;

  constructor(
    private grievanceService: GrievanceService,
    private sharedService: SharedService
  ) {}
  ngOnInit(): void {
    this.enquiryTypeForm();
    this.initializedatainArrays();
    this.onGetMetaData();
  }
  // get meta data for this form
  onGetMetaData() {
    //get meta data
    this.getAllDepartments();
    this.getAllDesiginations();
    this.getAllEmployees();

    //if employee open the screen
  }
  //initilize this form with empty objects
  initializedatainArrays() {
    this.addInvestegator();
    this.addDecisionMaker();
  }
  // on  adding new  investigator
  addInvestegator() {
    let index = this.investigatorsDataArray.length;
    this.enquiryFormGrop.addControl(
      "investigator_department_" + index,
      new FormControl("", Validators.required)
    );
    this.enquiryFormGrop.addControl(
      "investigator_designation_" + index,
      new FormControl("", Validators.required)
    );
    this.enquiryFormGrop.addControl(
      "investigator_employee_" + index,
      new FormControl("", Validators.required)
    );
    let investigatorObj: any = {};
    this.investigatorsDataArray.push(investigatorObj);
  }
  // on removing  investigator
  removeInvestegator(investigatorIndex) {
    this.investigatorsDataArray.splice(investigatorIndex, 1);

    this.enquiryFormGrop.removeControl(
      `investigator_department_${this.investigatorsDataArray.length}`
    );
    this.enquiryFormGrop.removeControl(
      `investigator_designation_${this.investigatorsDataArray.length}`
    );
    this.enquiryFormGrop.removeControl(
      `investigator_employee_${this.investigatorsDataArray.length}`
    );
  }
  // add new decesion maker
  addDecisionMaker() {
    let index = this.decisionMakerArray.length;
    // if authorities are already added
    if (this.decisionMakerArray[0] != undefined) {
      let authoritiesLength = this.decisionMakerArray[0].authorities.length;
      if (authoritiesLength > 1) {
        this.enquiryFormGrop.addControl(
          "decision_makers_department_" + index,
          new FormControl("", Validators.required)
        );
        this.enquiryFormGrop.addControl(
          "decision_makers_designation_" + index,
          new FormControl("", Validators.required)
        );
        this.enquiryFormGrop.addControl(
          "decision_makers_employee_" + index,
          new FormControl("", Validators.required)
        );
        let authArray = [];
        for (let i = 0; i < authoritiesLength; i++) {
          // insert control
          this.enquiryFormGrop.addControl(
            "decision_makers_authority_" + index + "_" + i,
            new FormControl(1)
          );
          // insert object
          let authObj: any = {
            isAuthdisplay: true,
          };
          authArray.push(authObj);
        }
        let decesionMakerObj: any = {
          authorities: [...authArray],
        };
        this.decisionMakerArray.push(decesionMakerObj);
        return;
      }
    }
    // for normal decsion maker addition
    this.enquiryFormGrop.addControl(
      "decision_makers_department_" + index,
      new FormControl("", Validators.required)
    );
    this.enquiryFormGrop.addControl(
      "decision_makers_designation_" + index,
      new FormControl("", Validators.required)
    );
    this.enquiryFormGrop.addControl(
      "decision_makers_employee_" + index,
      new FormControl("", Validators.required)
    );
    this.enquiryFormGrop.addControl(
      "decision_makers_authority_" + index + "_" + 0,
      new FormControl(1)
    );
    let decesionMakerObj: any = {
      authorities: [{ isAuthdisplay: true }],
    };
    this.decisionMakerArray.push(decesionMakerObj);
  }
  // remove decesion maker
  removeDecisionMaker(decesionMakerIndex) {
    if(this.isupdate){
      this.deleteDecisionMaker(decesionMakerIndex);
    }

    this.decisionMakerArray.splice(decesionMakerIndex, 1);
    this.enquiryFormGrop.removeControl(
      `decision_makers_employee_${this.decisionMakerArray.length}`
    );
    this.enquiryFormGrop.removeControl(
      `decision_makers_department_${this.decisionMakerArray.length}`
    );
    this.enquiryFormGrop.removeControl(
      `decision_makers_designation_${this.decisionMakerArray.length}`
    );
    for (
      let i = 0;
      i < this.decisionMakerArray[decesionMakerIndex].authorities.length;
      i++
    ) {
      this.enquiryFormGrop.removeControl(
        `decision_makers_authority_${this.decisionMakerArray.length}_${i}`
      );

    }
  }
  //add authority inside a decesion maker
  addAuthority(decisionMakerIndex, authorityIndex, isLastAuthority) {
    let authorityLength = this.decisionMakerArray[0].authorities.length;
    if (
      this.decisionMakerArray[decisionMakerIndex].authorities[
        authorityIndex + 1
      ] == undefined
    ) {
      for (let i = 0; i < this.decisionMakerArray.length; i++) {
        this.enquiryFormGrop.addControl(
          "decision_makers_authority_" + i + "_" + authorityLength,
          new FormControl(1)
        );
        this.decisionMakerArray[i].authorities.push({ isAuthdisplay: true });
      }
    }

    this.decisionMakerArray[decisionMakerIndex].authorities[
      authorityIndex + 1
    ].isAuthdisplay = true;
  }
  // remove authority
  removeAuthority(decisionMakerIndex, authorityIndex, isLastAuthority) {
    //if this is a update form  then delete authority from server by sending API request
    if (this.isupdate) {
      this.deleteAuthority(decisionMakerIndex, authorityIndex);
    }
    this.decisionMakerArray[decisionMakerIndex].authorities[
      authorityIndex
    ].isAuthdisplay = false;
  }
  //delete authority
  deleteAuthority(decisionMakerIndex, authorityIndex) {
    let authorityId=this.updateDecesionMakerArray[decisionMakerIndex].decision_maker_authorities[authorityIndex].decision_maker_authority_id;
    this.grievanceService.deleteData(`https://urchoice.live/people/api/grievance/enquiry-types/decision-maker/authority/${authorityId}`).subscribe({
      next: (res:any) => {
        this.sharedService.successMessage(res.message);
      },
      error: (error) => {
        this.sharedService.erroMessage(error.message);
      },
    });
  }
  //delete decision Maker
  deleteDecisionMaker(decisionMakerIndex) {
    let decesionMakerId=this.updateDecesionMakerArray[decisionMakerIndex].enquiry_decision_maker_id;
    this.grievanceService.deleteData(`https://urchoice.live/people/api/grievance/enquiry-types/decision-maker/${decesionMakerId}`).subscribe({
      next: (res:any) => {
        this.sharedService.successMessage(res.message);
      },
      error: (error) => {
        this.sharedService.successMessage(error.message);
      },
    });
  }
  //delete investigator
  deleteInvestigator(investigatorIndex) {
    // let authorityId=this.updateDecesionMakerArray[decisionMakerIndex].decision_maker_authorities[authorityIndex].decision_maker_authority_id;
    // this.grievanceService.deleteData(`https://urchoice.live/people/api/grievance/enquiry-types/decision-maker/authority/${authorityId}`).subscribe({
    //   next: (res:any) => {
    //     this.decisionMakerArray[decisionMakerIndex].authorities[
    //       authorityIndex
    //     ].isAuthdisplay = false;
    //     this.sharedService.successMessage(res.message)
    //     return;
    //   },
    //   error: (error) => {
    //     this.cancelEnquiryForm();
    //   },
    // });
  }
  // sumbit form
  enquiryFormSubmit() {
    let formObj = this.enquiryFormGrop.value;
    let serverRequstObj: EnquiryTypes = new EnquiryTypes();

    // check validations

    //mapping request in server formate before sending it to server
    serverRequstObj.enquiry_type_name = formObj.enquiry_type_name;
    serverRequstObj.legal_opinion_section =
      formObj.legal_opinion_section == true ? "enable" : "disable";
    serverRequstObj.provision_policy_section =
      formObj.provision_policy_section == true ? "enable" : "disable";
    serverRequstObj.recommendation_section =
      formObj.recommendation_section == true ? "enable" : "disable";
    serverRequstObj.responder_section =
      formObj.responder_section == true ? "enable" : "disable";
    serverRequstObj.anonymous_application =
      formObj.anonymous_application_allowed == true ? "allow" : "disallow";

    // add investigator in array
    let investigators: Array<Investigator> = new Array<Investigator>();
    for (let i = 0; i < this.investigatorsDataArray.length; i++) {
      let investigatorObj: Investigator = new Investigator();
      investigatorObj.employee_id = formObj[`investigator_employee_${i}`];
      investigatorObj.level_no = i + 1;
      investigators.push(investigatorObj);
    }

    // add decesion maker  in array
    let decesionMakers: Array<decisionMakers> = new Array<decisionMakers>();
    for (let i = 0; i < this.decisionMakerArray.length; i++) {
      let decesionMakerObj: decisionMakers = new decisionMakers();
      decesionMakerObj.employee_id = formObj[`decision_makers_employee_${i}`];
      decesionMakerObj.level_no = i + 1;
      // to add authorities in array
      for (let j = 0; j < this.decisionMakerArray[i].authorities.length; j++) {
        let authority = formObj[`decision_makers_authority_${i}_${j}`];
        decesionMakerObj.authorities.push(authority);
      }
      // decesionMakerObj.authorities = [7];
      decesionMakers.push(decesionMakerObj);
    }
    serverRequstObj.investigators = [...investigators];
    serverRequstObj.decision_makers = [...decesionMakers];
    this.submitDataServer(serverRequstObj);
  }
  //send Enquiry form data to server
  submitDataServer(serverRequstObj) {
    let URL = this.isupdate
      ? `https://urchoice.live/people/api/grievance/enquiry-types/${this.applicationId}`
      : `https://urchoice.live/people/api/grievance/enquiry-types`;
    this.grievanceService.saveData(URL, serverRequstObj).subscribe({
      next: (res) => {
        this.sharedService.successMessage(res.message);
        this.enqiryTypeObject=serverRequstObj;
        this.cancelEnquiryForm();

      },
      error: (error) => {
        this.sharedService.erroMessage(error.message);
      },
    });
  }
  //enquiry Type form
  enquiryTypeForm() {
    this.enquiryFormGrop = new FormGroup({
      enquiry_type_name: new FormControl("", Validators.required),
      responder_section: new FormControl(false),
      provision_policy_section: new FormControl(false),
      legal_opinion_section: new FormControl(false),
      recommendation_section: new FormControl(false),
      anonymous_application_allowed: new FormControl(true),
      anonymous_application_not_allowed: new FormControl(false),
    });
  }
  //Anonmus checkbox handling
  updateAnonymousCheckBox(formcontolName: string, oppositFormControl: string) {
    this.enquiryFormGrop.get(formcontolName).value == true
      ? this.enquiryFormGrop.get(oppositFormControl).setValue(false)
      : this.enquiryFormGrop.get(oppositFormControl).setValue(true);
  }
  //get all departments
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
  //get all desiginations
  getAllDesiginations() {
    this.grievanceService.getData(APIs.getAllDesignations).subscribe({
      next: (res: any) => {
        if (res.status == 200) {
          this.allDesignations = res.data;
        }
      },
      error: (error) => {},
    });
  }
  //get all  employee
  getAllEmployees() {
    this.grievanceService.getData(APIs.getAllEmployees).subscribe({
      next: (res: any) => {
        if (res.status == 200) {
          this.employee_list = res.data;
        }
      },
      error: (error) => {},
    });
  }
  //handle cancel enquiry form
  cancelEnquiryForm() {
    this.enquiryTypeForm();
    this.decisionMakerArray = [];
    this.investigatorsDataArray = [];
    this.updateDecesionMakerArray=[];
    this.isupdate = false;
    this.applicationId = -1;
    this.initializedatainArrays();
  }
  // when user click on Table
  onEnquiryTableClick(enquiryTableRowObj) {
    // clear form
    this.cancelEnquiryForm();
    // prepare data for form
    let formObject: any = {};
    formObject.legal_opinion_section =
      enquiryTableRowObj.legal_opinion_section == "disable" ? false : true;
    formObject.provision_policy_section =
      enquiryTableRowObj.provision_policy_section == "disable" ? false : true;
    formObject.recommendation_section =
      enquiryTableRowObj.recommendation_section == "disable" ? false : true;
    formObject.responder_section =
      enquiryTableRowObj.responder_section == "disable" ? false : true;
    formObject.anonymous_application_allowed =
      enquiryTableRowObj.anonymous_application == "disallow" ? false : true;
    formObject.anonymous_application_not_allowed =
      enquiryTableRowObj.anonymous_application == "disallow" ? true : false;
    formObject.enquiry_type_name = enquiryTableRowObj.enquiry_type_name;

   //remove dumy objects
    let investigatorsArray=[]
  let filterdinvestigators=enquiryTableRowObj.investigators.filter(e=>e.isdumyData!=true);
  investigatorsArray=[...filterdinvestigators];


 // insert investigators form controls and theier value
    formObject.investigator_department_0 =
    investigatorsArray[0].employee.department_id;
    formObject.investigator_designation_0 =
    investigatorsArray[0].employee.dept_id;
    formObject.investigator_employee_0 =
    investigatorsArray[0].employee_id;
    //if investigators are more then one
    let investigatorLength = investigatorsArray.length;
    if (investigatorLength > 1) {
      for (let i = 1; i < investigatorsArray.length; i++) {
        this.enquiryFormGrop.addControl(
          "investigator_department_" + i,
          new FormControl(
            investigatorsArray[i].employee.department_id,
            Validators.required
          )
        );
        this.enquiryFormGrop.addControl(
          "investigator_designation_" + i,
          new FormControl(
            investigatorsArray[i].employee.dept_id,
            Validators.required
          )
        );
        this.enquiryFormGrop.addControl(
          "investigator_employee_" + i,
          new FormControl(
            investigatorsArray[i].employee_id,
            Validators.required
          )
        );
        let investigatorObj: any = {};
        this.investigatorsDataArray.push(investigatorObj);
      }
    }

    //patch form data
    this.enquiryFormGrop.patchValue(formObject);
    window.scrollTo({ top: 0, behavior: "smooth" });
    //send API request to fetch the decesion makers and authories
    this.getEnquiryById(enquiryTableRowObj.enquiry_type_id);
  }
  //get a single enquiry by ID
  getEnquiryById(id) {
    this.grievanceService
      .getData(`https://urchoice.live/people/api/grievance/enquiry-types/${id}`)
      .subscribe({
        next: (res: any) => {
          if (res.status == 200) {
            let decesionMakers = res.data.decision_makers;
            this.updateDecesionMakerArray= res.data.decision_makers;
            let maxAuthorities: number;
            let formObject: any = {};

            // for first decesion makers
            formObject.decision_makers_department_0 =
              decesionMakers[0].employee.department_id;
            formObject.decision_makers_designation_0 =
              decesionMakers[0].employee.dept_id;
            formObject.decision_makers_employee_0 =
              decesionMakers[0].employee_id;
            //first authority of first decesion maker
            formObject.decision_makers_authority_0_0 =
              decesionMakers[0].decision_maker_authorities[0].authority_id;
            //set max authoriteis initial value
            maxAuthorities =
              decesionMakers[0].decision_maker_authorities.length;
            //if  first decesion maker has  more then one authority
            if (decesionMakers[0].decision_maker_authorities.length > 1) {
              for (
                let i = 1;
                i < decesionMakers[0].decision_maker_authorities.length;
                i++
              ) {

                this.enquiryFormGrop.addControl(
                  `decision_makers_authority_0_${i}`,
                  new FormControl(
                    decesionMakers[0].decision_maker_authorities[
                      i
                    ].authority_id,
                    Validators.required
                  )
                );
                let authObj: any = {
                  isAuthdisplay: true,
                };

                this.decisionMakerArray[0].authorities.splice(0, 1, authObj);
              }
            }
            //if decesion makers are more then one
            if (decesionMakers.length > 1) {
              for (let i = 1; i < decesionMakers.length; i++) {
                this.enquiryFormGrop.addControl(
                  `decision_makers_department_${i}`,
                  new FormControl(
                    decesionMakers[i].employee.department_id,
                    Validators.required
                  )
                );
                this.enquiryFormGrop.addControl(
                  `decision_makers_designation_${i}`,
                  new FormControl(
                    decesionMakers[i].employee.dept_id,
                    Validators.required
                  )
                );
                this.enquiryFormGrop.addControl(
                  `decision_makers_employee_${i}`,
                  new FormControl(
                    decesionMakers[i].employee_id,
                    Validators.required
                  )
                );
                this.enquiryFormGrop.addControl(
                  `decision_makers_authority_${i}_0`,
                  new FormControl( decesionMakers[i].decision_maker_authorities[0].authority_id, Validators.required)
                );

                let authArray = [];
                let authObj: any = {
                  isAuthdisplay: true,
                };
                authArray.push(authObj);

                let decesionMakerObj: any = {
                  authorities: [...authArray],
                };

                // this.decisionMakerArray.push(decesionMakerObj) push on first obj;
                this.decisionMakerArray.splice(i, 0, decesionMakerObj);
                // if any decesion maker has more authorities
                if (
                  decesionMakers[i].decision_maker_authorities.length >
                  maxAuthorities
                ) {
                  // alert(`max authority detected for decesion maker index: ${i} authorities length:  ${decesionMakers[i].decision_maker_authorities.length}`)
                  let decesionMakerObj: any = {
                    isAuthdisplay: false,
                  };
                  let decesionMakerdisplayObj: any = {
                    isAuthdisplay: true,
                  };
                  //loop for to move baack and increase authorites according to maximum index
                  for (let j = i; j >= 0; j--) {
                    for (
                      let k = 1;
                      k < decesionMakers[i].decision_maker_authorities.length;
                      k++
                    ) {
                      j == i
                        ? this.decisionMakerArray[j].authorities.splice(
                            i,
                            1,
                            decesionMakerdisplayObj
                          )
                        : this.decisionMakerArray[j].authorities.splice(
                            i,
                            1,
                            decesionMakerObj
                          );
                      this.enquiryFormGrop.addControl(
                        "decision_makers_authority_" + j + "_" + k,
                        new FormControl(
                          decesionMakers[j].decision_maker_authorities[k] !=
                          undefined
                            ? decesionMakers[j].decision_maker_authorities[k]
                                .authority_id
                            : 1
                        )
                      );
                    }
                  }

                }
                //if first decsion Maker has maximum authority
                if (
                  decesionMakers[0].decision_maker_authorities.length ==
                  maxAuthorities
                ) {
                  let decesionMakerdisplayObj: any = {
                    isAuthdisplay: true,
                  };
                  for (let j = 1; j < maxAuthorities; j++) {
                    this.decisionMakerArray[0].authorities.splice(
                      j,
                      1,
                      decesionMakerdisplayObj
                    );
                    this.decisionMakerArray[i].authorities.splice(
                      j,
                      1,
                      decesionMakerdisplayObj
                    );
                    this.enquiryFormGrop.addControl(
                      "decision_makers_authority_" + i + "_" + j,
                      new FormControl(
                        decesionMakers[i].decision_maker_authorities[j] !=
                        undefined
                          ? decesionMakers[i].decision_maker_authorities[j]
                              .authority_id
                          : 1
                      )
                    );
                  }
                }
              }
            }

            this.enquiryFormGrop.patchValue(formObject);
            this.isupdate = true;
            this.applicationId = id;
          }
        },
        error: (error) => {
          this.sharedService.warningMessage("An error occured");
        },
      });
  }
}
