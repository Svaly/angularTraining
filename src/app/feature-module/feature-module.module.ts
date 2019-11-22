import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleRoutingModule } from './feature-module-routing.module';
import { FeatureComponentComponent } from './feature-component/feature-component.component';


@NgModule({
  declarations: [FeatureComponentComponent],
  imports: [
    CommonModule,
    FeatureModuleRoutingModule
  ]
})
export class FeatureModuleModule { }
