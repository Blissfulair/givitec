import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { RequestComponent } from './request/request.component';
import { AboutComponent } from './about/about.component';
import { GraphicComponent } from "./services/graphic/graphic.component";
import { MobileComponent } from "./services/mobile/mobile.component";
import { NetworkingComponent } from "./services/networking/networking.component";
import { WebComponent } from "./services/web/web.component";
import { CbtComponent } from "./services/cbt/cbt.component";
import { CareerComponent } from "./career/career.component";
import { JambComponent } from "./services/jamb/jamb.component"

const routes: Routes = [
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'request',
    component:RequestComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'graphics',
    component:GraphicComponent
  },
  {
    path:'mobile',
    component:MobileComponent
  },
  {
    path:'networking',
    component:NetworkingComponent
  },
  {
    path:'web',
    component:WebComponent
  },
  {
    path:'cbt',
    component:CbtComponent
  },
  {
    path:'careers',
    component:CareerComponent
  },
  {
    path:'jamb-registration',
    component:JambComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
