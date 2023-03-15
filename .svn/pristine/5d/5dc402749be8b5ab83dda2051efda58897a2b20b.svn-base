import { Component, OnInit, ViewChild, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { CommonService } from 'src/app/services/common.service';
import { LeaveDetailService } from 'src/app/services/leave-detail.service';

@Component({
  selector: 'app-shared-datatable',
  templateUrl: './shared-datatable.component.html',
  styleUrls: ['./shared-datatable.component.css']
})
export class SharedDatatableComponent implements OnInit, AfterViewInit {

  @Input('columnHeader') columnHeader: string[];
  @Input('data') data = new BehaviorSubject([]);
  @Input('case') case;

  @Output('resubmit') resubmit = new EventEmitter();
  @Output('getApprovalQueue') getApprovalQueue = new EventEmitter();
  @Output('filterList') filterList = new EventEmitter();

  datatable = new MatTableDataSource();
  displayedColumns: string[] = [];
  columns = [];

  @ViewChild(MatSort, { static: true }) listDataSourceSort: MatSort;

  constructor(
    private commonService: CommonService,
    public leaveDetailService: LeaveDetailService
  ) { }

  ngOnInit(): void {
    this.initDataAndHeaders();
  }

  initDataAndHeaders() {
    this.data.subscribe((data) => {
      this.datatable = new MatTableDataSource(data);
    });
    if (this.case == 'camelcase') {
      this.columns = this.createMatColumnsCamelCase(this.columnHeader);
      this.displayedColumns = this.columns.map(c => c.columnDef);
    }
    else {
      this.columns = this.createMatColumns(this.columnHeader);
      this.displayedColumns = this.columns.map(c => c.columnDef);
    }
  }

  ngAfterViewInit() {
    this.datatable.sort = this.listDataSourceSort;
  }

  checkDataType(data: any): boolean {
    if (data)
      if (data.hasOwnProperty('value'))
        return true;
    return false;
  }

  checkDataLink(data: any): boolean {
    if (data)
      if (data.hasOwnProperty('link'))
        return true;
    return false;
  }

  checkDataResubmit(data: any): boolean {
    if (data)
      if (data.hasOwnProperty('resubmit'))
        return true;
    return false;
  }

  createMatColumns(rawHeader: Array<any>): Array<object> {
    let header = [];
    rawHeader.forEach(map => {
      let cleanString = map.replace(/ /g, "_").replace(/-/g, "_").toLowerCase();
      header.push(
        { columnDef: cleanString, header: map, cell: (element: any) => `${element[cleanString]}` }
      );
    });
    return header;
  }

  createMatColumnsCamelCase(rawHeader: Array<any>): Array<object> {
    let header = [];
    rawHeader.forEach(map => {
      let cleanString = map.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, '');
      header.push(
        { columnDef: cleanString, header: map, cell: (element: any) => `${element[cleanString]}` }
      );
    });
    return header;
  }

  showDetail(data) {
    this.filterList.next(data);
  }

  openModalWithData(app_id) {
    this.getApprovalQueue.emit(app_id);
  }

  bindForm(app_id) {
    this.resubmit.next(app_id);
  }

  // ===================== Selection checkbox

  selection = new SelectionModel(true, []);
  public endorsementIds: string[] = [];
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.datatable.data.length;
    return numSelected === numRows;
  }

  toggle(event, row) {
    let id = row.name.id;

    if (event.checked) {
      if (this.endorsementIds.indexOf(id) === -1) {
        this.endorsementIds.push(id);
        this.selection.select(row);
      }

    } else {
      const index = this.endorsementIds.indexOf(id);
      if (index > -1) {
        this.endorsementIds.splice(index, 1);
        this.selection.deselect(row);
      }
    }
    this.commonService.applicationID.next(this.endorsementIds);
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.datatable.data.forEach(row => {
        this.selection.select(row)
      });

    this.endorsementIds = [];
    this.datatable.data.forEach((row: any) => {
      if (this.selection.isSelected(row)) {
        this.endorsementIds.push(row.name.id);
      }
    });
    this.commonService.applicationID.next(this.endorsementIds);
  }

}
