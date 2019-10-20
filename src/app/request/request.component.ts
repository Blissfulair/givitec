import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  form : FormGroup;
  orderStatus:string;
  status = false;
  constructor(private order : OrderService, private fb:FormBuilder) {
    this.form = this.fb.group({
      name:[''],
      email:[''],
      referral:[''],
      phone:[''],
      message:[''],
      service:['']
    });
   }

  ngOnInit() {
  }
  sendOrder(){
    this.order.makeOrder(this.form.value).subscribe((data)=>{
      this.orderStatus = data['status'];
      this.status = true;
    });
    this.form.reset();
  }

}
