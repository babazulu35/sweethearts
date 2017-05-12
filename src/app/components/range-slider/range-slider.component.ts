import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css'],
})
export class RangeSliderComponent implements OnInit,AfterViewInit {
  
  @Input() data;
  
  @Output() changeHandler = new EventEmitter<{range:any}>();

  @Input() currentRange:any;

  constructor() { }

  ngOnInit() {
    
    /* set min range as range default on app initialize */
    this.currentRange = this.data.range.min;
  
  }
  
  ngAfterViewInit() {

  }

  change(event) {
    this.currentRange = event;
    this.changeHandler.emit({
      range:this.currentRange
    });
  }
    



}
