import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureOneComponent } from './feature-one.component';
import { StatusFlowRadioButtonComponent } from 'app/shared-controls/status-flow-radio-button/status-flow-radio-button.component';
import { FeatureOneDocumentService } from './feature-one-document.service';
import { HttpClientModule } from '@angular/common/http';

describe('FeatureOneComponent', () => {
  let component: FeatureOneComponent;
  let fixture: ComponentFixture<FeatureOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureOneComponent, StatusFlowRadioButtonComponent],
      providers: [ FeatureOneDocumentService ],
      imports: [ HttpClientModule ],
    }).compileComponents();

    TestBed.get(FeatureOneDocumentService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
