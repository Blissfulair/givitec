import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';
import { RequestComponent } from './request/request.component';
import { AboutComponent } from './about/about.component';
import { GraphicComponent } from './services/graphic/graphic.component';
import { MobileComponent } from './services/mobile/mobile.component';
import { CbtComponent } from './services/cbt/cbt.component';
import { NetworkingComponent } from './services/networking/networking.component';
import { WebComponent } from './services/web/web.component';
import { CareerComponent } from './career/career.component'; 
import { OrderService } from './order.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Angular4PaystackModule } from 'angular4-paystack';
import { JambComponent } from './services/jamb/jamb.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    RequestComponent,
    AboutComponent,
    GraphicComponent,
    MobileComponent,
    CbtComponent,
    NetworkingComponent,
    WebComponent,
    CareerComponent,
    JambComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OwlModule,
    NgbModule,
    Angular4PaystackModule
  ],
  providers: [
    ServiceService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
