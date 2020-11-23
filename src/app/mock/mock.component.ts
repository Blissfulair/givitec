import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Mock } from '../mock';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.scss']
})
export class MockComponent implements OnInit {
  form;
  status:boolean = false;
  name:string;
  mock:Mock;
  error:boolean = false;
  view:boolean = false;
  date:number;
  constructor(private _service:ServiceService) { }

  ngOnInit() {
    this.form = this._service.mockForm;
  }
  onSubmit(){
    this.status = true;
    this._service.getMockResult(this.form.value.reg_no.toUpperCase()).subscribe((data)=>{
      this.mock = data['mock'];

        if(data['mock'] != null){
          this.form.reset();
          this.error = false;
          this.view = true;
          this.date = new Date(this.mock.created_at).getFullYear()
        }else{
          this.error = true;
          this.view = false;
        }
        
        this.status = false;

    })
    
  }

  print(){
    let result = document.querySelector('.result').innerHTML;
       const myWindow = window.open('', 'new div', 'width=800,height=600');
        //myWindow.document.write(result);
        myWindow.document.write(`<html><head><style>
        .table{
            width: 100%;
            margin-bottom: 1rem;
            color: #212529;
            border-collapse: collapse;
          } 
          .table-bordered {
            border: 1px solid #dee2e6;
          }
          .table-bordered thead td, .table-bordered thead th {
              border-bottom-width: 2px;
          }
          .table-bordered td, .table-bordered th {
            border: 1px solid #dee2e6;
          }
          .table thead th {
              vertical-align: bottom;
              border-bottom: 2px solid #dee2e6;
          }
          .table td, .table th {
            padding: .75rem;
            vertical-align: top;
            border-top: 1px solid #dee2e6;
          }
          .text-center {
            text-align: center!important;
          }
          th {
            text-align: inherit;
          }
          @@supports (-moz-appearance:meterbar) {
            .print {
                -webkit-print-color-adjust: exact;
                color-adjust: exact;
            }
        }

        </style><title>Result</title>`);
        myWindow.document.write('</head><body>');
        myWindow.document.write(result);
        myWindow.document.write('</body><html>');
        myWindow.document.close();
        myWindow.focus();
        setTimeout(function() {
            myWindow.print();  
        },3000)
        return true;
    }
}
