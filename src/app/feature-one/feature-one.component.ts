import { Component, OnInit } from '@angular/core';
import { Status } from './status.enum';
import { RadioButtonItem } from 'app/shared-controls/status-flow-radio-button/radio-button-item';
import { RadioButtonAllowedValuesTransitionsGraph } from 'app/shared-controls/status-flow-radio-button/radio-button-allowed-values-transitions-graph';

@Component({
  selector: 'app-feature-one',
  templateUrl: './feature-one.component.html',
  styleUrls: ['./feature-one.component.scss']
})
export class FeatureOneComponent {

  public initialValue: string | number | boolean = Status.Approved;

  public statuses: Array<RadioButtonItem> = [
    new RadioButtonItem('Approved', Status.Approved),
    new RadioButtonItem('Pending Approval', Status.PendingApproval),
    new RadioButtonItem('Active', Status.Active),
    new RadioButtonItem('OnHold', Status.OnHold),
    new RadioButtonItem('Archived', Status.Archived),
    new RadioButtonItem('Cancelled', Status.Cancelled),
    new RadioButtonItem('Rejected', Status.Rejected),
  ];

  public statusesTransitions: RadioButtonAllowedValuesTransitionsGraph = new RadioButtonAllowedValuesTransitionsGraph([
    { from: Status.PendingApproval, to: Status.Approved },
    { from: Status.PendingApproval, to: Status.Cancelled },
    { from: Status.PendingApproval, to: Status.Archived },
    { from: Status.Approved, to: Status.PendingApproval },
    { from: Status.Approved, to: Status.Cancelled },
    { from: Status.Approved, to: Status.Archived },
    { from: Status.Rejected, to: Status.Archived },
    { from: Status.Rejected, to: Status.Cancelled },
    { from: Status.Rejected, to: Status.PendingApproval },
    { from: Status.Cancelled, to: Status.PendingApproval },
    { from: Status.Archived, to: Status.PendingApproval },
  ]);

  public changeChargingDetailsStatus(status: string | number | boolean): void {
    console.log(status);
    this.initialValue = status;
  }
}
