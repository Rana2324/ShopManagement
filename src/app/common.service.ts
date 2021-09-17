import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  saveData(products:any[]){
    return this.http.put("https://test-24d4c-default-rtdb.firebaseio.com/products.json",products)

  }
   getData(){
     return this.http.get("https://test-24d4c-default-rtdb.firebaseio.com/products.json")
   }
   saveUserData(user:any[]){
     return this.http.put("https://test-24d4c-default-rtdb.firebaseio.com/user.json",user)
   }
   getUserData(){
     return this.http.get("https://test-24d4c-default-rtdb.firebaseio.com/user.json")
   }

}


