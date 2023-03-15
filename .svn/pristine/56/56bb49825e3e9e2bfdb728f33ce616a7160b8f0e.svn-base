// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import * as config from '../../config.json';

export const environment = {
  production: false,

  nodeApiUrl: config.nodeApiUrl,
  phpApiHeader: config.phpApiHeader,
  phpApiHeader_300_23: config.phpApiHeader_300_23,
  phpApiHeader_300: config.phpApiHeader_300,

  mongoApiUrl: config.mongoApiUrl,
  laravelApiUrl: config.laravelApiUrl,
  phpSiteUrl: config.phpSiteUrl,
  stagingHeader: config.stagingHeader,
};

// APIS
export const APIs = {

  getFilters: environment.phpApiHeader_300_23 + 'getFilters',
  setFilters: environment.phpApiHeader + 'setFilters',
  rosterLogin: environment.phpApiHeader + 'rosterLogin',

  employeeAttendacneYearly: environment.phpApiHeader + 'employeeAttendacneYearly',
  employeeAttendacneCalenderYearly: environment.phpApiHeader + 'employeeAttendacneCalenderYearly',

  getMenus: environment.nodeApiUrl + 'Menu/getMenus',
  getLandingSubMenus: environment.nodeApiUrl + 'Menu/getLandingSubMenus',
  getSubMenus: environment.nodeApiUrl + 'Menu/getSubMenus',
  getPortals: environment.nodeApiUrl + 'Menu/getPortals',

  // ------------------------ Leave phase - 2
  // Leave Setup
  getGeoGroups: environment.phpApiHeader_300_23 + 'getGeoGroups',
  getCompanies: environment.phpApiHeader_300_23 + 'getCompanies',
  getCountriesByGeoGroups: environment.phpApiHeader_300_23 + 'getCountriesByGeoGroups',
  getGeoFilterDataByParent: environment.phpApiHeader_300_23 + 'getGeoFilterDataByParent',
  getLeaveSetupList: environment.phpApiHeader_300_23 + 'getLeaveSetupList',
  getLeaveSetupDetail: environment.phpApiHeader_300_23 + 'getLeaveSetupDetail',

  // Leave Type & Rules Setup
  getLeaveTypes: environment.phpApiHeader_300_23 + 'getLeaveTypes',
  getSandwichRuleTypes: environment.phpApiHeader_300_23 + 'getSandwichRuleTypes',
  getShortLeaveDailyLimit: environment.phpApiHeader_300_23 + 'getShortLeaveDailyLimit',
  getYearEndBasis: environment.phpApiHeader_300_23 + 'getYearEndBasis',
  getShortLeaveCriteriaOptions: environment.phpApiHeader_300_23 + 'getShortLeaveCriteriaOptions',
  getHalfLeaveCriteriaOptions: environment.phpApiHeader_300_23 + 'getHalfLeaveCriteriaOptions',
  getCalculationBasis: environment.phpApiHeader_300_23 + 'getCalculationBasis',
  saveLeaveSetup: environment.phpApiHeader_300_23 + 'saveLeaveSetup',

  // Reasons
  getReasonsBySetup: environment.phpApiHeader_300_23 + 'getReasonsBySetup',

  // Eligibility & Entitlement Setup
  getCriteriaSetupFeildsBySetupType: environment.phpApiHeader_300_23 + 'getCriteriaSetupFeildsBySetupType',
  getSubDepartmentsByDepartment: environment.phpApiHeader_300_23 + 'getSubDepartmentsByDepartment',

  // Leave List
  getHRLeaveApplicationList: environment.phpApiHeader_300_23 + 'hr/GetHRLeaveApplicationList',
  getLMLeaveApplicationList: environment.phpApiHeader_300_23 + 'lm/GetLMLeaveApplicationLIst',
  getEmployeeLeaveApplicationList: environment.phpApiHeader_300_23 + 'user/EmployeeLeaveApplicationList',

  // Apply Leave
  applyLeave: environment.phpApiHeader_300_23 + 'user/applyLeave',
  getApplicableLeaveByEmployee: environment.phpApiHeader_300_23 + 'getApplicableLeaveByEmployee',

  // Leave Detail
  getLeaveBalanceByEmployee: environment.phpApiHeader_300_23 + 'getLeaveBalanceByEmployee',
  getApplicationApprovelDetail: environment.phpApiHeader_300_23 + 'user/GetApplicationApprovelDetail',
  getLeaveApplicationDetail: environment.phpApiHeader_300_23 + 'user/GetLeaveApplicationDetail',
  getApplicationLog: environment.phpApiHeader_300_23 + 'user/getApplicationLog',
  lMLeaveStatus: environment.phpApiHeader_300_23 + 'lm/LMLeaveStatus',
  setLeaveStatusByHR: environment.phpApiHeader_300_23 + 'hr/SetLeaveStatusByHR',
  WithdrawApplication: environment.phpApiHeader_300_23 + 'user/WithdrawApplication',

  //Payroll Setup
  postSetup: environment.nodeApiUrl + 'PayrollSetup/filterScreen',
  searchSetup: environment.nodeApiUrl + 'PayrollSetup/filterScreen/search',
  addUpdateSetup: environment.nodeApiUrl + 'PayrollSetup/filterScreen/update',

  //MIS Headers
  getMISHeaders: environment.nodeApiUrl + 'PayrollSetup/filterScreen/headers',

  //payroll Dashboard
  getNewHires: environment.nodeApiUrl + 'PayrollDashboard/getNewHires',
  getLeavers: environment.nodeApiUrl + 'PayrollDashboard/getLeavers',
  getSalaryChanges: environment.nodeApiUrl + 'PayrollDashboard/getSalaryChanges',
  getExpenses: environment.nodeApiUrl + 'PayrollDashboard/getExpenses',
  getAttendance: environment.nodeApiUrl + 'PayrollDashboard/getAttendance',
  getLoanDeduction: environment.nodeApiUrl + 'PayrollDashboard/getLoanDeduction',

  getHeadCount: environment.nodeApiUrl + 'PayrollDashboard/getHeadCount',
  getOtherChanges: environment.nodeApiUrl + ' PayrollDashboard/getOtherChanges',


  // MongoDB Apis
  creatMenusCache: environment.mongoApiUrl + ' ',

  // Encode & Decode
  encryptAesCode: environment.phpApiHeader_300 + 'EncryptAesCode',
  decryptAesCode: environment.phpApiHeader_300 + 'DecryptAesCode',

};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
