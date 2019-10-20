import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  form: FormGroup;
  request: FormGroup;
  key = 'pk_test_4853e4d2022c36817f61914bc9e00117714d8e1a';
  
  constructor(private http:HttpClient, private fb : FormBuilder) { 
    this.form = this.fb.group({
      name:[''],
      email:[''],
      amount:[''],
      package:[''],
      service:[''],
      additionals:[null],
      phone:[''],
      add:['']
    });
  }
  makeTransaction(body){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post('http://127.0.0.1:8000/api/transaction', body,{headers: headers})
  }
  savePaystack(data){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post('http://127.0.0.1:8000/api/paystack/transaction',data, {headers:headers});
  }
  savePaystackRegistration(data){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post('http://127.0.0.1:8000/api/paystack/registration',data, {headers:headers});
  }
}
