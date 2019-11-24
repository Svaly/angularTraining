import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureTwoRoutingModule } from './feature-two-routing.module';
import { FeatureTwoComponent } from './feature-two.component';

@NgModule({
  declarations: [
    FeatureTwoComponent,
  ],
  imports: [
    CommonModule,
    FeatureTwoRoutingModule
  ]
})
export class FeatureTwoModule { }
