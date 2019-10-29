import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {  
    config.interval = 5000;
    config.showNavigationArrows= false; 
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
  } 
  ngOnInit() {
  }

}
