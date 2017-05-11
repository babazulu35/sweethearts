import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-selection-radio',
  templateUrl: './selection-radio.component.html',
  styleUrls: ['./selection-radio.component.css']
})
export class SelectionRadioComponent implements OnInit {
  
  @Input() data:Array<Object>;

  @Output() changeHandler = new EventEmitter<{rate:number}>();

  constructor() { }

  ngOnInit() {
  }
  select(value:number){
    this.changeHandler.emit({
      rate:value
    })
  }

}
