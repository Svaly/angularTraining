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
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.detectChanges();
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
