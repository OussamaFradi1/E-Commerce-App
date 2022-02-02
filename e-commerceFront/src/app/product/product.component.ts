import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ProductService } from '../services/product.service';
import { ProviderService } from '../services/provider.service';
import { SubcategoryService } from '../services/subcategory.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  listProducts:any;
  search_name:any;
  p: number = 1;
  nbr:any;
  registerForm: FormGroup;
  closeResult = '';
  listesubcategory:any;
  listeproviders:any;
  
  constructor(private formBuilder: FormBuilder,private products:ProductService,private modalService: NgbModal,private subcategory:SubcategoryService,private provider:ProviderService) { }

  ngOnInit(): void {
    this.getAllProducts()
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
  getAllProducts(){
    this.products.getProducts().subscribe((res:any)=>{
      this.listProducts=res
      console.log('list Products',this.listProducts)
   
    });
  }
  deleteProduct(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.products.deleteProduct(id).subscribe((res:any)=>{
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.getAllProducts()
        })
      }
    })
  }
  open(content:any,product:any) {
    this.registerForm.patchValue({
      id:product.id,
      name:product.name,
      price:product.price,
      description:product.description,
      idsubcategory:product.subcategory.id,
      idprovider:product.provider.id,
    })
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  update(){
    this.products.updateProduct(this.registerForm.value.id,this.registerForm.value.idprovider,this.registerForm.value.idsubcategory,this.registerForm.value).subscribe((res:any)=>{
      console.log("form",this.registerForm.value)
      Swal.fire('product updated!')
      this.getAllProducts()
    })
   
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
