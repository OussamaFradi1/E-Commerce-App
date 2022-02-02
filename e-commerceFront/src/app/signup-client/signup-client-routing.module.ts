import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupClientComponent } from './signup-client.component';

const routes: Routes = [{ path: '', component: SignupClientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupClientRoutingModule { }
