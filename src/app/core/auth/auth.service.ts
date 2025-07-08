import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 

  constructor(private http: HttpClient) { }


  login(reqData: any){
    return  this.http.post('http://localhost:5000/api/v1/user/login', reqData)
  }

}
