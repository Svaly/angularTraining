import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusFlowRadioButtonComponent } from './status-flow-radio-button.component';
import { RadioButtonItem } from './radio-button-item';
import { RadioButtonAllowedValuesTransitionsGraph } from './radio-button-allowed-values-transitions-graph';

describe('StatusFlowRadioButtonComponent', () => {
  let component: StatusFlowRadioButtonComponent;
  let fixture: ComponentFixture<StatusFlowRadioButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusFlowRadioButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusFlowRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
