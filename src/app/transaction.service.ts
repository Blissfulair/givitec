import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  form: FormGroup;
  request: FormGroup;
  key = 'pk_live_04640accafed60dacf9e151f08c369316a7156fa';
  
  constructor(private http:HttpClient, private fb : FormBuilder) { 
    this.form = this.fb.group({
      name:['', Validators.required],
      email:['',  Validators.email],
      amount:[''],
      package:[''],
      service:[''],
      additionals:[null],
      phone:['', Validators.pattern('^[0]+[7-9]+[0-1]+[0-9]{8}')],
      add:['']
    });
  }
  makeTransaction(body){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post('https://www.givitec.com/app/api/transaction', body,{headers: headers})
  }
  savePaystack(data){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post('https://www.givitec.com/app/api/paystack/transaction',data, {headers:headers});
  }
  savePaystackRegistration(data){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post('https://www.givitec.com/app/api/paystack/registration',data, {headers:headers});
  }
}
