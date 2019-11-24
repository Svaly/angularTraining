import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureOneComponent } from './feature-one.component';
import { SharedControlsModule } from '../shared-controls/shared-controls.module';

@NgModule({
  declarations: [
    FeatureOneComponent,
  ],
  imports: [
    CommonModule,
    SharedControlsModule,
  ]
})
export class FeatureOneModule { }
