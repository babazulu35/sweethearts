import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() value:string;

  @Input() isDisabled:boolean = false;

  @Input() theme:string = 'primary';
  constructor() { }

  ngOnInit() {
  }

}
