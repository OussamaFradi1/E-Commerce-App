import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get(`${environment.baseUrl}/users/product/all`);
  }
  addProduct(Product:any){
    return this.http.post(`${environment.baseUrl}/users/product/save`,Product)
  }
  addNewProduct(idprovider:any,idsubcateg:any,Product:any){
    return this.http.post(`${environment.baseUrl}/users/product/save1/${idprovider}/${idsubcateg}`,Product)
  }
  deleteProduct(id:any){
    return this.http.delete(`${environment.baseUrl}/users/product/delete/${id}`);

  }
  updateProduct(id:any,idprovider:any,idsubcateg:any,Product:any){
    return this.http.put(`${environment.baseUrl}/users/product/update/${id}/${idprovider}/${idsubcateg}`,Product);

  }
  getOneProduct(id:any){
    return this.http.get(`${environment.baseUrl}/users/product/GetOne/${id}`);
  }
}
