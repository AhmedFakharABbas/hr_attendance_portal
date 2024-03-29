import * as config from "../../config.json";
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //isTesting: false,
  nodeApiUrl: config.nodeApiUrl,
  phpApiHeader: config.phpApiHeader,
  phpApiHeader_300_23: config.phpApiHeader_300_23,
  phpApiHeader_300: config.phpApiHeader_300,

  mongoApiUrl: config.mongoApiUrl,
  laravelApiUrl: config.laravelApiUrl,
  attendanceLaravelApiUrl:config.attendanceLaravelApiUrl,
  // grievanceLaravelApiUrl:config.grievanceLaravelApiUrl,
  // grievanceLaravelApiUrl:config.grievanceLaravelApiUrl,
  grievanceLaravelApiUrl:'https://urchoice.live/people/api',
  phpSiteUrl: config.phpSiteUrl,
  stagingHeader: config.stagingHeader,
  laravelUrl: config.laravelUrl,
  isGrievanceMoudle: false,

  GrievanceApiURL: "http://172.16.254.218/dev-people-i/api",
  // GrievanceApiURL:"http://172.16.254.218/dev-people-i/api",
  // GrievanceContentURL:"http://172.16.254.218/dev-people-i/"
  //GrievanceContentURL:"http://172.16.254.218/dev-people-i/"
};

// APIS

export const APIs = {
  getFilters: environment.phpApiHeader_300_23 + "getFilters",
  setFilters: environment.phpApiHeader + "setFilters",
  rosterLogin: environment.phpApiHeader + "rosterLogin",

  employeeAttendacneYearly:
    environment.phpApiHeader + "employeeAttendacneYearly",
  employeeAttendacneCalenderYearly:
    environment.phpApiHeader + "employeeAttendacneCalenderYearly",

  getMenus: environment.nodeApiUrl + "Menu/getMenus",
  getLandingSubMenus: environment.nodeApiUrl + "Menu/getLandingSubMenus",
  getSubMenus: environment.nodeApiUrl + "Menu/getSubMenus",
  getPortals: environment.nodeApiUrl + "Menu/getPortals",

  // ------------------------ Leave phase - 2
  // Leave Setup
  getGeoGroups: environment.phpApiHeader_300_23 + "getGeoGroups",
  getCompanies: environment.phpApiHeader_300_23 + "getCompanies",
  getCountriesByGeoGroups:
    environment.phpApiHeader_300_23 + "getCountriesByGeoGroups",
  getGeoFilterDataByParent:
    environment.phpApiHeader_300_23 + "getGeoFilterDataByParent",
  getLeaveSetupList: environment.phpApiHeader_300_23 + "getLeaveSetupList",
  getLeaveSetupDetail: environment.phpApiHeader_300_23 + "getLeaveSetupDetail",

  // Leave Type & Rules Setup
  getLeaveTypes: environment.phpApiHeader_300_23 + "getLeaveTypes",
  getSandwichRuleTypes:
    environment.phpApiHeader_300_23 + "getSandwichRuleTypes",
  getShortLeaveDailyLimit:
    environment.phpApiHeader_300_23 + "getShortLeaveDailyLimit",
  getYearEndBasis: environment.phpApiHeader_300_23 + "getYearEndBasis",
  getShortLeaveCriteriaOptions:
    environment.phpApiHeader_300_23 + "getShortLeaveCriteriaOptions",
  getHalfLeaveCriteriaOptions:
    environment.phpApiHeader_300_23 + "getHalfLeaveCriteriaOptions",
  getCalculationBasis: environment.phpApiHeader_300_23 + "getCalculationBasis",
  saveLeaveSetup: environment.phpApiHeader_300_23 + "saveLeaveSetup",

  // Reasons
  getReasonsBySetup: environment.phpApiHeader_300_23 + "getReasonsBySetup",

  // Eligibility & Entitlement Setup
  getCriteriaSetupFeildsBySetupType:
    environment.phpApiHeader_300_23 + "getCriteriaSetupFeildsBySetupType",
  getSubDepartmentsByDepartment:
    environment.phpApiHeader_300_23 + "getSubDepartmentsByDepartment",

  // Leave List
  getHRLeaveApplicationList:
    environment.phpApiHeader_300_23 + "hr/GetHRLeaveApplicationList",
  getLMLeaveApplicationList:
    environment.phpApiHeader_300_23 + "lm/GetLMLeaveApplicationLIst",
  getEmployeeLeaveApplicationList:
    environment.phpApiHeader_300_23 + "user/EmployeeLeaveApplicationList",

  // Apply Leave
  applyLeave: environment.phpApiHeader_300_23 + "user/applyLeave",
  getApplicableLeaveByEmployee:
    environment.phpApiHeader_300_23 + "getApplicableLeaveByEmployee",

  // Leave Detail
  getLeaveBalanceByEmployee:
    environment.phpApiHeader_300_23 + "getLeaveBalanceByEmployee",
  getApplicationApprovelDetail:
    environment.phpApiHeader_300_23 + "user/GetApplicationApprovelDetail",
  getLeaveApplicationDetail:
    environment.phpApiHeader_300_23 + "user/GetLeaveApplicationDetail",
  getApplicationLog: environment.phpApiHeader_300_23 + "user/getApplicationLog",
  lMLeaveStatus: environment.phpApiHeader_300_23 + "lm/LMLeaveStatus",
  setLeaveStatusByHR: environment.phpApiHeader_300_23 + "hr/SetLeaveStatusByHR",
  WithdrawApplication:
    environment.phpApiHeader_300_23 + "user/WithdrawApplication",

  //Payroll Setup
  postSetup: environment.nodeApiUrl + "PayrollSetup/filterScreen",
  searchSetup: environment.nodeApiUrl + "PayrollSetup/filterScreen/search",
  addUpdateSetup: environment.nodeApiUrl + "PayrollSetup/filterScreen/update",
  getDropdowns: environment.nodeApiUrl + "PayrollSetup/filterScreen/dropdowns",

  //MIS Headers
  getMISHeaders: environment.nodeApiUrl + "PayrollSetup/filterScreen/headers",
  updateHeaders:
    environment.nodeApiUrl + "PayrollSetup/filterScreen/headers/update",
  searchHeaders:
    environment.nodeApiUrl + "PayrollSetup/filterScreen/headers/search",

  //Insurance Setup
  updateInsurance:
    environment.nodeApiUrl + "PayrollSetup/filterScreen/insuranceUpdate",

  //payroll Dashboard
  getNewHires: environment.nodeApiUrl + "PayrollDashboard/getNewHires",
  getLeavers: environment.nodeApiUrl + "PayrollDashboard/getLeavers",
  getSalaryChanges:
    environment.nodeApiUrl + "PayrollDashboard/getSalaryChanges",
  getExpenses: environment.nodeApiUrl + "PayrollDashboard/getExpenses",
  getAttendance: environment.nodeApiUrl + "PayrollDashboard/getAttendance",
  getLoanDeduction:
    environment.nodeApiUrl + "PayrollDashboard/getLoanDeduction",

  getHeadCount: environment.nodeApiUrl + "PayrollDashboard/getHeadCount",
  getOtherChanges: environment.nodeApiUrl + " PayrollDashboard/getOtherChanges",

  // MongoDB Apis
  creatMenusCache: environment.mongoApiUrl + " ",

  // Encode & Decode
  encryptAesCode: environment.phpApiHeader_300 + "EncryptAesCode",
  decryptAesCode: environment.phpApiHeader_300 + "DecryptAesCode",

  // get attendance Correction montly status
  getEmpMonthlyCorrectionStatus: environment.attendanceLaravelApiUrl+
    "/attendance_correction/employee_portal/monthly_correction_status",
  getLmMonthlyCorrectionStatus: environment.attendanceLaravelApiUrl+
    "/attendance_correction/lm_portal/monthly_correction_status",
  getHrMonthlyCorrectionStatus: environment.attendanceLaravelApiUrl+
    "/attendance_correction/hr_portal/monthly_correction_status",

  // get attendance  Application List
  getEmpCorrectionApplicationList: environment.attendanceLaravelApiUrl+
    "/attendance_correction/employee_portal/correction_application_list",
  getLmCorrectionApplicationList: environment.attendanceLaravelApiUrl+
    "/attendance_correction/lm_portal/correction_application_list",
  getHrCorrectionApplicationList: environment.attendanceLaravelApiUrl+
    "/attendance_correction/hr_portal/correction_application_list",

  // get attendance details/meta API
  getEmpRosterDetails: environment.attendanceLaravelApiUrl+
    "/attendance_correction/employee_portal/get_roster_details",
  getEmpShiftDetails: environment.attendanceLaravelApiUrl+
    "/attendance_correction/employee_portal/get_shift_details",
    getAllLeaveTypes:  environment.attendanceLaravelApiUrl+"/attendance_correction/employee_portal/get_all_leave_types",
  getEmpShiftTypes:  environment.attendanceLaravelApiUrl+"/attendance_correction/employee_portal/get_shift_types",
  getAttendApplicationDetails:  environment.attendanceLaravelApiUrl+"/attendance_correction/get_application_details",
  getEmpLeaveTypes:  environment.attendanceLaravelApiUrl+"/attendance_correction/employee_portal/get_leave_types",

  // Line Manger Correction application
  createLmAttendanceCorrectionRemarks: environment.attendanceLaravelApiUrl+
    "/attendance_correction/lm_portal/attendance_correction_remarks",
  createLmshiftChangeRemarks: environment.attendanceLaravelApiUrl+
    "/attendance_correction/lm_portal/shift_change_remarks",

  // HR Correction application
  createHRAttendanceCorrectionRemarks: environment.attendanceLaravelApiUrl+
    "/attendance_correction/hr_portal/attendance_correction_remarks",
  createHRLeaveReversalRemarks: environment.attendanceLaravelApiUrl+
    "/attendance_correction/hr_portal/leave_reversal_remarks",
//HR update Hr Bulk Upload
updateHrBulkUpload: environment.attendanceLaravelApiUrl+
"/attendance_correction/hr_portal/attendance_bulk_upload",
hrdirectAttendance: environment.attendanceLaravelApiUrl+
"/attendance_correction/hr_portal/hr_direct_attendance_approved",

  // Employee Correction application
  createEmpAttendCorrection: environment.attendanceLaravelApiUrl+
    "/attendance_correction/employee_portal/attendance_correction",
  createEmpLeaveReversalRequest: environment.attendanceLaravelApiUrl+
    "/attendance_correction/employee_portal/leave_reversal_request",
  createEmpShiftChangeRequest: environment.attendanceLaravelApiUrl+
    "/attendance_correction/employee_portal/shift_change_request",
     // get Grievance Meta data
 getAllDepartments: environment.grievanceLaravelApiUrl+ "/grievance/get_departments",
 getAllDesignations: environment.grievanceLaravelApiUrl+ "/grievance/get_designations",
 getAllEmployees: environment.grievanceLaravelApiUrl+ "/grievance/get_employees",
 getLoginUserDetails: environment.grievanceLaravelApiUrl+ "/grievance/get_login_user_detail",

  // get Grievance
  getGrievanceApplication: environment.grievanceLaravelApiUrl+"/grievance/applications",
  deleteGrievanceEvidence: environment.grievanceLaravelApiUrl+"/grievance/applications/delete-evidence",
  uploadGrievanceEvidence: environment.grievanceLaravelApiUrl+"/grievance/applications/upload-evidence",
};


