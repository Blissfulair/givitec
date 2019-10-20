import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { TransactionService } from 'src/app/transaction.service';

@Component({
  selector: 'app-jamb',
  templateUrl: './jamb.component.html',
  styleUrls: ['./jamb.component.scss']
})
export class JambComponent implements OnInit {
  form;
  reg_no:string
  lastname:string
  firstname:string
  middle_name:string
  dob:Date
  lga:string
  state:string
  home_town:string
  address:string
  email:string
  phone:string
  password:string
  nin:string
  profile_code:string
  first_choice_inst:string
  first_choice_course:string
  second_choice_inst:string
  second_choice_course:string
  third_choice_inst:string
  third_choice_course:string



  selectedDisplay ='';
  messages = false;
  paystack = true;
  button = true;
  amount:number = 4700;
  key = this.trans.key;
  transactionRef:string=Math.random().toString().substr(2,12);
  constructor(private _service: ServiceService, private trans: TransactionService) { }

  ngOnInit() {
    this.form = this._service.form;
  }
    //To save purchase service details
    sendTransaction(){
      const form = {
        'amount':this.amount, 
        'service': 4, 
        'package': 1,
      }
      this.trans.makeTransaction(form).subscribe((data)=>{
        this.amount *=100;
        this.paystack = true;
      })
    }
  //After Payment has been completed
  paymentDone(e){
    this.messages = true;
    this.button = false;
    this.paystack= true;


    const body = {
      'status':e.status,
      'givitec_ref': e.reference,
      'paystack_ref':e.trans,
      'message':e.message
    };
    this.trans.savePaystack(body).subscribe(data=>{
        
      });
      this.messages = true;
      this.paystack = false;
     
  }
  onSubmit(){
    const body = {
      'reg_no':this.reg_no,
      'lastname':this.lastname,
      'firstname':this.firstname,
      'middle_name':this.middle_name,
      'dob':this.dob,
      'lga':this.lga,
      'state':this.state,
      'home_town':this.home_town,
      'address':this.address,
      'email':this.email,
      'phone':this.phone,
      'password':this.password,
      'nin':this.nin,
      'profile_code':this.profile_code,
      'first_choice_inst':this.first_choice_inst,
      'first_choice_course':this.first_choice_course,
      'second_choice_inst':this.second_choice_inst,
      'second_choice_course':this.second_choice_course,
      'third_choice_inst':this.third_choice_inst,
      'third_choice_course':this.third_choice_course
    }
    this._service.saveRegistrationData(body).subscribe((data)=>{
      this.sendTransaction();
    })
    this.form.reset();
  }
  paymentCancel(){
    console.log('cancelled')
  }
}
