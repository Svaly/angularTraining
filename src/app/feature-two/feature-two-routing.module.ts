import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureTwoComponent } from './feature-two.component';

const routes: Routes = [
  { path: '', component: FeatureTwoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureTwoRoutingModule { }
