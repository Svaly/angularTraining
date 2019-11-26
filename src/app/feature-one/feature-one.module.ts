import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureOneComponent } from './feature-one.component';
import { SharedControlsModule } from '../shared-controls/shared-controls.module';
import { FeatureOneDocumentService } from './feature-one-document.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FeatureOneComponent,
  ],
  imports: [
    CommonModule,
    SharedControlsModule,
    HttpClientModule,
  ],
  providers: [
    FeatureOneDocumentService
  ]
})
export class FeatureOneModule { }
