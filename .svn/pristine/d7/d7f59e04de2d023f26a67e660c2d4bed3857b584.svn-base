import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFilters, IRoster } from '../shared/models/filters.model';
import { DOCUMENT } from '@angular/common';
import { APIs } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  public fullScreen = true;
  elem;
  department = { hr: 'HR', finance: 'Finance', it: 'IT', cr: 'CR' };
  filtersObject: any;
  rosterObject: Array<IRoster>;
  newObject = [
    {
      department: this.department.finance,
      legend: [
        { shift: 'Morning', from: '09:00:00', to: '05:00 PM' },
        { shift: 'Evening', from: '02:00 PM', to: '10:00 PM' },
        { shift: 'Night', from: '10:00 PM', to: '06:00 AM' },
      ],
      meta: [
        {
          day: 'Monday',
          date: '24-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Muhammad Zeeshan Nadeem' },
                { thumb: '', name: 'Muhammad Zeeshan Ali' },
                { thumb: '', name: 'Muhammad Zeeshan Ahmad' },
                { thumb: '', name: 'Muhammad Zeeshan Shoaib' },
                { thumb: '', name: 'Muhammad Zeeshan Nadeem' },
                { thumb: '', name: 'Muhammad Zeeshan Ali' },
                { thumb: '', name: 'Muhammad Zeeshan Ahmad' },
                { thumb: '', name: 'Muhammad Zeeshan Shoaib' },
                { thumb: '', name: 'Muhammad Zeeshan Nadeem' },
                { thumb: '', name: 'Muhammad Zeeshan Ali' },
                { thumb: '', name: 'Muhammad Zeeshan Ahmad' },
                { thumb: '', name: 'Muhammad Zeeshan Shoaib' },
                { thumb: '', name: 'Muhammad Zeeshan Nadeem' },
                { thumb: '', name: 'Muhammad Zeeshan Ali' },
                { thumb: '', name: 'Muhammad Zeeshan Ahmad' },
                { thumb: '', name: 'Muhammad Zeeshan Shoaib' },
              ]
            },
            {
              shift: 'Evening', employees: [
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
              ]
            },
          ]
        },
        {
          day: 'Tuesday',
          date: '25-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Evening', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Night', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
        {
          day: 'Wednesday',
          date: '26-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Evening', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Night', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
        {
          day: 'Thursday',
          date: '27-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Evening', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Night', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
        {
          day: 'Friday',
          date: '28-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
        {
          day: 'Saturday',
          date: '29-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
        {
          day: 'Sunday',
          date: '01-March-2020',
          shift: [
            {
              shift: 'Evening', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
      ]
    },
    {
      department: this.department.hr,
      legend: [
        { shift: 'Morning', from: '09:00 AM', to: '05:00 PM' },
        { shift: 'Evening', from: '02:00 PM', to: '10:00 PM' },
        { shift: 'Night', from: '10:00 PM', to: '06:00 AM' },
      ],
      meta: [
        {
          day: 'Monday',
          date: '24-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
              ]
            },
            {
              shift: 'Evening', employees: [
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
              ]
            },
          ]
        },
        {
          day: 'Tuesday',
          date: '25-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Evening', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Night', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
        {
          day: 'Wednesday',
          date: '26-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Evening', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Night', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
        {
          day: 'Thursday',
          date: '27-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Evening', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Night', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
        {
          day: 'Friday',
          date: '28-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
        {
          day: 'Saturday',
          date: '29-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
        {
          day: 'Sunday',
          date: '01-March-2020',
          shift: [
            {
              shift: 'Evening', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
      ]
    },
    {
      department: this.department.cr,
      legend: [
        { shift: 'Morning', from: '09:00 AM', to: '05:00 PM' },
        { shift: 'Evening', from: '02:00 PM', to: '10:00 PM' },
        { shift: 'Night', from: '10:00 PM', to: '06:00 AM' },
      ],
      meta: [
        {
          day: 'Monday',
          date: '24-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
              ]
            },
            {
              shift: 'Evening', employees: [
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
              ]
            },
          ]
        },
        {
          day: 'Tuesday',
          date: '25-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
              ]
            },
            {
              shift: 'Evening', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
              ]
            },
            {
              shift: 'Night', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
              ]
            },
          ]
        },
        {
          day: 'Wednesday',
          date: '26-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Evening', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Night', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
        {
          day: 'Thursday',
          date: '27-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Evening', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Night', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
        {
          day: 'Friday',
          date: '28-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
        {
          day: 'Saturday',
          date: '29-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
        {
          day: 'Sunday',
          date: '01-March-2020',
          shift: [
            {
              shift: 'Evening', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
      ]
    },
    {
      department: this.department.it,
      legend: [
        { shift: 'Morning', from: '09:00 AM', to: '05:00 PM' },
        { shift: 'Evening', from: '02:00 PM', to: '10:00 PM' },
        { shift: 'Night', from: '10:00 PM', to: '06:00 AM' },
      ],
      meta: [
        {
          day: 'Monday',
          date: '24-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
              ]
            },
            {
              shift: 'Evening', employees: [
                { thumb: '', name: 'Nadeem' },
                { thumb: '', name: 'Ali' },
                { thumb: '', name: 'Ahmad' },
                { thumb: '', name: 'Shoaib' },
              ]
            },
          ]
        },
        {
          day: 'Tuesday',
          date: '25-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Evening', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Night', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
        {
          day: 'Wednesday',
          date: '26-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Evening', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Night', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
        {
          day: 'Thursday',
          date: '27-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Evening', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
            {
              shift: 'Night', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
        {
          day: 'Friday',
          date: '28-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
        {
          day: 'Saturday',
          date: '29-Feb-2020',
          shift: [
            {
              shift: 'Morning', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
        {
          day: 'Sunday',
          date: '01-March-2020',
          shift: [
            {
              shift: 'Evening', employees: [
                { thumb: '', name: 'Jameel' },
                { thumb: '', name: 'Nouman' },
                { thumb: '', name: 'Waqar' },
                { thumb: '', name: 'Laraib' },
              ]
            },
          ]
        },
      ]
    }
  ];

  constructor(
    @Inject(DOCUMENT) private document: any,
    private http: HttpClient
  ) { }

  getFilters() {
    return this.http.get<IFilters>(APIs.getFilters);
  }

  setFilters(form?) {
    return this.http.post<Array<IRoster>>(APIs.setFilters, { form });
  }

  goToFullScreen() {
    this.elem = document.documentElement;
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  closeFullScreen() {
    /* Close fullscreen */
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }

}
