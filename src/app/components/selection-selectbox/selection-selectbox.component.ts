import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selection-selectbox',
  templateUrl: './selection-selectbox.component.html',
  styleUrls: ['./selection-selectbox.component.css']
})
export class SelectionSelectboxComponent implements OnInit {
  
  @Input() data;

  @Output() changeHandler = new EventEmitter<{rate:number}>();

  constructor() { }

  ngOnInit() {
  }

  onChange(event) {
    this.changeHandler.emit({
      rate: Number(event)
    })
  }

}
