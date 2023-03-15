import { Component, OnInit } from '@angular/core';
import { CustomCalendarService } from '../../../../services/custom-calendar.service';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-portal-employee',
  templateUrl: './portal-employee.component.html',
  styleUrls: ['./portal-employee.component.css']
})
export class PortalEmployeeComponent implements OnInit {

  constructor(
    public router: Router,
    public headerService: HeaderService,
    public customCalendarService: CustomCalendarService
  ) { }

  ngOnInit() {
    this.customCalendarService.initCalendar();

    const url = this.router.url.substr(1);
    this.headerService.getMenusByPage(url);
  }

  getColor(argMonth: Date, argDay: number): string {
    // const date = this.datePipe.transform(argMonth, 'MMMM');
    // const calander = this.employeeAttendanceService.calendar;

    // for (const month of calander.months) {
    //   if (month.month === date) {
    //     for (const day of month.days) {
    //       if (day.day === argDay) {
    //         return day.color;
    //       }
    //     }
    //   }
    // }
    return '';
  }

}
