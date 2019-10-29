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
    auto: true,
    loop: true,
    autoplay:true,
    autoPlaySpeed:5000,
    autoPlayTimeout:5000,
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
    this.movingHand();
  }
  movingHand(){
    const hand = document.getElementById('hand');
    if(hand !== null){
        let i = 0;
        const img = ['tap.svg', 'tap1.svg', 'tap2.svg', 'tap1.svg'];
        setInterval(()=>{
            i>=img.length?i=0:i=i;
            hand.style.backgroundImage   = "url('../../../assets/"+img[i]+"')";
            i++;
        },1300)
    }
  }
  post(){
    return this.serve.getPost().subscribe((post)=>{
      this.posts = post;
    })
  }
}
