import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProductService } from '../services/product.service';
import { ProviderService } from '../services/provider.service';
import { SubcategoryService } from '../services/subcategory.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  listesubcategory:any;
  listeproviders:any;

  constructor(private formBuilder: FormBuilder,private products:ProductService,private subcategory:SubcategoryService,private provider:ProviderService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      idsubcategory: ['', Validators.required],
      idprovider: ['', Validators.required],
      
  }, {
      
  });
  this.getAllSubcateg()
  this.getAllProviders()
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
    

      this.products.addNewProduct(this.registerForm.value.idprovider,this.registerForm.value.idsubcategory,this.registerForm.value).subscribe((res:any)=>{
        Swal.fire('Product added!')
      console.log("form product",this.registerForm.value)
      });
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

  getAllSubcateg(){
    this.subcategory.getSubcateg().subscribe((res:any)=>{
      this.listesubcategory=res
      console.log('list Subcateg',this.listesubcategory)
   
    });
  }
  getAllProviders(){
    this.provider.getProviders().subscribe((res:any)=>{
      this.listeproviders=res
      console.log('list Provider',this.listeproviders)
   
    });
  }
}
