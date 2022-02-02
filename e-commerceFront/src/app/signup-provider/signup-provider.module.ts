import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupProviderRoutingModule } from './signup-provider-routing.module';
import { SignupProviderComponent } from './signup-provider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignupProviderComponent
  ],
  imports: [
    CommonModule,
    SignupProviderRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SignupProviderModule { }
