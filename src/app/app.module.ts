import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureOneModule } from './feature-one/feature-one.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureOneModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
