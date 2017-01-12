import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class MapComponent implements OnInit {
  title: string = 'Angular2-google-maps project';
  lat: number = 0;
  lng: number = 0;
  loadLocation: boolean = false;
  zoom: number = 18;
  myPosition = { lat: 0, lng: 0 };
  places = [];
  constructor() { }
  ngOnInit() {
    this.showPosition();
  }

  showPosition() {
    navigator.geolocation.getCurrentPosition(
      (response) => {
        this.lat = this.myPosition.lat = response.coords.latitude;
        this.lng = this.myPosition.lng = response.coords.longitude;
        this.places.push({ title: 'My position', location: this.myPosition });
        this.loadLocation = true;
      }, () => {

      });
  }

}
