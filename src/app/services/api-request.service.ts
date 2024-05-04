import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http:HttpClient) { }
  Product:any;
  getProductList(){
    return this.http.get('https://dummyjson.com/products')
  }
}
