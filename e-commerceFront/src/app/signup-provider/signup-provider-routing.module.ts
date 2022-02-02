import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupProviderComponent } from './signup-provider.component';

const routes: Routes = [{ path: '', component: SignupProviderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupProviderRoutingModule { }
