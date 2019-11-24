import { Component, Input, EventEmitter, Output, ChangeDetectorRef, ElementRef, OnChanges, SimpleChanges, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RadioButtonAllowedValuesTransitions } from './radio-button-values-transitions-directed-graph';
import { RadioButtonItem } from "./radio-button-item";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-status-flow-radio-button',
  templateUrl: './status-flow-radio-button.component.html',
  styleUrls: ['./status-flow-radio-button.component.scss']
})
export class StatusFlowRadioButtonComponent extends Component implements OnChanges, OnInit, OnDestroy {
  @Input() allowedValuesTransitions: RadioButtonAllowedValuesTransitions;
  @Input() values: RadioButtonItem[];
  @Input() value: string | number | boolean;
  @Input() disabled: boolean;
  @Output() onClick: EventEmitter<string | number | boolean>;
  public allowedValues: Array<RadioButtonItem>;
  protected unsubscribe: Subject<void>;
  protected changeDetector: ChangeDetectorRef;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    elementRef: ElementRef) {
    elementRef.nativeElement.changeDetection = ChangeDetectionStrategy.OnPush;
    super(elementRef.nativeElement);

    this.changeDetector = changeDetectorRef;
    this.unsubscribe = new Subject<void>();
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

  public ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
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