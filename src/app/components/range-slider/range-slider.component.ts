import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css'],
})
export class RangeSliderComponent implements OnInit {
  
  @Input() range:{min:number,max:number}[];
  
  @Output() changeHandler = new EventEmitter<{range:any}>();

  private currentRange:any;

  constructor() { }

  ngOnInit() {
    
    /* set min range as range default on app initialize */
   this.currentRange = this.range['min'];
  }

  change(event) {
    this.currentRange = event;
    this.changeHandler.emit({
      range:this.currentRange
    });
  }
    



}
