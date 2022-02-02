import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-oneproduct',
  templateUrl: './oneproduct.component.html',
  styleUrls: ['./oneproduct.component.css']
})
export class OneproductComponent implements OnInit {
id= this.activeroute.snapshot.params['id']
product:any;
  constructor(private activeroute:ActivatedRoute,private products:ProductService) { }

  ngOnInit(): void {
    this.getOneProducts();
  }
  getOneProducts(){
    this.products.getOneProduct(this.id).subscribe((res:any)=>{
      this.product=res
      console.log('One Product',this.product)
   
    });
  }
}
