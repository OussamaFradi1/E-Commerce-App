import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule) },
  { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },

  {path:'home',canActivate:[AuthGuard],component:HomeComponent, children:[
    {path:'',component:LayoutComponent},
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },

  { path: 'oneproduct/:id', loadChildren: () => import('./oneproduct/oneproduct.module').then(m => m.OneproductModule) },
  { path: 'addproduct', loadChildren: () => import('./addproduct/addproduct.module').then(m => m.AddproductModule) },
  { path: 'profile', loadChildren: () => import('./profileuser/profileuser.module').then(m => m.ProfileuserModule) },
  { path: 'addCateg', loadChildren: () => import('./add-category/add-category.module').then(m => m.AddCategoryModule) },

  
]},
  { path: 'signupClient', loadChildren: () => import('./signup-client/signup-client.module').then(m => m.SignupClientModule) },
  { path: 'signupProvider', loadChildren: () => import('./signup-provider/signup-provider.module').then(m => m.SignupProviderModule) },
  { path: 'Categ', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
  
 
  
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
