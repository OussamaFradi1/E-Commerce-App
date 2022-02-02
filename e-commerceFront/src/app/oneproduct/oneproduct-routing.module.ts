import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneproductComponent } from './oneproduct.component';

const routes: Routes = [{ path: '', component: OneproductComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneproductRoutingModule { }
