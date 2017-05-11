import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selection-selectbox',
  templateUrl: './selection-selectbox.component.html',
  styleUrls: ['./selection-selectbox.component.css']
})
export class SelectionSelectboxComponent implements OnInit {
  @Input() data:Array<Object>;

  @Output() changeHandler = new EventEmitter<{rate:number}>();

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

  onChange(event) {
    this.changeHandler.emit({
      rate: Number(event)
    })
  }

}
