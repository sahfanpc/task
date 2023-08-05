import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DatabaceService {

  constructor(private http:HttpClient) { }

  getOptions(){
    const token = localStorage.getItem('currenttoken')
    let headers = new HttpHeaders()
    if(token){
      headers = headers.append('Authorization',token)
      options.headers = headers
    }
    return options
  }

  // login
  userData(email:any,password:any){
  const  data ={
    "email":email,"password":password
  }
    console.log(data);
                            
    return this.http.post('https://hmaapi.kilobytetech.com/auth/login',data);
  }

  // data
  getUsers(pageNum:any,pageSize:any){
    pageNum = pageNum == 0 ? 1 : pageNum == 1 ? 2 : 1;    

    const apiUrl = `https://hmaapi.kilobytetech.com/users?pageNo=${pageNum}&size=${pageSize}`;
// const authToken = localStorage.getItem('currenttoken');
// console.log(authToken);

// const headers = new HttpHeaders({
//   Authorization: `Bearer ${authToken}`,
// });
return this.http.get(apiUrl,this.getOptions())
    // return this.http.get('https://hmaapi.kilobytetech.com/users?pageNo=1&size=20');
  }

  Documentdata(data:any){
    console.log(data,"s");
    
  return this.http.get<any>(`https://hmaapi.kilobytetech.com/documents?clientID=${data}&financialYear=2020-2021`,this.getOptions())
  }
}
