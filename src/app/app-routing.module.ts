import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncrementalsalesVolumeComponent } from './incrementalsales-volume/incrementalsales-volume.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';


const routes: Routes = [
  { path: 'Product1-component', component: Product1Component },
  { path: 'incremantalsales', component:IncrementalsalesVolumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
