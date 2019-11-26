import { Component, OnInit } from '@angular/core';
import { RadioButtonAllowedTransitionsGraph } from 'app/shared-controls/status-flow-radio-button/radio-button-allowed-transitions-graph';
import { RadioButtonItem } from 'app/shared-controls/status-flow-radio-button/radio-button-item';

@Component({
  selector: 'app-feature-one',
  templateUrl: './feature-one.component.html',
  styleUrls: ['./feature-one.component.scss']
})
export class FeatureOneComponent implements OnInit {

  public transitions = new RadioButtonAllowedTransitionsGraph(
    [
      { from: 'pending', to: 'approved' },
      { from: 'approved', to: 'archived' },
      { from: 'archived', to: 'cancelled' },
    ]);

  public values = [
    new RadioButtonItem('pending', 'Pending Approval'),
    new RadioButtonItem('approved', 'Approved'),
    new RadioButtonItem('cancelled', 'Cancelled'),
    new RadioButtonItem('archived', 'Archived')
  ];

public currentStatus: string | number | boolean;

  constructor() {
    this.currentStatus = 'pending';
  }

  ngOnInit() {
  }

  public statusChanged(event: string | number | boolean) {
    this.currentStatus = event;
    console.log(event);
  }
}
