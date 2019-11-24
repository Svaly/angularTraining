import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusFlowRadioButtonComponent } from './status-flow-radio-button/status-flow-radio-button.component';

@NgModule({
  declarations: [
    StatusFlowRadioButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusFlowRadioButtonComponent,
  ]
})
export class SharedControlsModule { }
