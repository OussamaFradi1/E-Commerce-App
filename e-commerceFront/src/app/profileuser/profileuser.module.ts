import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileuserRoutingModule } from './profileuser-routing.module';
import { ProfileuserComponent } from './profileuser.component';


@NgModule({
  declarations: [
    ProfileuserComponent,
  ],
  imports: [
    CommonModule,
    ProfileuserRoutingModule
  ]
})
export class ProfileuserModule { }
