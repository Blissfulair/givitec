import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { TransactionService } from 'src/app/transaction.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-jamb',
  templateUrl: './jamb.component.html',
  styleUrls: ['./jamb.component.scss']
})
export class JambComponent implements OnInit {
  form;
  f;


pay = false;
submit = true;
status = false;
email:string;
phone:string;
name:string;
total:number
saved = false;
  selectedDisplay ='';
  details = true;
  messages = false;
  paystack = false;
  button = true;
  amount:number = 4700;
  key = this.trans.key;
  transactionRef:string;
  constructor(private _service: ServiceService, private trans: TransactionService) { }

  ngOnInit() {
    this.form = this._service.form;
    this.f = this.trans.form;

  }
    //To save purchase service details
    sendTransaction(){
      const form = {
        'amount':this.amount, 
        'service': 1, 
        'package': 1,
        'name': this.name,
        'email':this.email,
        'phone': this.phone,
        'additionals': ''
      }
      this.trans.makeTransaction(form).subscribe((data)=>{
        this.transactionRef = data['transaction']['ref'];
        this.amount *=100;
        this.paystack = true;
      })
    }
  //After Payment has been completed
  paymentDone(e){
    this.messages = true;
    this.button = false;
    this.paystack= true;
    this.saved = false;


    const body = {
      'status':e.status,
      'givitec_ref': e.reference,
      'paystack_ref':e.trans,
      'message':e.message
    };
    this.trans.savePaystack(body).subscribe(data=>{
        this.submit = true;
        this.pay = false;
      });
      this.messages = true;
      this.paystack = false;
     
  }
  onSubmit(){
    this.status = true;
    this._service.saveRegistrationData(this.form.value).subscribe((data)=>{
      this.name = data['name'];
      this.email = data['email'];
      this.phone = data['phone'];
      this.sendTransaction();
        this.pay = true;
      of('').pipe(delay(1000 )).subscribe(s => { 
        this.status= false;
        this.saved = true;
        this.submit = false;
        this.form.reset();
       });

    })
    
  }
  paymentCancel(){
    console.log('cancelled')
  }
}
