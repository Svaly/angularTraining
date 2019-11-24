import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectorRef, ElementRef, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { RadioButtonAllowedValuesTransitionsGraph } from './radio-button-allowed-values-transitions-graph';
import { RadioButtonItem } from './radio-button-item';

@Component({
  selector: 'app-status-flow-radio-button',
  templateUrl: './status-flow-radio-button.component.html',
  styleUrls: ['./status-flow-radio-button.component.scss']
})
export class StatusFlowRadioButtonComponent extends Component implements OnChanges, OnInit {

  @Input() public allowedValuesTransitions: RadioButtonAllowedValuesTransitionsGraph;
  @Input() public values: RadioButtonItem[];
  @Input() public value: string | number | boolean;
  @Input() public disabled: boolean;
  @Output() public onClick: EventEmitter<string | number | boolean>;

  private changeDetector: ChangeDetectorRef;
  public allowedValues: Array<RadioButtonItem>;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    elementRef: ElementRef) {
    elementRef.nativeElement.changeDetection = ChangeDetectionStrategy.OnPush;
    super(elementRef.nativeElement);

    this.changeDetector = changeDetectorRef;
    this.onClick = new EventEmitter<string | number | boolean>();
    this.disabled = false;
  }

  public ngOnInit(): void {
    this.detachChangeDetector();

    if (this.value) {
      this.allowedValues = this.getAllowedStatuses(this.value);
      this.detectChanges();
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.value && changes.value.currentValue !== null && changes.value.currentValue !== undefined) {
      this.allowedValues = this.getAllowedStatuses(this.value);
    }

    this.detectChanges();
  }

  public clicked(selectedItem: RadioButtonItem): void {
    if (this.value === selectedItem.value) {
      return;
    }
    this.onClick.next(selectedItem.value);
  }

  private getAllowedStatuses(value: string | number | boolean): Array<RadioButtonItem> {
    const allowedTransitions = this.allowedValuesTransitions.getAllowedTransitions(value);
    return this.values.filter(c => allowedTransitions.includes(c.value)).sort((a, b) => (a.value > b.value) ? 1 : -1);
  }

  private detachChangeDetector(): void {
    this.changeDetector.detach();
    this.detectChanges();
  }

  private detectChanges(): void {
    if (!this.changeDetector['destroyed']) {
      this.changeDetector.detectChanges();
    }
  }
}
