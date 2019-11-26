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
  @Input() public allowedValues: RadioButtonItem[];
  @Input() public value: string | number | boolean;
  @Input() public disabled: boolean;
  @Output() public onClick: EventEmitter<string | number | boolean>;

  private changeDetector: ChangeDetectorRef;
  public currentValuesToDisplay: Array<RadioButtonItem>;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    elementRef: ElementRef) {
    // Wyłącza automatyczne odświeżanie zmian na widoku
    elementRef.nativeElement.changeDetection = ChangeDetectionStrategy.OnPush;
    super(elementRef.nativeElement);

    this.changeDetector = changeDetectorRef;
    this.onClick = new EventEmitter<string | number | boolean>();
    this.disabled = false;
  }

  public ngOnInit(): void {
    // Wyłącza automatyczne odświeżanie zmian na widoku
    this.detachChangeDetector();

    // Jeżeli pojawi się inincjalna wartośc to wyświetla tylko te statusy na które można przełączyć z inicjalnego
    if (this.value) {
      this.currentValuesToDisplay = this.getAllowedValuesToDisplay(this.value);
      this.detectChanges();
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {

     // jeżeli zmianiła się wartość statusu w nadrzędnym komponencie to zmień wyświetlane przyciski zgodnie z grafem
    if (changes.value && changes.value.currentValue !== null && changes.value.currentValue !== undefined) {
      this.currentValuesToDisplay = this.getAllowedValuesToDisplay(this.value);
    }

     // odśwież widok
    this.detectChanges();
  }

  public clicked(selectedItem: RadioButtonItem): void {
    if (this.value === selectedItem.value) {
      return;
    }

     // jeżeli użytkownik kliknał przycisk inny niz aktywny (zmienił wartość) opublikuj do komponentu nadrzędnego klikniętą wartość
    this.onClick.next(selectedItem.value);
  }

  private getAllowedValuesToDisplay(value: string | number | boolean): Array<RadioButtonItem> {
    // Pobiera z grafu dozwolone wartości przejść
    const allowedTransitions = this.allowedValuesTransitions.getAllowedTransitions(value);

    // Mapuje wartości na typ RadioButtonItem i sortuje alfabetycznie
    return this.allowedValues.filter(c => allowedTransitions.includes(c.value)).sort((a, b) => (a.value > b.value) ? 1 : -1);
  }

  // Wyłącza automatyczne odświeżanie zmian na widoku
  private detachChangeDetector(): void {
    this.changeDetector.detach();
    this.detectChanges();
  }

  // Manualne odświeża zmiany na widoku
  private detectChanges(): void {
    if (!this.changeDetector['destroyed']) {
      this.changeDetector.detectChanges();
    }
  }
}
