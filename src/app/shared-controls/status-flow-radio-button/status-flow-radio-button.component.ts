import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status-flow-radio-button',
  templateUrl: './status-flow-radio-button.component.html',
  styleUrls: ['./status-flow-radio-button.component.scss']
})
export class StatusFlowRadioButtonComponent implements OnInit {

    @Input() public allowedValuesTransitions: any;
    @Input() public values: any[];
    @Input() public value: string | number | boolean;
    @Input() public disabled: boolean;

    @Output() public onClick: EventEmitter<string | number | boolean>;

  constructor() {
      this.onClick = new EventEmitter<string | number | boolean>();
  }

  ngOnInit() {
  }

}
