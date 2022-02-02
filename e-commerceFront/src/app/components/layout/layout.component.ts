import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
listProducts:any;
  constructor(private products:ProductService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }
  getAllProducts(){
    this.products.getProducts().subscribe((res:any)=>{
      this.listProducts=res
      console.log('list Products',this.listProducts)
      console.log("nbre of product",this.listProducts.length)
   
    });
  }

}
