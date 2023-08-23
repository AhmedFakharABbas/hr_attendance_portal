export interface IEmployeeAttendanceAPI {
  calendar: IEmployeeAttendance;
  color_codes: Array<ILegendCalendar>;
  MonthlyAttendanceSummary: Array<ISummaryArray>;
  AnnualAttendanceSummary: Array<IAnnualAttendanceSummary>;
  leavesBreakDown: Array<IAnnualAttendanceSummary>;
  emp_name: string;
  years: any;
}


export interface ILegendCalendar {
  color: string;
  text: string;
}

export interface IEmployeeAttendance {
  year: number;
  months: Array<IMonthsArray>;
}

interface IMonthsArray {
  month: string;
  days: Array<IDays>;
}

export interface IDays {
  day: number;
  reason: string;
  status: string;
  time_in: string;
  time_in_location: string;
  time_out: string;
  time_out_location: string;
  color: string;
}

export interface ISummaryArray {
  month: string;
  totalDays: number;
  present: number;
  absent: number;
  latePatternCount: number;
  appliedLeaves: number;
  deductedLeaves: number;
  lates: number;
  onTimeWorkingDays: number;
  lateArrived10: number;
  lateArrived30: number;
  publicHoliday: number;
  businessTravel: number;
  workLeave: number;
}

export interface IAnnualAttendanceSummary {
  name: string;
  color: string;
  value: number;
  control: string;
}
