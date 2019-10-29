import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      name:['', Validators.required],
      email:['', Validators.email],
      referral:[''],
      phone:['', Validators.pattern('^[0]+[7-9]+[0-1]+[0-9]{8}')],
      message:['', Validators.required],
      service:['', Validators.required]
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
