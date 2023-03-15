import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomCalendarService {

  calendar;
  year = new Date().getFullYear();
  month = new Date().getMonth() + 1;
  days: any = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  constructor() { }

  initCalendar() {
    this.calendar = {
      date: new Date(this.year, this.month, 0),
      days: this.generateDays(this.month, this.year)
    };
  }


  generateDays(month, year) {
    const monthList = [];
    const nbweeks = this.getNbWeeks(month, year);
    let dayone = new Date(year, month - 1, 1).getDay();
    const nbdaysMonth = new Date(year, month, 0).getDate();
    const lastdayindex = new Date(year, month - 1, nbdaysMonth).getDay();
    let lastday = 7;
    let Day = 1;
    const today = new Date().toDateString();

    for (let indexweek = 0; indexweek < nbweeks; indexweek++) {
      monthList[indexweek] = [];
      if (nbweeks === indexweek + 1) {
        lastday = lastdayindex + 1;
      }
      if (indexweek > 0) {
        dayone = 0;
      }
      for (let indexday = dayone; indexday < lastday; indexday++) {
        const d1 = new Date(year, month - 1, Day).toDateString();
        const Istoday = d1 === today;
        monthList[indexweek][indexday] = {
          day: Day,
          istoday: Istoday,
        };
        Day++;
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

  changeMonthEvent(button: string) {
    if (button === 'next') {
      this.month = this.month + 1;
    } else if (button === 'previous') {
      this.month = this.month - 1;
    }
    this.initCalendar();
  }

}
