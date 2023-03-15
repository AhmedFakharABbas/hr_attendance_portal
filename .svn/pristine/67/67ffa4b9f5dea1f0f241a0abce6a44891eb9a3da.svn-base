import { Component, OnInit,Input } from '@angular/core';
import { SlabService } from './slab-dropdown.service';

@Component({
  selector: 'app-slab-dropdown',
  templateUrl: './slab-dropdown.component.html',
  styleUrls: ['./slab-dropdown.component.css']
})
export class SlabDropdownComponent implements OnInit {
@Input ('component') component;
@Input ('index') index;
@Input ('field') field;
@Input ('json') json;

  constructor(private slabstatus: SlabService) { }

  ngOnInit(): void {
  }
  editSlab() {
    this.slabstatus.sendStatus(true,this.index,this.field,this.component)
  }
  deactiveSlab() {
    this.slabstatus.deactiveSlab(this.index,this.field,this.component,this.json)
  }
}
