import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  isActive: boolean = false;
  imageUrl: string = 'http://mdbootstrap.com/img/Photos/Horizontal/Technology/full%20page/1.jpg';
  logoName:string = 'logo_ouracademy.png';
  constructor() { }

  ngOnInit() {
  }
  toggleMenu() {
    this.isActive = !this.isActive;
  }
}
