(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{xGVd:function(t,e,n){"use strict";n.r(e),n.d(e,"GrievanceModule",(function(){return mt}));var a=n("ofXK"),o=n("tyNb"),i=n("fXoL"),c=n("3Pt+"),r=n("K33a");let p=(()=>{class t{constructor(t){this._httpService=t}saveData(t,e){return this._httpService.post(t,e)}getData(t,e){return this._httpService.get(t,e)}}return t.\u0275fac=function(e){return new(e||t)(i.bc(r.a))},t.\u0275prov=i.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=n("Wi1P"),s=n("kmnG"),b=n("d3UM"),d=n("FKr1"),m=n("qFsG"),u=n("iadO"),g=n("NFeN"),f=n("bSwM");function h(t,e){if(1&t&&(i.Ub(0,"mat-option",39),i.Sc(1),i.Tb()),2&t){const t=e.$implicit;i.rc("value",t.department_id),i.Bb(1),i.Tc(t.department_title)}}function _(t,e){if(1&t&&(i.Ub(0,"mat-option",39),i.Sc(1),i.Tb()),2&t){const t=e.$implicit;i.rc("value",t.designation_id),i.Bb(1),i.Tc(t.designation_title)}}function v(t,e){if(1&t&&(i.Ub(0,"mat-option",39),i.Sc(1),i.Tb()),2&t){const t=e.$implicit;i.rc("value",t.department_id),i.Bb(1),i.Tc(t.department_title)}}function T(t,e){if(1&t&&(i.Ub(0,"mat-option",39),i.Sc(1),i.Tb()),2&t){const t=e.$implicit;i.rc("value",t.designation_id),i.Bb(1),i.Tc(t.designation_title)}}function U(t,e){if(1&t&&(i.Ub(0,"mat-option",39),i.Sc(1),i.Tb()),2&t){const t=e.$implicit;i.rc("value",t.employee_id),i.Bb(1),i.Tc(t.employee_name)}}function C(t,e){if(1&t&&(i.Ub(0,"div",13),i.Ub(1,"mat-form-field",4),i.Ub(2,"mat-label"),i.Sc(3,"Grievance Against"),i.Tb(),i.Ub(4,"mat-select",40),i.Qc(5,U,2,2,"mat-option",12),i.Tb(),i.Tb(),i.Tb()),2&t){const t=i.jc();i.Bb(5),i.rc("ngForOf",t.employee_list)}}function S(t,e){1&t&&(i.Ub(0,"span",41),i.Sc(1," Issue Raised"),i.Tb())}function y(t,e){1&t&&(i.Ub(0,"span",42),i.Sc(1," Details"),i.Tb())}function P(t,e){1&t&&(i.Ub(0,"a"),i.Sc(1,"Written Statement"),i.Tb())}function x(t,e){1&t&&(i.Ub(0,"a",43),i.Sc(1,"Audio Statement"),i.Tb())}function O(t,e){1&t&&(i.Ub(0,"a",44),i.Sc(1,"Video Statement "),i.Tb())}function M(t,e){1&t&&(i.Ub(0,"a"),i.Sc(1," Picture"),i.Tb())}function D(t,e){1&t&&(i.Ub(0,"div",45),i.Ub(1,"p",21),i.Ub(2,"span",46),i.Sc(3," Line Manager's Section"),i.Tb(),i.Ub(4,"span",24),i.Ub(5,"a"),i.Sc(6,"Written Statement"),i.Tb(),i.Ub(7,"a",43),i.Sc(8,"Audio Statement"),i.Tb(),i.Ub(9,"a",44),i.Sc(10,"Video Statement "),i.Tb(),i.Ub(11,"a"),i.Sc(12," Picture"),i.Tb(),i.Tb(),i.Tb(),i.Pb(13,"textarea",47),i.Tb())}function w(t,e){if(1&t){const t=i.Vb();i.Ub(0,"div",48),i.Ub(1,"div",2),i.Ub(2,"div",49),i.Ub(3,"mat-checkbox",50),i.fc("change",(function(e){return i.Hc(t),i.jc().onChangeWrittenStatement(e)})),i.Sc(4,"Written statement "),i.Tb(),i.Tb(),i.Ub(5,"div",49),i.Ub(6,"mat-checkbox",50),i.fc("change",(function(e){return i.Hc(t),i.jc().onChangeAudio(e)})),i.Sc(7," audio statement"),i.Tb(),i.Tb(),i.Ub(8,"div",49),i.Ub(9,"mat-checkbox",50),i.fc("change",(function(e){return i.Hc(t),i.jc().onChangeVideoStatement(e)})),i.Sc(10,"video statement"),i.Tb(),i.Tb(),i.Ub(11,"div",49),i.Ub(12,"mat-checkbox",50),i.fc("change",(function(e){return i.Hc(t),i.jc().onChangePicture(e)})),i.Sc(13,"Picture"),i.Tb(),i.Tb(),i.Ub(14,"div",49),i.Ub(15,"input",51),i.fc("change",(function(e){return i.Hc(t),i.jc().fileUpload(e)})),i.Tb(),i.Tb(),i.Tb(),i.Tb()}if(2&t){const t=i.jc();i.Bb(3),i.rc("checked",t.isWrittenStatement),i.Bb(3),i.rc("checked",t.isAudioStatement),i.Bb(3),i.rc("checked",t.isVideoStatement),i.Bb(3),i.rc("checked",t.isPicture)}}function k(t,e){if(1&t){const t=i.Vb();i.Ub(0,"div",52),i.Ub(1,"div",53),i.Ub(2,"button",54),i.fc("click",(function(){return i.Hc(t),i.jc().onSaveDraft()})),i.Sc(3," Save Draft "),i.Tb(),i.Ub(4,"button",54),i.fc("click",(function(){return i.Hc(t),i.jc().onSendToLM()})),i.Sc(5," Send to LM "),i.Tb(),i.Ub(6,"button",54),i.fc("click",(function(){return i.Hc(t),i.jc().onSendToHR()})),i.Sc(7," Send to HR "),i.Tb(),i.Tb(),i.Tb()}}let I=(()=>{class t{constructor(t,e){this._grievanceService=t,this._sservice=e,this.myControl=new c.f(""),this.options=["One","Two","Three"],this.isAudioStatement=!1,this.isWrittenStatement=!1,this.isVideoStatement=!1,this.isPicture=!1}ngOnInit(){this.loadGrievanceForm(),this.onGetMetaData()}loadGrievanceForm(){this.grievanceForm=new c.i({employee_name:new c.f("",c.v.required),issue_type_id:new c.f("",c.v.required),grievance_against_id:new c.f("",c.v.required),department_id:new c.f("",c.v.required),designation_id:new c.f("",c.v.required),target_type_id:new c.f("",c.v.required),against_department:new c.f("",c.v.required),against_designation:new c.f("",c.v.required),statement:new c.f("",c.v.required),from:new c.f(""),to:new c.f("")})}onSaveDraft(){let t=this.grievanceForm.value;t.from=this._sservice.DateFormater(t.from),t.to=this._sservice.DateFormater(t.to),console.log(t)}onSendToLM(){let t=this.grievanceForm.value;t.from=this._sservice.DateFormater(t.from),t.to=this._sservice.DateFormater(t.to),console.log(t),console.log(this.myControl)}onSendToHR(){let t=this.grievanceForm.value;t.from=this._sservice.DateFormater(t.from),t.to=this._sservice.DateFormater(t.to),console.log(t)}fileUpload(t){console.log(t.target.files),console.log(t)}onGetMetaData(){"Emp-portal"==this.applicationType.type&&this.getEmpFormData("/get_emp_portal_meta_data")}getEmpFormData(t){this._grievanceService.getData(t).subscribe({next:t=>{console.log(t);let e=t[0];this.allDepartments=e.Departments,this.allDesignations=e.Designations,this.employee_list=e.Employees,this.grievanceForm.patchValue(e.employee)},error:t=>{console.log(t)}})}_filter(t){const e=t.toLowerCase();return this.options.filter(t=>t.toLowerCase().includes(e))}onChangeAudio(t){1==t.checked&&(this.isAudioStatement=!0,this.isPicture=!1,this.isVideoStatement=!1,this.isWrittenStatement=!1)}onChangeVideoStatement(t){1==t.checked&&(this.isVideoStatement=!0,this.isPicture=!1,this.isAudioStatement=!1,this.isWrittenStatement=!1)}onChangePicture(t){1==t.checked&&(this.isPicture=!0,this.isAudioStatement=!1,this.isVideoStatement=!1,this.isWrittenStatement=!1)}onChangeWrittenStatement(t){1==t.checked&&(this.isWrittenStatement=!0,this.isAudioStatement=!1,this.isVideoStatement=!1,this.isPicture=!1)}}return t.\u0275fac=function(e){return new(e||t)(i.Ob(p),i.Ob(l.a))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-grievance-form"]],inputs:{applicationType:"applicationType"},decls:88,vars:17,consts:[[3,"formGroup"],[1,"ac-title"],[1,"row"],[1,"col-3","p-10","mb-15"],["appearance","outline",1,"w-100"],["formControlName","issue_type_id"],["value","1"],["value","2"],["value","3"],[1,"col-3","pl-10","mb-15"],["formControlName","employee_name","matInput","","placeholder",""],["formControlName","department_id"],[3,"value",4,"ngFor","ngForOf"],[1,"col-3","pr-20","mb-15"],["formControlName","designation_id"],["formControlName","target_type_id"],["formControlName","against_department"],["formControlName","against_designation"],["class","col-3 pr-20 mb-15",4,"ngIf"],[1,"customHR"],[1,"grayborder"],[1,"py-1"],["class","ac-title-withoutpic title-text pl-2 pr-1",4,"ngIf"],["class","ac-title-withoutpic title-text px-2",4,"ngIf"],[1,"links","text-center"],[4,"ngIf"],["class","mx-1",4,"ngIf"],["class","ml-1",4,"ngIf"],[1,"float-right"],["appearance","outline"],["formControlName","from","matInput","","readonly","",3,"matDatepicker","click"],["matSuffix","",3,"click"],["picker1",""],["formControlName","to","matInput","","readonly","",3,"matDatepicker","click"],["picker2",""],["formControlName","statement","rows","4","cols","100",1,"w-100"],["class","grayborder mt-1",4,"ngIf"],["class","grayborder pt-2",4,"ngIf"],["class","ac-footer",4,"ngIf"],[3,"value"],["formControlName","grievance_against_id"],[1,"ac-title-withoutpic","title-text","pl-2","pr-1"],[1,"ac-title-withoutpic","title-text","px-2"],[1,"mx-1"],[1,"ml-1"],[1,"grayborder","mt-1"],[1,"ac-title-withoutpic","title-text","px-3"],["rows","4","cols","100",1,"w-100"],[1,"grayborder","pt-2"],[1,"col"],[1,"example-margin",3,"checked","change"],["type","file",3,"change"],[1,"ac-footer"],["id","ac-button-list",1,"text-right"],["type","submit",1,"submitButton","ml-2",3,"click"]],template:function(t,e){if(1&t){const t=i.Vb();i.Ub(0,"form",0),i.Ub(1,"p",1),i.Sc(2,"Issue Raised by"),i.Tb(),i.Ub(3,"div",2),i.Ub(4,"div",3),i.Ub(5,"mat-form-field",4),i.Ub(6,"mat-label"),i.Sc(7,"Issue Type*"),i.Tb(),i.Ub(8,"mat-select",5),i.Ub(9,"mat-option",6),i.Sc(10,"Grievance"),i.Tb(),i.Ub(11,"mat-option",7),i.Sc(12,"Blowing a whistle"),i.Tb(),i.Ub(13,"mat-option",8),i.Sc(14,"Harassment related concern"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(15,"div",9),i.Ub(16,"mat-form-field",4),i.Ub(17,"mat-label"),i.Sc(18," Employee name"),i.Tb(),i.Pb(19,"input",10),i.Tb(),i.Tb(),i.Ub(20,"div",9),i.Ub(21,"mat-form-field",4),i.Ub(22,"mat-label"),i.Sc(23,"Department*"),i.Tb(),i.Ub(24,"mat-select",11),i.Qc(25,h,2,2,"mat-option",12),i.Tb(),i.Tb(),i.Tb(),i.Ub(26,"div",13),i.Ub(27,"mat-form-field",4),i.Ub(28,"mat-label"),i.Sc(29,"Designation"),i.Tb(),i.Ub(30,"mat-select",14),i.Qc(31,_,2,2,"mat-option",12),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(32,"p",1),i.Sc(33,"Issue Raised against"),i.Tb(),i.Ub(34,"div",2),i.Ub(35,"div",3),i.Ub(36,"mat-form-field",4),i.Ub(37,"mat-label"),i.Sc(38," Target type dropdown*"),i.Tb(),i.Ub(39,"mat-select",15),i.Ub(40,"mat-option",6),i.Sc(41,"General"),i.Tb(),i.Ub(42,"mat-option",7),i.Sc(43,"Specific Employee *"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(44,"div",9),i.Ub(45,"mat-form-field",4),i.Ub(46,"mat-label"),i.Sc(47,"Department"),i.Tb(),i.Ub(48,"mat-select",16),i.Qc(49,v,2,2,"mat-option",12),i.Tb(),i.Tb(),i.Tb(),i.Ub(50,"div",9),i.Ub(51,"mat-form-field",4),i.Ub(52,"mat-label"),i.Sc(53,"Designation"),i.Tb(),i.Ub(54,"mat-select",17),i.Qc(55,T,2,2,"mat-option",12),i.Tb(),i.Tb(),i.Tb(),i.Qc(56,C,6,1,"div",18),i.Tb(),i.Pb(57,"hr",19),i.Ub(58,"div",20),i.Ub(59,"p",21),i.Qc(60,S,2,0,"span",22),i.Qc(61,y,2,0,"span",23),i.Ub(62,"span",24),i.Qc(63,P,2,0,"a",25),i.Qc(64,x,2,0,"a",26),i.Qc(65,O,2,0,"a",27),i.Qc(66,M,2,0,"a",25),i.Tb(),i.Ub(67,"span",28),i.Ub(68,"mat-form-field",29),i.Ub(69,"mat-label"),i.Sc(70,"From"),i.Tb(),i.Ub(71,"input",30),i.fc("click",(function(){return i.Hc(t),i.Ec(75).open()})),i.Tb(),i.Ub(72,"mat-icon",31),i.fc("click",(function(){return i.Hc(t),i.Ec(75).open()})),i.Sc(73,"calendar_today"),i.Tb(),i.Pb(74,"mat-datepicker",null,32),i.Tb(),i.Ub(76,"mat-form-field",29),i.Ub(77,"mat-label"),i.Sc(78,"To"),i.Tb(),i.Ub(79,"input",33),i.fc("click",(function(){return i.Hc(t),i.Ec(83).open()})),i.Tb(),i.Ub(80,"mat-icon",31),i.fc("click",(function(){return i.Hc(t),i.Ec(83).open()})),i.Sc(81,"calendar_today"),i.Tb(),i.Pb(82,"mat-datepicker",null,34),i.Tb(),i.Tb(),i.Tb(),i.Pb(84,"textarea",35),i.Tb(),i.Qc(85,D,14,0,"div",36),i.Qc(86,w,16,4,"div",37),i.Qc(87,k,8,0,"div",38),i.Tb()}if(2&t){const t=i.Ec(75),n=i.Ec(83);i.rc("formGroup",e.grievanceForm),i.Bb(25),i.rc("ngForOf",e.allDepartments),i.Bb(6),i.rc("ngForOf",e.allDesignations),i.Bb(18),i.rc("ngForOf",e.allDepartments),i.Bb(6),i.rc("ngForOf",e.allDesignations),i.Bb(1),i.rc("ngIf",2==e.grievanceForm.value.target_type_id),i.Bb(4),i.rc("ngIf",3==e.applicationType.ComponenttypeId),i.Bb(1),i.rc("ngIf",4==e.applicationType.ComponenttypeId),i.Bb(2),i.rc("ngIf",e.isWrittenStatement),i.Bb(1),i.rc("ngIf",e.isAudioStatement),i.Bb(1),i.rc("ngIf",e.isVideoStatement),i.Bb(1),i.rc("ngIf",e.isPicture),i.Bb(5),i.rc("matDatepicker",t),i.Bb(8),i.rc("matDatepicker",n),i.Bb(6),i.rc("ngIf",3==e.applicationType.ComponenttypeId),i.Bb(1),i.rc("ngIf",4==e.applicationType.ComponenttypeId),i.Bb(1),i.rc("ngIf",4==e.applicationType.ComponenttypeId)}},directives:[c.w,c.q,c.j,s.b,s.e,b.a,c.p,c.h,d.n,c.d,m.b,a.k,a.l,u.b,g.a,s.f,u.a,f.a],styles:[".bluecolor[_ngcontent-%COMP%]{color:#007bff}.ac-title[_ngcontent-%COMP%]{padding:8px 10px;margin-bottom:15px}.ac-title[_ngcontent-%COMP%], .ac-title-with-input[_ngcontent-%COMP%]{background:url(box-title.e1f201eb4580921df022.gif) repeat 0 0;font:12px/1em Verdana,Arial,Tahome;color:#333;font-weight:600}.ac-title-with-input[_ngcontent-%COMP%]{padding:0 10px 17px}.title-text[_ngcontent-%COMP%]{position:relative;top:8px}.ac-content[_ngcontent-%COMP%]{background:url(box-shadow.7f3d08d2a8dbb5226a95.gif) repeat-x 0 0;padding:5px}.ac-title-withoutpic[_ngcontent-%COMP%]{font:12px/1em Verdana,Arial,Tahome;color:#333;font-weight:600}.grayborder[_ngcontent-%COMP%]{border:1px solid #e7e7e7;border-radius:5px;margin-bottom:10px}textarea[_ngcontent-%COMP%]{border:none;border-top:1px solid #e7e7e7;outline:none}.ac-footer[_ngcontent-%COMP%]{background:#e6e6e6;padding:2px 10px 4px}#ac-button-list[_ngcontent-%COMP%]{margin:3px 0;text-align:right}.customHR[_ngcontent-%COMP%]{margin-top:0;margin-bottom:15px}#ac-button[_ngcontent-%COMP%], #ac-button-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #ac-button-list[_ngcontent-%COMP%]   font[_ngcontent-%COMP%], .ac-button-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .ac-button-list[_ngcontent-%COMP%]   font[_ngcontent-%COMP%], a#ac-button[_ngcontent-%COMP%], a.ac-button[_ngcontent-%COMP%]{position:relative;padding:4px 6px;background:transparent linear-gradient(180deg,#ededed,#fafafa) 0 0 no-repeat padding-box;border:1px solid #fff;border-radius:3px;opacity:1;text-decoration:none;font-size:12px}.LineManagerlinks[_ngcontent-%COMP%], .links[_ngcontent-%COMP%]{color:#3080ea;position:relative;top:8px;left:25%;font-size:13px}.LineManagerlinks[_ngcontent-%COMP%]{border-bottom:1px solid}.pl-10[_ngcontent-%COMP%]{padding-right:10px}.pl-10[_ngcontent-%COMP%], .pr-20[_ngcontent-%COMP%]{padding-left:0}.pr-20[_ngcontent-%COMP%]{padding-right:20px}.p-10[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.ml-10[_ngcontent-%COMP%]{margin-left:10px}.mb-15[_ngcontent-%COMP%]{margin-bottom:15px}#ac-button-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, #ac-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .ac-button-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .ac-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, a#ac-button[_ngcontent-%COMP%]:hover, a.ac-button[_ngcontent-%COMP%]:hover{border:1px solid #a6daee;padding:4px 6px;background:transparent linear-gradient(0deg,#f1fafe,#bde9fb) 0 0 no-repeat padding-box;border-radius:3px;opacity:1;color:#343434;text-decoration:none;font-size:12px}.submitButton[_ngcontent-%COMP%]{color:#3080ea;position:relative;background:transparent linear-gradient(180deg,#ededed,#fafafa) 0 0 no-repeat padding-box;border:1px solid #fff;border-radius:3px}.submitButton[_ngcontent-%COMP%], .submitButton[_ngcontent-%COMP%]:hover{padding:4px 6px;opacity:1;text-decoration:none;font-size:12px}.submitButton[_ngcontent-%COMP%]:hover{border:1px solid #a6daee;background:transparent linear-gradient(0deg,#f1fafe,#bde9fb) 0 0 no-repeat padding-box;border-radius:3px;color:#343434}"]}),t})();var B=n("Dh3D"),A=n("+0xr");function q(t,e){1&t&&(i.Ub(0,"mat-header-cell",29),i.Sc(1," Employee ID "),i.Tb())}function Q(t,e){if(1&t&&(i.Ub(0,"mat-cell"),i.Sc(1),i.Tb()),2&t){const t=e.$implicit;i.Bb(1),i.Uc(" ",t.employee_id," ")}}function E(t,e){if(1&t&&(i.Ub(0,"mat-header-cell",29),i.Sc(1),i.Tb()),2&t){const t=i.jc();i.Bb(1),i.Uc("","Emp-portal"==t.applicationType.type?"Grievance Against":"Application Against"," ")}}function R(t,e){if(1&t&&(i.Ub(0,"mat-cell"),i.Sc(1),i.Tb()),2&t){const t=e.$implicit;i.Bb(1),i.Uc(" ",t.against_employee_name," ")}}function F(t,e){1&t&&(i.Ub(0,"mat-header-cell",29),i.Sc(1,"Name "),i.Tb())}function j(t,e){if(1&t&&(i.Ub(0,"mat-cell"),i.Sc(1),i.Tb()),2&t){const t=e.$implicit;i.Bb(1),i.Uc(" ",t.complaiant_name," ")}}function H(t,e){1&t&&(i.Ub(0,"mat-header-cell",29),i.Sc(1," Application Date "),i.Tb())}function G(t,e){if(1&t&&(i.Ub(0,"mat-cell"),i.Sc(1),i.Tb()),2&t){const t=e.$implicit;i.Bb(1),i.Uc(" ",t.application_date," ")}}function V(t,e){1&t&&(i.Ub(0,"mat-header-cell",29),i.Sc(1," Type "),i.Tb())}function N(t,e){if(1&t&&(i.Ub(0,"mat-cell"),i.Sc(1),i.Tb()),2&t){const t=e.$implicit;i.Bb(1),i.Uc(" ",t.type," ")}}function L(t,e){1&t&&(i.Ub(0,"mat-header-cell",29),i.Sc(1," From "),i.Tb())}function $(t,e){if(1&t&&(i.Ub(0,"mat-cell"),i.Sc(1),i.Tb()),2&t){const t=e.$implicit;i.Bb(1),i.Uc(" ",null==t.grievance_from?" -":t.grievance_from," ")}}function W(t,e){1&t&&(i.Ub(0,"mat-header-cell",29),i.Sc(1," To "),i.Tb())}function z(t,e){if(1&t&&(i.Ub(0,"mat-cell"),i.Sc(1),i.Tb()),2&t){const t=e.$implicit;i.Bb(1),i.Uc(" ",t.grievance_to," ")}}function J(t,e){1&t&&(i.Ub(0,"mat-header-cell",29),i.Sc(1,"Status "),i.Tb())}function K(t,e){if(1&t&&(i.Ub(0,"mat-cell",30),i.Sc(1),i.Tb()),2&t){const t=e.$implicit;i.rc("ngClass","Pending"==t.application_status||1==t.application_status?"pending":"Approved"==t.application_status||2==t.application_status?"approved":"disapproved"),i.Bb(1),i.Uc(" ",1==t.application_status||"Pending"==t.application_status?"Pending":"Approved"==t.application_status||2==t.application_status?"Approved":"Disapproved"," ")}}function X(t,e){1&t&&(i.Ub(0,"mat-header-cell",29),i.Sc(1,"LM Status "),i.Tb())}function Z(t,e){if(1&t&&(i.Ub(0,"mat-cell",30),i.Sc(1),i.Tb()),2&t){const t=e.$implicit;i.rc("ngClass","Pending"==t.lm_status||1==t.lm_status?"pending":"Approved"==t.lm_status||2==t.lm_status?"approved":"disapproved"),i.Bb(1),i.Uc(" ",1==t.lm_status||"Pending"==t.lm_status?"Pending":"Approved"==t.lm_status||2==t.lm_status?"Approved":"Disapproved"," ")}}function Y(t,e){1&t&&(i.Ub(0,"mat-header-cell",29),i.Sc(1," HR Status "),i.Tb())}function tt(t,e){if(1&t&&(i.Ub(0,"mat-cell",30),i.Sc(1),i.Tb()),2&t){const t=e.$implicit;i.rc("ngClass","Pending"==t.hr_status||1==t.hr_status?"pending":"Approved"==t.hr_status||2==t.hr_status?"approved":"disapproved"),i.Bb(1),i.Uc(" ",1==t.hr_status||"Pending"==t.hr_status?"Pending":"Approved"==t.hr_status||2==t.hr_status?"Approved":"Disapproved"," ")}}function et(t,e){1&t&&(i.Ub(0,"mat-header-cell",29),i.Sc(1," Month "),i.Tb())}function nt(t,e){if(1&t&&(i.Ub(0,"mat-cell"),i.Sc(1),i.Tb()),2&t){const t=e.$implicit;i.Bb(1),i.Uc(" ",t.month_name," ")}}function at(t,e){1&t&&i.Pb(0,"mat-header-row",31)}function ot(t,e){1&t&&i.Pb(0,"mat-row")}let it=(()=>{class t{constructor(t){this._grievanceService=t,this.dataSource=new A.k}ngOnInit(){this.getMetaData(),this.status=new c.f("",c.v.required)}getMetaData(){console.log(this.applicationType.ComponenttypeId),"Emp-portal"==this.applicationType.type?this.getEmployeePortalData():"hrPortalEnquiries"==this.applicationType.type?this.getHrEnquires():"lmPortalEnquiries"==this.applicationType.type&&this.getLmEnquires()}getEmployeePortalData(){this.tableURL="/get_grievance_applicaitons_list&page=1",this.columnsToDisplay=["employee_id","against_employee_name","application_date","type","grievance_from","grievance_to","application_status"],this.getGrievanceApplicaitonsData("/get_grievance_applicaitons_list&page=1")}getHrEnquires(){this.tableURL="/get_hr_enquiries_list",this.columnsToDisplay=["employee_id","complaiant_name","application_date","type","grievance_from","grievance_to","lm_status"],this.getGrievanceApplicaitonsData("/get_hr_enquiries_list")}getLmEnquires(){this.tableURL="/get_grievance_applicaitons_list&page=1",this.columnsToDisplay=["employee_id","against_employee_name","application_date","type","grievance_from","grievance_to","application_status"],this.getGrievanceApplicaitonsData("/get_grievance_applicaitons_list&page=1")}getGrievanceApplicaitonsData(t){this._grievanceService.getData(t).subscribe({next:t=>{this.dataSource.data=this.dataSource.data.concat(t[0].data.data),this.dataSource.sort=this.sort},error:t=>{}})}onTableScroll(t){t.target.scrollTop>t.target.scrollHeight-t.target.offsetHeight-200&&this.getGrievanceApplicaitonsData(this.tableURL)}filterChange(){}}return t.\u0275fac=function(e){return new(e||t)(i.Ob(p))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-grievance-table"]],viewQuery:function(t,e){var n;1&t&&i.Xc(B.a,!0),2&t&&i.Dc(n=i.gc())&&(e.sort=n.first)},inputs:{applicationType:"applicationType"},decls:55,vars:3,consts:[[1,"ac-container"],[1,"w-100"],[1,"ac-box","mt-2"],[1,"ac-title-with-input"],[1,"title-text"],[1,"float-right"],["appearance","outline"],["formControlName","status",3,"change"],["value","Pending"],["value","Approved"],["value","Disapproved"],["matSort","",1,"ac-table",3,"dataSource","scroll"],["table",""],["matColumnDef","employee_id"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","against_employee_name"],["matColumnDef","complaiant_name"],["matColumnDef","application_date"],["matColumnDef","type"],["matColumnDef","grievance_from"],["matColumnDef","grievance_to"],["matColumnDef","application_status"],[3,"ngClass",4,"matCellDef"],["matColumnDef","lm_status"],["matColumnDef","hr_status"],["matColumnDef","month_name"],["class","tableHeader",4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["mat-sort-header",""],[3,"ngClass"],[1,"tableHeader"]],template:function(t,e){1&t&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"div",2),i.Ub(3,"div",3),i.Ub(4,"span",4),i.Sc(5,"Grievance Applicaitons"),i.Tb(),i.Ub(6,"span",5),i.Ub(7,"mat-form-field",6),i.Ub(8,"mat-label"),i.Sc(9,"Status"),i.Tb(),i.Ub(10,"mat-select",7),i.fc("change",(function(){return e.filterChange()})),i.Ub(11,"mat-option",8),i.Sc(12,"Pending"),i.Tb(),i.Ub(13,"mat-option",9),i.Sc(14,"Approved"),i.Tb(),i.Ub(15,"mat-option",10),i.Sc(16,"Disapproved"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(17,"div"),i.Ub(18,"mat-table",11,12),i.fc("scroll",(function(t){return e.onTableScroll(t)})),i.Sb(20,13),i.Qc(21,q,2,0,"mat-header-cell",14),i.Qc(22,Q,2,1,"mat-cell",15),i.Rb(),i.Sb(23,16),i.Qc(24,E,2,1,"mat-header-cell",14),i.Qc(25,R,2,1,"mat-cell",15),i.Rb(),i.Sb(26,17),i.Qc(27,F,2,0,"mat-header-cell",14),i.Qc(28,j,2,1,"mat-cell",15),i.Rb(),i.Sb(29,18),i.Qc(30,H,2,0,"mat-header-cell",14),i.Qc(31,G,2,1,"mat-cell",15),i.Rb(),i.Sb(32,19),i.Qc(33,V,2,0,"mat-header-cell",14),i.Qc(34,N,2,1,"mat-cell",15),i.Rb(),i.Sb(35,20),i.Qc(36,L,2,0,"mat-header-cell",14),i.Qc(37,$,2,1,"mat-cell",15),i.Rb(),i.Sb(38,21),i.Qc(39,W,2,0,"mat-header-cell",14),i.Qc(40,z,2,1,"mat-cell",15),i.Rb(),i.Sb(41,22),i.Qc(42,J,2,0,"mat-header-cell",14),i.Qc(43,K,2,2,"mat-cell",23),i.Rb(),i.Sb(44,24),i.Qc(45,X,2,0,"mat-header-cell",14),i.Qc(46,Z,2,2,"mat-cell",23),i.Rb(),i.Sb(47,25),i.Qc(48,Y,2,0,"mat-header-cell",14),i.Qc(49,tt,2,2,"mat-cell",23),i.Rb(),i.Sb(50,26),i.Qc(51,et,2,0,"mat-header-cell",14),i.Qc(52,nt,2,1,"mat-cell",15),i.Rb(),i.Qc(53,at,1,0,"mat-header-row",27),i.Qc(54,ot,1,0,"mat-row",28),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Tb()),2&t&&(i.Bb(18),i.rc("dataSource",e.dataSource),i.Bb(35),i.rc("matHeaderRowDef",e.columnsToDisplay),i.Bb(1),i.rc("matRowDefColumns",e.columnsToDisplay))},directives:[s.b,s.e,b.a,c.p,c.h,d.n,A.j,B.a,A.c,A.e,A.b,A.g,A.i,A.d,B.b,A.a,a.j,A.f,A.h],styles:[".ac-title[_ngcontent-%COMP%]{padding:8px 10px}.ac-title[_ngcontent-%COMP%], .ac-title-with-input[_ngcontent-%COMP%]{background:url(box-title.e1f201eb4580921df022.gif) repeat 0 0;font:12px/1em Verdana,Arial,Tahome;color:#333;font-weight:600}.ac-title-with-input[_ngcontent-%COMP%]{padding:0 10px 17px}.title-text[_ngcontent-%COMP%]{position:relative;top:8px}.ac-content[_ngcontent-%COMP%]{background:url(box-shadow.7f3d08d2a8dbb5226a95.gif) repeat-x 0 0;padding:5px}.ac-table[_ngcontent-%COMP%]{width:100%;overflow:auto;max-height:330px}.ac-box[_ngcontent-%COMP%]{display:block;background:#fcfcfc!important;border:1px solid #e7e7e7;flex-direction:row}.ac-title-withoutpic[_ngcontent-%COMP%]{font:12px/1em Verdana,Arial,Tahome;color:#333;font-weight:600}.grayborder[_ngcontent-%COMP%]{border:1px solid #e7e7e7;border-radius:5px}textarea[_ngcontent-%COMP%]{border:none;border-top:1px solid #e7e7e7;outline:none}.ac-footer[_ngcontent-%COMP%]{background:#e6e6e6;padding:2px 10px 4px}#ac-button-list[_ngcontent-%COMP%]{margin:3px 0;text-align:right}#ac-button[_ngcontent-%COMP%], #ac-button-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #ac-button-list[_ngcontent-%COMP%]   font[_ngcontent-%COMP%], .ac-button-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .ac-button-list[_ngcontent-%COMP%]   font[_ngcontent-%COMP%], a#ac-button[_ngcontent-%COMP%], a.ac-button[_ngcontent-%COMP%]{position:relative;padding:4px 6px;background:transparent linear-gradient(180deg,#ededed,#fafafa) 0 0 no-repeat padding-box;border:1px solid #fff;border-radius:3px;color:#3080ea;opacity:1;text-decoration:none;font-size:12px}#ac-button-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, #ac-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .ac-button-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .ac-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, a#ac-button[_ngcontent-%COMP%]:hover, a.ac-button[_ngcontent-%COMP%]:hover{border:1px solid #a6daee;padding:4px 6px;background:transparent linear-gradient(0deg,#f1fafe,#bde9fb) 0 0 no-repeat padding-box;border-radius:3px;opacity:1;color:#343434;text-decoration:none;font-size:12px}.PendingStatus[_ngcontent-%COMP%]{color:#ffa922}.employeeName[_ngcontent-%COMP%]{color:#007bff}.pending[_ngcontent-%COMP%]{color:#ffa922}.approved[_ngcontent-%COMP%]{color:#729b61}.disapproved[_ngcontent-%COMP%]{color:#f35e46}mat-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%]{justify-content:left}mat-table[_ngcontent-%COMP%]{cursor:pointer}.mat-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%]{padding:10px 0 10px 4px!important}  .mat-sort-header-arrow{margin:0!important}.mat-header-cell[_ngcontent-%COMP%]{color:#007bff!important;font-family:Arial;font-size:14px;line-height:1.3}"]}),t})();const ct=[{month:"January",corrections:"21",approved:"4",pending:"0",rejected:"8"},{month:"February",corrections:"8",approved:"1.5",pending:"5",rejected:"8"},{month:"March",corrections:"8",approved:"2.25",pending:"0",rejected:"0"},{month:"April",corrections:"15",approved:"0",pending:"0",rejected:"0"},{month:"May",corrections:"-",approved:"0",pending:"0",rejected:"5"},{month:"June",corrections:"-",approved:"1",pending:"5",rejected:"5"},{month:"July",corrections:"-",approved:"0",pending:"5",rejected:"5"},{month:"Auguest",corrections:"8",approved:"5",pending:"0",rejected:"0"},{month:"September",corrections:"8",approved:"0",pending:"0",rejected:"0"},{month:"October",corrections:"15",approved:"8",pending:"0",rejected:"0"},{month:"November",corrections:"8",approved:"0",pending:"2",rejected:"2"},{month:"December",corrections:"8",approved:"0",pending:"2",rejected:"2"}],rt=[{path:"emp_portal",component:(()=>{class t{constructor(){this.data={type:"Emp-portal",ComponenttypeId:4},this.statusColumns=["employeeId","grievanceAgainstName","applicationDate","type","from","to","status"],this.statusDataSource=ct,this.correctionAppsColumns=["dated","month","correctionDate","lmStatus","hrStatus"]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ib({type:t,selectors:[["app-employee-portal"]],decls:10,vars:2,consts:[[1,"card"],[1,"card-body"],[2,"color","#007bff"],[3,"applicationType"]],template:function(t,e){1&t&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"p"),i.Ub(3,"b"),i.Sc(4,"Conduct"),i.Tb(),i.Sc(5," / "),i.Ub(6,"span",2),i.Sc(7,"Raise a Concern"),i.Tb(),i.Tb(),i.Pb(8,"app-grievance-form",3),i.Pb(9,"app-grievance-table",3),i.Tb(),i.Tb()),2&t&&(i.Bb(8),i.rc("applicationType",e.data),i.Bb(1),i.rc("applicationType",e.data))},directives:[I,it],styles:[".card-body[_ngcontent-%COMP%]{background-color:#fff;padding:10px}"]}),t})()},{path:"hr/enquiries",component:(()=>{class t{constructor(){this.data={type:"hrPortalEnquiries",ComponenttypeId:2}}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ib({type:t,selectors:[["app-enquiries"]],decls:9,vars:1,consts:[[1,"card"],[1,"card-body"],[2,"color","#007bff"],[3,"applicationType"]],template:function(t,e){1&t&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"p"),i.Ub(3,"b"),i.Sc(4,"Conduct \\Enquiries"),i.Tb(),i.Sc(5," \\ "),i.Ub(6,"span",2),i.Sc(7,"Applications"),i.Tb(),i.Tb(),i.Pb(8,"app-grievance-table",3),i.Tb(),i.Tb()),2&t&&(i.Bb(8),i.rc("applicationType",e.data))},directives:[it],styles:[".card-body[_ngcontent-%COMP%]{background-color:#fff;padding:10px}"]}),t})()},{path:"hr/enquiries/details",component:(()=>{class t{constructor(){this.data={type:"EnquriesDetail",ComponenttypeId:3}}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ib({type:t,selectors:[["app-enquiries-details"]],decls:8,vars:1,consts:[[1,"card"],[1,"card-body"],[2,"color","#007bff"],[3,"applicationType"]],template:function(t,e){1&t&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"p"),i.Ub(3,"b"),i.Sc(4,"Conduct\\Enquiries"),i.Tb(),i.Ub(5,"span",2),i.Sc(6,"Detail"),i.Tb(),i.Tb(),i.Pb(7,"app-grievance-form",3),i.Tb(),i.Tb()),2&t&&(i.Bb(7),i.rc("applicationType",e.data))},directives:[I],styles:[".card-body[_ngcontent-%COMP%]{background-color:#fff;padding:10px}"]}),t})()},{path:"ceo/enquiries",component:(()=>{class t{constructor(){this.data={type:"hrPortalEnquiries",ComponenttypeId:2}}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ib({type:t,selectors:[["app-ceo-enquiries"]],decls:9,vars:1,consts:[[1,"card"],[1,"card-body"],[2,"color","#007bff"],[3,"applicationType"]],template:function(t,e){1&t&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"p"),i.Ub(3,"b"),i.Sc(4,"Conduct \\Enquiries"),i.Tb(),i.Sc(5," \\ "),i.Ub(6,"span",2),i.Sc(7,"Applications"),i.Tb(),i.Tb(),i.Pb(8,"app-grievance-table",3),i.Tb(),i.Tb()),2&t&&(i.Bb(8),i.rc("applicationType",e.data))},directives:[it],styles:[".card-body[_ngcontent-%COMP%]{background-color:#fff;padding:10px}"]}),t})()},{path:"ceo/enquiries/details",component:(()=>{class t{constructor(){this.data={type:"EnquriesDetail",ComponenttypeId:3}}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ib({type:t,selectors:[["app-ceo-enquiries-details"]],decls:8,vars:1,consts:[[1,"card"],[1,"card-body"],[2,"color","#007bff"],[3,"applicationType"]],template:function(t,e){1&t&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"p"),i.Ub(3,"b"),i.Sc(4,"Conduct\\Enquiries"),i.Tb(),i.Ub(5,"span",2),i.Sc(6,"Detail"),i.Tb(),i.Tb(),i.Pb(7,"app-grievance-form",3),i.Tb(),i.Tb()),2&t&&(i.Bb(7),i.rc("applicationType",e.data))},directives:[I],styles:[".card-body[_ngcontent-%COMP%]{background-color:#fff;padding:10px}"]}),t})()},{path:"line-manager/enquiries",component:(()=>{class t{constructor(){this.data={type:"lmPortalEnquiries",ComponenttypeId:2}}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ib({type:t,selectors:[["app-lm-enquiries"]],decls:9,vars:1,consts:[[1,"card"],[1,"card-body"],[2,"color","#007bff"],[3,"applicationType"]],template:function(t,e){1&t&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"p"),i.Ub(3,"b"),i.Sc(4,"Conduct \\Enquiries"),i.Tb(),i.Sc(5," \\ "),i.Ub(6,"span",2),i.Sc(7,"Applications"),i.Tb(),i.Tb(),i.Pb(8,"app-grievance-table",3),i.Tb(),i.Tb()),2&t&&(i.Bb(8),i.rc("applicationType",e.data))},directives:[it],styles:[".card-body[_ngcontent-%COMP%]{background-color:#fff;padding:10px}"]}),t})()},{path:"line-manager/enquiries/details",component:(()=>{class t{constructor(){this.data={type:"EnquriesDetail",ComponenttypeId:3}}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ib({type:t,selectors:[["app-lm-enquiries-details"]],decls:8,vars:1,consts:[[1,"card"],[1,"card-body"],[2,"color","#007bff"],[3,"applicationType"]],template:function(t,e){1&t&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Ub(2,"p"),i.Ub(3,"b"),i.Sc(4,"Conduct\\Enquiries"),i.Tb(),i.Ub(5,"span",2),i.Sc(6,"Detail"),i.Tb(),i.Tb(),i.Pb(7,"app-grievance-form",3),i.Tb(),i.Tb()),2&t&&(i.Bb(7),i.rc("applicationType",e.data))},directives:[I],styles:[".card-body[_ngcontent-%COMP%]{background-color:#fff;padding:10px}"]}),t})()}];let pt=(()=>{class t{}return t.\u0275mod=i.Mb({type:t}),t.\u0275inj=i.Lb({factory:function(e){return new(e||t)},imports:[[o.d.forChild(rt)],o.d]}),t})();var lt=n("tk/3"),st=n("IZw1"),bt=n("W/RB"),dt=n("PkMp");let mt=(()=>{class t{}return t.\u0275mod=i.Mb({type:t}),t.\u0275inj=i.Lb({factory:function(e){return new(e||t)},imports:[[a.c,lt.d,st.a,c.k,c.u,bt.a,dt.a,pt]]}),t})()}}]);