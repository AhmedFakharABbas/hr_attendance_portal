import { Component, Input, OnInit } from '@angular/core';
import { EnquiryTypes } from 'src/app/shared/models/enquiry-types';
import { SharedService } from 'src/app/shared/Service/shared.service';
import { GrievanceService } from '../../../grievance.service';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-conduct-setup-details',
  templateUrl: './conduct-setup-details.component.html',
  styleUrls: ['./conduct-setup-details.component.css']
})
export class ConductSetupDetailsComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<any>();
  @Input() item = '';
enquiriesTableData :Array<EnquiryTypes>;
investigatorsRowSpan:number=1;
  decesionMakersRowSpan: number=1;
  constructor( private grievanceService: GrievanceService,    private sharedService: SharedService) { }

  data={
    type :'ConductEnquries',

  }
  type ;
   typeA='iOfficer';
   typeB='Head/OD';
   typeC='recomendation'

  ngOnInit(): void {
    this.enquiriesTableData = new Array<EnquiryTypes>();
    this.getEnquiryTypes()
    this.type=this.typeC;

  }
  ngOnChanges(changes: any):void{
    if(changes.item.currentValue!=undefined){
      this.enquiriesTableData = new Array<EnquiryTypes>();
      this.getEnquiryTypes();
    }
  }
  getEnquiryTypes(){
    this.grievanceService.getData('https://urchoice.live/people/api/grievance/enquiry-types').subscribe({
      next: (res: any) => {
        if (res.status == 200) {
         this.enquiriesTableData=res.data;
        this.insertDumyObjects();
        }
      },
      error: (error) => {
        this.sharedService.erroMessage("Sorry something went wrong");
      },
    });
  }
  addNewItem(value:any){
    this.newItemEvent.emit(value)
  }
  insertDumyObjects(){
  let maximumInvestigator=Math.max(...Object.values(this.enquiriesTableData).map(o => o.investigators.length));
  let maximumDecesionMaker=Math.max(...Object.values(this.enquiriesTableData).map(o => o.decision_makers.length));
  //   let maximumInvestigator:number;
  for(let i =0; i < this.enquiriesTableData.length; i++){
    //if investigatores are less then then the maximum investigators
    if(this.enquiriesTableData[i].investigators.length<maximumInvestigator){
      for(let k = 0; k <= (maximumInvestigator-this.enquiriesTableData[i].investigators.length); k++){
             let obj:any={employee:{name:null }, isdumyData:true}
             this.enquiriesTableData[i].investigators.push(obj)
              }
          }
    //if decesion Maker are less then then the maximum decesion makers'
    if(this.enquiriesTableData[i].decision_makers.length<maximumDecesionMaker){
      for(let j = 0; j <= (maximumDecesionMaker-this.enquiriesTableData[i].decision_makers.length); j++){
        let obj:any={employee:{name:null},isdumyData:true};
        this.enquiriesTableData[i].decision_makers.push(obj);
      }
    }

  }
  // find maximum
  this.investigatorsRowSpan =this.enquiriesTableData[0].investigators.length
  this.decesionMakersRowSpan =this.enquiriesTableData[0].decision_makers.length
}
}
