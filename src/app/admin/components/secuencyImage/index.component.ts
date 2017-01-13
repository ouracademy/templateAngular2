import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-secuency-image',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class SecuencyImageComponent {

  public index = 0;
  public images = [
    'https://www.planwallpaper.com/static/images/new-wallpaper-3_lA2aDVm.jpg',
    'https://www.planwallpaper.com/static/images/11-sea-beach-sand-wallpaper_w80EYH0.jpg'
  ];
  constructor() {
    setInterval(() => { this.changeImage() }, 5000);
  }

  changeImage() {
    this.index = (this.index+1)%this.images.length;
  }


}
