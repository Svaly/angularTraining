import { Component } from '@angular/core';
import { Status } from './status.enum';
import { RadioButtonItem } from 'app/shared-controls/status-flow-radio-button/radio-button-item';
import { FeatureOneDocumentService } from './feature-one-document.service';
import { RadioButtonAllowedValuesTransitionsGraph } from 'app/shared-controls/status-flow-radio-button/radio-button-allowed-values-transitions-graph';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-feature-one',
  templateUrl: './feature-one.component.html',
  styleUrls: ['./feature-one.component.scss']
})
export class FeatureOneComponent {

  public valueOfStatus: string | number | boolean = Status.Approved;

  constructor(private featureOneDocumentService: FeatureOneDocumentService) {
    this.valueOfStatus = Status.Approved;
  }

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

  public changeStatus(newStatus: number): void {
    console.log(newStatus);

    this.featureOneDocumentService.changeDocumentStatus('id', newStatus)
      .pipe(first())
      .subscribe(
        (success) => {  this.valueOfStatus = newStatus; },
        (error) => { },
      );
  }


}
