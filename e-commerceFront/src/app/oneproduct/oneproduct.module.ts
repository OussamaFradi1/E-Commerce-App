import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneproductRoutingModule } from './oneproduct-routing.module';
import { OneproductComponent } from './oneproduct.component';


@NgModule({
  declarations: [
    OneproductComponent
  ],
  imports: [
    CommonModule,
    OneproductRoutingModule
  ]
})
export class OneproductModule { }
