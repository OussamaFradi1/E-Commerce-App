import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupClientRoutingModule } from './signup-client-routing.module';
import { SignupClientComponent } from './signup-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignupClientComponent
  ],
  imports: [
    CommonModule,
    SignupClientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SignupClientModule { }
