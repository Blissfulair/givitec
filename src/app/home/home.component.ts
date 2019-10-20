import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  portfolioOptions = { 
    items: 3,
    dots: false, 
    nav: false, 
    responsive: {
      0: {
        items: 1,
        center: true
      },
      400: {
        items: 1,
        center: true
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    }
  };
  clientOptions = { 
    items: 5, 
    dots: false, 
    nav: false,
    responsive: {
      0: {
        items: 1,
        center: true
      },
      400: {
        items: 1,
        center: true
      },
      740: {
        items: 2
      },
      940: {
        items: 4
      },
      1200:{
        items: 5
      }
    } 
  };
  posts: Object;
  constructor(private serve : ServiceService) { 
    this.post();
  }

  ngOnInit() {
    
  }
  post(){
    return this.serve.getPost().subscribe((post)=>{
      this.posts = post;
    })
  }
}
