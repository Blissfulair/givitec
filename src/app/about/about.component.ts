import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  teamOptions = { 
    items: 4, 
    dots: false, 
    nav: true, 
    auto: true,
    loop: true,
    autoplay:true,
    autoPlaySpeed:5000,
    autoPlayTimeout:5000,
    navText: ['Prev', 'Next'],
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
        items: 3
      },
      940: {
        items: 3.7
      }
    }
   };
  constructor() { }

  ngOnInit() {
  }

}
