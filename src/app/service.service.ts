import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import 'rxjs'; 
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  form : FormGroup;
  mockForm : FormGroup;
  public url = 'https://www.givitec.com/app';
  //public url = 'http://127.0.0.1:8000';
  constructor(private http : HttpClient, private fb : FormBuilder) {
    this.form = this.fb.group({
      reg_no:[''],
      lastname:['', Validators.required],
      firstname:['', Validators.required],
      middle_name:[''],
      dob:['', Validators.required],
      lga:['', Validators.required],
      state:['', Validators.required],
      home_town:['', Validators.required],
      address:['', Validators.required],
      email:['', Validators.email],
      phone:['', Validators.pattern('^[0]+[7-9]+[0-1]+[0-9]{8}')],
      password:['', Validators.required],
      nin:['', Validators.required],
      profile_code:['', Validators.required],
      first_choice_inst:['', Validators.required],
      first_choice_course:['', Validators.required],
      second_choice_inst:['', Validators.required],
      second_choice_course:['', Validators.required],
      third_choice_inst:['', Validators.required],
      third_choice_course:['', Validators.required]
    })
    this.mockForm = this.fb.group({
      reg_no:['']
    })
  }
  saveRegistrationData(body){
    return this.http.post(this.url+'/api/jamb_registration',body);
  }
  getServices(id:number):Observable<any>{
    return this.http.get(this.url+'/api/services/'+id);
  }
  getService(id:string){
    return this.http.get(this.url+'/api/service/'+id);
  }
  getSelectedService(meta:string){
    return this.http.get(this.url+'/api/services/selected/'+meta);
  }
  getAdditionFeatures(id:string){
    return this.http.get(this.url+'/api/service/features/'+id);
  }
  getServiceDelete(id:number){
    return this.http.delete(this.url+'/api/service/delete/'+id
    );
  }
  getMockResult(reg_no:number){
    return this.http.get(this.url+'/api/mock/'+reg_no
    );
  }

  createService(form:FormData){
    // const formData:FormData = new FormData;
    // formData.append('name', form.name);
    // formData.append('content', form.content);
    // formData.append('file', form.file);
    // const formData = {
    //   'name':form.name,
    //   'content': form
    // }
    // formData.append
    //const data = JSON.stringify(formData)
   // const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.url+'/api/create/service',form);
  }
  updateService(id:number, body:object){
    const data = JSON.stringify(body);
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put(this.url+'/api/update/service/'+id,data,{headers:headers});
  }
  getPost(){
    return this.http.get('http://localhost/ephraim/wp-json/wp/v2/posts/?_embed');
  }
}
