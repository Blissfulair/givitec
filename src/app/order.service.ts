import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }
  makeOrder(body){
    return this.http.post('https://www.givitec.com/app/api/order', body);
  }
}
