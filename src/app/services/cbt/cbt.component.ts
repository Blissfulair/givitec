import { Component, OnInit,OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Service } from 'src/app/service.interface';
import { TransactionService } from 'src/app/transaction.service';

@Component({
  selector: 'app-cbt',
  templateUrl: './cbt.component.html',
  styleUrls: ['./cbt.component.scss']
})
export class CbtComponent implements OnInit {
  lists: Service[]=[];
  list:number;
  features=false;
  additions:[];
  add = [];
  total:number= 0.00;
  selected:number;
  selectedDisplay ='';
  additionals =[];
  messages = false;
  message ='';
  details:boolean;
  paystack = false;
  button = true;
  transactionRef = '';
  email = '';
  amount:number;

  form:any;



  constructor(private service: ServiceService, private trans: TransactionService) {
 
   }

  ngOnInit() {
    this.form = this.trans.form
    this.services();
  }

  //To fetch cbt packages from database
  packages(){
    this.service.getServices(this.list).subscribe((data)=>{
      this.lists = data['services'];
    })
  }

  //To fetch service  from database
  services(){
    this.service.getService('cbt').subscribe((data)=>{
      this.list = data['services'].id;
      this.packages();
      //this.additionalFeatures(this.list);
    })
  }

  //nested component function to get details and paystack values from ServicesComponent
  onChangeDetails(e:boolean){
   this.details = e;
   this.paystack =!e;
  }

  //Fetch package features
    additionalFeatures(id){
      this.service.getAdditionFeatures(id).subscribe((data)=>{
        this.additions = data['lists'];
        this.paystack= false;
        this.details = true;
        this.additionals = [];
        this.total = 0;
        if(this.additions.length > 0)
          this.features = true;
        else 
          this.features = false;
        let obj = this.lists.find(o => o.id == id);
        this.selected = obj.id;
        this.selectedDisplay = obj.name + " Package @ N";
    })
  }

  //Add additional features value
  getAddedValue(e){
    let inner = e.parentNode.innerText;
    let test =this.additions.filter((data:[])=>data['name'].includes(inner.replace(':', '').split(' ')[0]))
      if(e.checked)
     {
      this.total += Number(e.value);
      this.additionals.push(test[0]['id']); 
      this.add.push(inner);
     }
      else
      {
        this.total -= Number(e.value);

        this.additionals.splice(this.additionals.indexOf(test[0]['id']), 1);
        this.add.splice(this.add.indexOf(inner),1);
      }
  }
  
}
