import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaceService {

  constructor(private http:HttpClient) { }

  // login
  userData(email:any,password:any){
  const  data ={
    "email":email,"password":password
  }
    console.log(data);
                            
    return this.http.post('https://hmaapi.kilobytetech.com/auth/login',data);
  }

  // data
  getUsers():Observable<any>{
    return this.http.get('https://hmaapi.kilobytetech.com/users?pageNo=1&size=20');
  }
}
