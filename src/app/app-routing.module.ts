import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureOneComponent } from 'app/feature-one/feature-one.component';

const routes: Routes = [
  { path: '', redirectTo: 'feature-one', pathMatch: 'full'},
  { path: 'feature-one', component: FeatureOneComponent },
  { path: 'feature-two', loadChildren: 'app/feature-two/feature-two.module#FeatureTwoModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
