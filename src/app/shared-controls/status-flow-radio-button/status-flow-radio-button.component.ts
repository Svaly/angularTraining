import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { RadioButtonAllowedTransitionsGraph } from './radio-button-allowed-transitions-graph';
import { RadioButtonItem } from './radio-button-item';

@Component({
  selector: 'app-status-flow-radio-button',
  templateUrl: './status-flow-radio-button.component.html',
  styleUrls: ['./status-flow-radio-button.component.scss']
})
export class StatusFlowRadioButtonComponent implements OnInit, OnChanges {

  @Input() public transitions: RadioButtonAllowedTransitionsGraph;
  @Input() public values: Array<RadioButtonItem>;
  @Input() public value: string | number | boolean;
  @Output() public onClick: EventEmitter<string | number | boolean>;

  public currentValues: Array<RadioButtonItem>;

  constructor() {
    this.onClick = new EventEmitter<string | number | boolean>();
  }

  ngOnInit() {
    console.log(this.transitions);
    console.log(this.values);

    if (this.value) {
      this.currentValues = this.getAllowedStatuses(this.value);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value &&
      changes.value !== null &&
      changes.value !== undefined) {
      this.currentValues = this.getAllowedStatuses(this.value);
    }

  }

  public clicked(item: RadioButtonItem): void {
    this.onClick.next(item.value);
  }

  private getAllowedStatuses(value: string | number | boolean)
    : Array<RadioButtonItem> {
    const statuses = this.transitions.getAllowedValueTransition(value);
    return this.values
      .filter(c => statuses.includes(c.value));
  }

}


