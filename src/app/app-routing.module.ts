import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureOneComponent } from './feature-one/feature-one.component';


const routes: Routes = [
  { path: '', redirectTo: 'feature-one', pathMatch: 'full'},
  { path: 'feature-one', component: FeatureOneComponent },
  //{ path: '**', component: FeatureOneComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
