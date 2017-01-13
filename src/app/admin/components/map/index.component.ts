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
  locations = [];
  constructor() { }
  ngOnInit() {
    this.showPosition();
  }
  insertPosition(title, lat, lng, draggable = false) {
    this.locations.push({ title: title, coords: { lat: lat, lng: lng }, draggable: draggable });
  }
  addMarker() {
    this.insertPosition('Change the position', this.lat + 0.0001, this.lng, true);
  }
  showPosition() {
    navigator.geolocation.getCurrentPosition(
      (response) => {
        this.lat = this.myPosition.lat = response.coords.latitude;
        this.lng = this.myPosition.lng = response.coords.longitude;
        this.insertPosition('My position', this.myPosition.lat, this.myPosition.lng);
        this.loadLocation = true;
      }, () => {

      });
  }

}
