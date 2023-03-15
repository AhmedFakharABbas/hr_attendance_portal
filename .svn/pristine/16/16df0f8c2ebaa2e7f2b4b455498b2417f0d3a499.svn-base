import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../services/header.service';

@Component({
  selector: 'app-portals',
  templateUrl: './portals.component.html',
  styleUrls: ['./portals.component.css']
})
export class PortalsComponent implements OnInit {

  portals;
  // storage = 'https://staging.peoplei.tech/uat/104/people/landing_images/';
  // portals = [
  //   {
  //     id: 1,
  //     status: true,
  //     img: this.storage + '36.png',
  //     link: 'employee',
  //     name: 'Employee Portal',
  //     description: 'Create and respond to various applications and manage personal information and salary'
  //   },
  //   {
  //     id: 3,
  //     status: true,
  //     img: this.storage + '3.png',
  //     link: 'lm',
  //     name: 'LM Portal',
  //     description: 'Review and Respond to employee applications, allocate shifts and view information and reports for your direct reporting team'
  //   },
  //   {
  //     id: 2,
  //     status: true,
  //     img: this.storage + '11.png',
  //     link: 'hr',
  //     name: 'HR Portal',
  //     description: 'Review and respond to applications, initiate various HR processes and view or manage information and salaries for all employees in the company'
  //   },
  //   {
  //     id: 4,
  //     status: true,
  //     img: this.storage + '37.png',
  //     link: 'ceo',
  //     name: 'CEO Portal',
  //     description: 'View consolidated information and reports for all employees in the organization'
  //   },
  //   {
  //     id: 8,
  //     status: true,
  //     img: this.storage + '16.png',
  //     link: 'admin',
  //     name: 'Admin Portal',
  //     description: 'View and respond to relevant applications and make arrangements for employees going on business travel'
  //   },
  //   {
  //     id: 7,
  //     status: true,
  //     img: this.storage + '33.png',
  //     link: 'finance',
  //     name: 'Finance Portal',
  //     description: 'View payroll related reports and manage disbursements and reimbursements against employee loans and expenses'
  //   },
  //   {
  //     id: 5,
  //     status: true,
  //     img: this.storage + '5.png',
  //     link: 'cr',
  //     name: 'CR Portal',
  //     description: 'Click to login as CR'
  //   },
  //   {
  //     id: 6,
  //     status: true,
  //     img: this.storage + '29.png',
  //     link: 'business-leader',
  //     name: 'Business Leader Portal',
  //     description: 'View interactive reports and statistics pertaining to all employees in your designated group or region'
  //   },
  // ];

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    localStorage.removeItem('link');

    this.headerService.getPortals().subscribe(resp => {
      this.portals = resp;
    });
  }

  setStorage(link: string) {
    localStorage.setItem('link', link);
  }

}
