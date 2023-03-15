import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { IEmployeeAttendance, IEmployeeAttendanceAPI, ISummaryArray, IAnnualAttendanceSummary } from '../shared/models/employee-attendance.model';
import { Subject } from 'rxjs';
import { DatePipe } from '@angular/common';
import { LoaderService } from './loader.service';
import { EmployeeAttendanceForm } from '../shared/form/employee-attendance.form';
import { APIs } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAttendanceService {

  yearsList = [];
  yearType = 'fiscal';
  monthType = 'cutoff';
  years: Array<{ name: any, startDate: any, endDate: any }> = [];
  // nextYear = ((new Date().getFullYear() - 1) + '-' + new Date().getFullYear()) + 1;

  year = {
    name: (new Date().getFullYear() + '-' + (+(new Date().getFullYear()) + 1)),
    startDate: (new Date().getFullYear()) + '-07-01',
    endDate: (+(new Date().getFullYear()) + 1) + '-06-30'
  };
  yearEvent = new EventEmitter<any>();
  monthEvent = new EventEmitter<any>();

  days: any = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  calendar: IEmployeeAttendance;
  public summary = new Subject<Array<ISummaryArray>>();
  objectSummary: Array<ISummaryArray>;

  annualAttendanceSummary = new Subject<Array<IAnnualAttendanceSummary>>();
  objectAnnualAttendanceSummary: Array<IAnnualAttendanceSummary>;

  public leavesBreakDown = new Subject<Array<IAnnualAttendanceSummary>>();
  objectLeavesBreakDown: Array<IAnnualAttendanceSummary>;

  empName: string;
  empName$ = new Subject<string>();

  slider = new EventEmitter<any>();
  barChartControls = [
    { color: '#E2CFC4', checked: false, name: 'Total Days', control: 'totalDays' },
    { color: '#F7D9C4', checked: false, name: 'Present', control: 'present' },
    { color: '#FAEDCB', checked: false, name: 'Late Pattern Count', control: 'latePatternCount' },

    { color: '#CED4DA', checked: false, name: 'On Time Working Days', control: 'onTimeWorkingDays' },
    { color: '#fe9a9a', checked: true, name: 'Absent', control: 'absent' },
    { color: '#ffdff6', checked: true, name: 'Late Arrived > 30', control: 'lateArrived30' },

    // orange
    // { color: '#fdcc8a', checked: false, name: 'Late Arrived > 10', control: 'lateArrived10' },
    // Blue
    { color: '#c8ecff', checked: false, name: 'Late Arrived > 10', control: 'lateArrived10' },

    // Blue
    // { color: '#c8ecff', checked: false, name: 'Leaves', control: 'appliedLeaves' },
    // Green
    { color: '#d5ffa8', checked: false, name: 'Leaves', control: 'appliedLeaves' },

    // Green
    // { color: '#d5ffa8', checked: false, name: 'Public Holiday', control: 'publicHoliday' },
    // orange
    { color: '#fdcc8a', checked: false, name: 'Public Holiday', control: 'publicHoliday' },

    { color: '#cdaed2', checked: false, name: 'Business Travel', control: 'businessTravel' },
    { color: '#fadcac', checked: false, name: 'Work Leave', control: 'workLeave' },
    { color: '#f1ffc3', checked: false, name: 'Deducted Leave', control: 'deductedLeaves' },
  ];
  barChartLegend = [];

  barCheckBoxes: string[] = [];
  annualSummaryCheckBoxes: string[] = [];
  leavesBreakDownCheckBoxes: string[] = [];

  libCalendar: Array<any> = [];
  legendObject: Array<any> = [];
  today = new Date();

  private bypassLoaderHttp: HttpClient;

  constructor(
    public employeeAttendanceForm: EmployeeAttendanceForm,
    private loaderService: LoaderService,
    private http: HttpClient,
    private datePipe: DatePipe,
    handler: HttpBackend,
  ) { this.bypassLoaderHttp = new HttpClient(handler); }

  getAttendance(userid, year, monthType: string) {

    this.clearAttendanceObjects();
    this.bypassLoaderHttp.get<IEmployeeAttendanceAPI>(APIs.employeeAttendacneYearly + '?user_id=' + userid + '&startDate=' + year.startDate + '&endDate=' + year.endDate + '&type=' + monthType)
      .subscribe(resp => {
        this.loaderService.isLoading.next(false);

        this.yearsList = resp.years.data;
        this.genrateYears(this.yearType);
        this.summary.next(resp.MonthlyAttendanceSummary);
        this.annualAttendanceSummary.next(resp.AnnualAttendanceSummary);
        this.leavesBreakDown.next(resp.leavesBreakDown);

        console.log(resp.MonthlyAttendanceSummary);

        this.objectSummary = resp.MonthlyAttendanceSummary;
        this.objectAnnualAttendanceSummary = resp.AnnualAttendanceSummary;
        this.objectLeavesBreakDown = resp.leavesBreakDown;

        this.createFilters(resp.AnnualAttendanceSummary, resp.leavesBreakDown);
      }, error => {
        this.loaderService.isLoading.next(false);
      });
  }

  getAttendanceCalendarResponse(userid, year, monthType: string) {
    this.loaderService.isLoading.next(true);

    this.http.get<IEmployeeAttendanceAPI>(APIs.employeeAttendacneCalenderYearly + '?user_id=' + userid + '&startDate=' + year.startDate + '&endDate=' + year.endDate)
      .subscribe(resp => {
        this.legendObject = resp.color_codes;
        this.empName$.next(resp.emp_name);
        this.empName = resp.emp_name;
        this.calendar = resp.calendar;

        if (this.yearType !== 'annual') {
          this.initFiscalCalendar(this.year);
        } else {
          this.initAnnualCalendar();
        }

        console.log( year);
        this.getAttendance(userid, year, monthType);
      }, error => {

        if (this.yearType !== 'annual') {
          this.initFiscalCalendar(this.year);
        } else {
          this.initAnnualCalendar();
        }
        this.objectSummary = this.createSummaryDummy();
        this.summary.next(this.createSummaryDummy());
        this.annualAttendanceSummary.next([
          {
            name: "N/A",
            value: 1,
            color: "#e4e3e3",
            control: "na"
          }
        ]);
        this.leavesBreakDown.next([
          {
            name: "N/A",
            value: 1,
            color: "#e4e3e3",
            control: "N/A"
          }
        ])
      });
  }

  clearAttendanceObjects() {
    this.yearsList = undefined;
    this.summary.next(null);
    this.annualAttendanceSummary.next(null);
    this.leavesBreakDown.next(null);

    this.objectSummary = undefined;
    this.objectAnnualAttendanceSummary = undefined;
    this.objectLeavesBreakDown = undefined;
  }

  genrateYears(yearType: string) {
    this.yearType = yearType;
    this.years = [];
    if (yearType === 'fiscal') {
      for (const year of this.yearsList) {
        const y = +year.name;
        this.years.push({
          name: (y - 1) + '-' + y,
          startDate: (y - 1) + '-07-01',
          endDate: y + '-06-30'
        });
      }
    } else {
      for (const year of this.yearsList) {
        if (year.name <= new Date().getFullYear()) {
          this.years.push({
            name: year.name,
            startDate: year.name + '-01-01',
            endDate: year.name + '-12-30'
          });
        }
      }
    }
  }

  createFilters(summary, leaves) {

    this.employeeAttendanceForm.mainFilters = new FormGroup({});
    this.annualSummaryCheckBoxes = [];
    for (const controls of summary) {
      this.employeeAttendanceForm.initAnnualAttendanceSummaryForm(controls.control);
      this.annualSummaryCheckBoxes.push(controls.control);
    }

    this.employeeAttendanceForm.leavesFilters = new FormGroup({});
    this.leavesBreakDownCheckBoxes = [];
    for (const controls of leaves) {
      this.employeeAttendanceForm.initLeavesBreakDownForm(controls.control);
      this.leavesBreakDownCheckBoxes.push(controls.control);
    }

    this.employeeAttendanceForm.barChartFilters = new FormGroup({});
    this.barCheckBoxes = [];
    for (const controls of this.barChartControls) {
      this.employeeAttendanceForm.initBarChartForm(controls.control, controls.checked);
      if (controls.checked) {
        this.barCheckBoxes.push(controls.control);
      }
    }
  }

  autoPlaySlider() {
    return {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      autoplay: true,
      speed: 7000,
      autoplaySpeed: 1000,
      prevArrow: '<button class="leftRsBanner"><i class="fas fa-chevron-left"></i></i></button>',
      nextArrow: '<button class="rightRsBanner"><i class="fas fa-chevron-right"></i></button>',
    };
  }

  simpleSlider() {
    return {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      autoplay: false,
      prevArrow: '<button class="leftRsBanner"><i class="fas fa-chevron-left"></i></i></button>',
      nextArrow: '<button class="rightRsBanner"><i class="fas fa-chevron-right"></i></button>',
    };
  }

  // ============ Checkbox Validation

  barCheckBox(popup: string, value: boolean, control: string) {
    if (popup === 'barchart') {

      if (!value) {
        this.barCheckBoxes = this.barCheckBoxes.filter(e => e !== control);

        this.employeeAttendanceForm.barChartFilters.enable();
        this.employeeAttendanceForm.barChartFilters.get(this.barCheckBoxes[0]).disable();
      }

      if (value && this.barCheckBoxes.length < 2) {
        this.barCheckBoxes.push(control);
      }

      if (this.barCheckBoxes.length === 2) {
        this.barCheckBoxOnInit();
      }
    } else if (popup === 'annualDoughnut') {


      if (!value && this.annualSummaryCheckBoxes.length > 2) {
        this.annualSummaryCheckBoxes = this.annualSummaryCheckBoxes.filter(e => e !== control);
      }
      if (value) {
        this.employeeAttendanceForm.mainFilters.enable({ onlySelf: true });
        this.annualSummaryCheckBoxes.push(control);
      }

      if (this.annualSummaryCheckBoxes.length === 2) {
        for (const contr of this.annualSummaryCheckBoxes) {
          this.employeeAttendanceForm.mainFilters.get(contr).disable({ onlySelf: true });
        }
      }
    } else if (popup === 'leaveDoughnut') {
      if (!value && this.leavesBreakDownCheckBoxes.length > 2) {
        this.leavesBreakDownCheckBoxes = this.leavesBreakDownCheckBoxes.filter(e => e !== control);
      }
      if (value) {
        this.employeeAttendanceForm.leavesFilters.enable({ onlySelf: true });
        this.leavesBreakDownCheckBoxes.push(control);
      }
      if (this.leavesBreakDownCheckBoxes.length === 2) {
        for (const contr of this.leavesBreakDownCheckBoxes) {
          this.employeeAttendanceForm.leavesFilters.get(contr).disable({ onlySelf: true });
        }
      }
    }
  }

  barCheckBoxOnInit() {
    this.employeeAttendanceForm.barChartFilters.disable({ onlySelf: true });
    for (const contr of this.barCheckBoxes) {
      this.employeeAttendanceForm.barChartFilters.get(contr).enable({ onlySelf: true });
    }
  }

  // ============= Create Calendar
  initAnnualCalendar() {
    this.libCalendar = [];
    const cal1 = [];
    for (let index = 0; index < 6; index++) {
      cal1.push({
        date: new Date(+this.year.name, index + 1, 0),
        days: this.generateCalendar(index + 1, this.year.name)
      });
    }
    this.libCalendar.push(cal1);

    const cal2 = [];
    for (let index = 6; index < 12; index++) {
      cal2.push({
        date: new Date(+this.year.name, index + 1, 0),
        days: this.generateCalendar(index + 1, this.year.name)
      });
    }
    this.libCalendar.push(cal2);
  }

  initFiscalCalendar(years) {
    this.libCalendar = [];
    let year = years.name;
    if (typeof year === 'string') {
      year = year.split('-');
    }

    const cal1 = [];
    for (let index = 6; index < 12; index++) {
      cal1.push({
        date: new Date(+year[0], index + 1, 0),
        days: this.generateCalendar(index + 1, +year[0])
      });
    }
    this.libCalendar.push(cal1);

    const cal2 = [];
    for (let index = 0; index < 6; index++) {
      cal2.push({
        date: new Date(+year[1], index + 1, 0),
        days: this.generateCalendar(index + 1, +year[1])
      });
    }
    this.libCalendar.push(cal2);
  }

  generateCalendar(month, year) {
    const monthList = [];
    const nbweeks = this.getNbWeeks(month, year);
    let dayone = new Date(year, month - 1, 1).getDay();
    const nbdaysMonth = new Date(year, month, 0).getDate();
    const lastdayindex = new Date(year, month - 1, nbdaysMonth).getDay();
    let lastday = 7;
    let dayCount = 1;

    for (let indexweek = 0; indexweek < nbweeks; indexweek++) {
      monthList[indexweek] = [];
      if (nbweeks === indexweek + 1) {
        lastday = lastdayindex + 1;
      }
      if (indexweek > 0) {
        dayone = 0;
      }
      for (let indexday = dayone; indexday < lastday; indexday++) {
        monthList[indexweek][indexday] = {
          day: dayCount,
          color: this.getColor(new Date(year, month - 1, 1), dayCount)
        };
        dayCount++;
      }
    }

    return monthList;
  }

  getNbWeeks(month, year) {
    const dayone = new Date(year, month - 1, 1).getDay();
    const nbdaysMonth = new Date(year, month, 0).getDate();
    const lastday = new Date(year, month - 1, nbdaysMonth).getDay();
    return (nbdaysMonth + dayone + (6 - lastday)) / 7;
  }

  // ============= End Create Calendar
  getColor(argMonth: Date, argDay: number): string {
    const checkDate = new Date(Number(this.datePipe.transform(argMonth, 'yyyy')), Number(this.datePipe.transform(argMonth, 'MM')) - 1, argDay);
    if (checkDate > this.today) {
      return '#fff';
    }
    const date = this.datePipe.transform(argMonth, 'MMMM');
    const calander = this.calendar;

    if (calander) {
      for (const month of calander.months) {
        if (month.month === date) {
          for (const day of month.days) {
            if (day.day === argDay) {
              return day.color;
            }
          }
        }
      }
    }
  }

  createSummaryDummy() {
    const summary = [];
    for (let index = 0; index < 12; index++) {
      summary.push({
        month: this.datePipe.transform(new Date(Number(new Date().getFullYear()), index), 'MMM-yyyy'),
        totalDays: 0,
        present: 0,
        lates: 0,
        absent: 0,
        latePatternCount: 0,
        appliedLeaves: 0,
        onTimeWorkingDays: 0,
        lateArrived10: 0,
        lateArrived30: 0,
        publicHoliday: 0,
        businessTravel: 0,
        workLeave: 0
      })
    }
    return summary;
  }

}
