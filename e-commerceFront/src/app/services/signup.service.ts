import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }
  registerAdmin(admin:any){
    return this.http.post(`${environment.baseUrl}/users/admins/register`,admin);
  }
  registerClient(client:any){
    return this.http.post(`${environment.baseUrl}/users/client/register`,client);
  }
  registerProvider(provider:any){
    return this.http.post(`${environment.baseUrl}/users/providers/register`,provider);
  }
}
