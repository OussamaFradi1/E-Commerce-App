import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { RecherchePipe } from '../pipes/recherche.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    ProductComponent,
    RecherchePipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
