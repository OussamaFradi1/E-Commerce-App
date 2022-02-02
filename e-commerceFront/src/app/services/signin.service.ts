import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http:HttpClient) { }
  loginUser(requestlogin:any){
    return this.http.post(`${environment.baseUrl}/users/login`,requestlogin);
  }
}
