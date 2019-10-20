import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Service } from 'src/app/service.interface';
import { TransactionService } from 'src/app/transaction.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  @Output() selectedDetails:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() list:number;
  @Input() features:boolean;
  @Input() total:number;
  @Input() selected:number;
  @Input() add;
  @Input() selectedDisplay:string;
  @Input() additionals:any;
  @Input() messages:boolean;
  @Input() message:string;
   @Input() details:boolean = true;
  @Input() paystack:boolean;
  @Input() button:boolean;
  @Input() transactionRef:string;
  @Input() email:string;
  @Input() amount:number;
  key = this.trans.key;

  form:any;

  constructor(private service: ServiceService, private trans: TransactionService) {
    
   }

  ngOnInit() {
    this.form = this.trans.form
  }

  //To save purchase service details
  sendTransaction(){
    let addi
    if(this.add.length>1){
      var last = this.add.pop();
       addi = this.add.join(', ') + " and "+last + " services";
    }else{
      addi = this.add.join(', ')+ " service";
    }
    this.form.patchValue({
      'amount':this.total, 
      'service': this.list, 
      'package': this.selected,
      'additionals': JSON.stringify(this.additionals),
      'add':addi
    })
    this.trans.makeTransaction(this.form.value).subscribe((data)=>{
      this.form.reset();
      this.email = data['transaction']['email'];
      this.amount = data['transaction']['amount']*100;
      this.details = false;
      this.selectedDetails.emit(this.details);
      this.paystack = true;
      this.transactionRef= data['transaction']['ref'];
      this.message = data['status'];
    })
  }

  //After Payment has been completed
  paymentDone(e){
    this.messages = true;
    this.button = false;
    this.paystack= true;
    this.additionals = [];
    this.total = 0;


    const body = {
      'status':e.status,
      'givitec_ref': e.reference,
      'paystack_ref':e.trans,
      'message':e.message
    };
    this.trans.savePaystack(body).subscribe(data=>{
      this.messages = true;
    });
      this.paystack = false;
      this.details = false;
      this.button = true;
     
  }
  //Cancel Payment
  onCancel(){
    this.paystack= false;
    this.messages = false;
    this.selectedDetails.emit(this.details);
    this.details = true;
  }

  paymentCancel(){
    this.features = false;
  }
  }
