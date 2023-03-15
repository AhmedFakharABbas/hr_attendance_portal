import {Component, OnInit} from '@angular/core';
import {CorrectionStatus} from '../../../shared/interfaces/correction-status';
import {CorrectionApplication} from '../../../shared/interfaces/correction-application';

const STATUS_DATA: CorrectionStatus[] = [
  {month: 'January', corrections: '21', approved: '4', pending: '0', rejected: '8'},
  {month: 'February', corrections: '8', approved: '1.5', pending: '5', rejected: '8'},
  {month: 'March', corrections: '8', approved: '2.25', pending: '0', rejected: '0'},
  {month: 'April', corrections: '15', approved: '0', pending: '0', rejected: '0'},
  {month: 'May', corrections: '-', approved: '0', pending: '0', rejected: '5'},
  {month: 'June', corrections: '-', approved: '1', pending: '5', rejected: '5'},
  {month: 'July', corrections: '-', approved: '0', pending: '5', rejected: '5'},
  {month: 'Auguest', corrections: '8', approved: '5', pending: '0', rejected: '0'},
  {month: 'September', corrections: '8', approved: '0', pending: '0', rejected: '0'},
  {month: 'October', corrections: '15', approved: '8', pending: '0', rejected: '0'},
  {month: 'November', corrections: '8', approved: '0', pending: '2', rejected: '2'},
  {month: 'December', corrections: '8', approved: '0', pending: '2', rejected: '2'},
];

const APPLICATIONS_DATA: CorrectionApplication[] = [
  {dated: '25-Nov-2020', month: 'November 20', correctionDate: '25-Nov-2020', lmStatus: 'Approved', hrStatus: 'Approved'},
  {dated: '25-Nov-2020', month: 'November 20', correctionDate: '25-Nov-2020', lmStatus: 'Approved', hrStatus: 'Approved'},
  {dated: '25-Nov-2020', month: 'November 20', correctionDate: '25-Nov-2020', lmStatus: 'Approved', hrStatus: 'Approved'},
];

@Component({
  selector: 'app-attendace-correction',
  templateUrl: './attendance-emp.component.html',
  styleUrls: ['./attendance-emp.component.css'],
})


export class AttendaceCorrectionComponent implements OnInit {

  statusColumns: string[] = ['month', 'corrections', 'approved', 'pending', 'rejected'];
  statusDataSource = STATUS_DATA;

  correctionAppsColumns: string[] = ['dated', 'month', 'correctionDate', 'lmStatus', 'hrStatus'];
  correctionAppsDataSource = APPLICATIONS_DATA;

  constructor() {
  }

  ngOnInit() {
  }

}
