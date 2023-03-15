import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { FormBuilder, FormGroup,FormArray } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-shared-datatable',
  templateUrl: './shared-datatable.component.html',
  styleUrls: ['./shared-datatable.component.css']
})
export class SharedDatatableComponent implements OnInit {
  @Input ('columnHeader') columnHeader;
  @Input ('colValues') colValues;
  @Input ('data') data;
  // displayedColumns: string[] = ['Sr#','Year', 'Contributor', 'Start Slab Range', 'End Slab Range', 'Fixed Amount', 'Tax Rate', 'WEF'];
  // colValues= [{name:'Sr#',value:'sr'},{name:'Year',value:'year'},{name:'Contributor',value:'contributor'},{name:'Start Slab Range',value:'start'},
  // {name:'End Slab Range',value:'end'},{name:'Fixed Amount',value:'fixed'},{name:'Tax Rate',value:'tax'},{name:'WEF',value:'wef'}];
  // insurance = [
  //   {sr:1,year:"July'19 to June'20", contributor: 'Employee',  start: '0', end: '600000', fixed: '0',tax:'0',wef:'2010-01-01' },
  //   {sr:2,year:"July'18 to June'19", contributor: 'Employee',  start: '0', end: '400000', fixed: '0',tax:'0',wef:'2010-01-06' },
  // ];
  datatable;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.datatable = new MatTableDataSource(this.data);

  }

}
