import { RankingService } from '../../service/ranking.service';
import { Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-selection-pill',
  templateUrl: './selection-pill.component.html',
  styleUrls: ['./selection-pill.component.css']
})
export class SelectionPillComponent implements OnInit {
  @Input() data;

  @Output() changeHandler = new EventEmitter<{rate:number}>();

  constructor(private element:ElementRef) {
    
   }
  
  ngOnInit() {
    console.log("Pill Data",this.data);  

}
  
  select(value:number) {
    console.log("Pill Rate",value);
    this.changeHandler.emit({
      rate: value,
    })
  }


}
