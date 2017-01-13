import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-map',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class MapComponent implements OnInit {
  title: string = '';
  lat: number = 0;
  lng: number = 0;
  loadLocation: boolean = false;
  zoom: number = 18;
  myPosition = { lat: 0, lng: 0 };
  locations: FirebaseListObservable<any[]>;
  auth: any;
  constructor(public af: AngularFire) {
    this.locations = this.af.database.list('/locations');
    this.af.auth.subscribe(auth => this.auth = auth);
  }
  addLocation(title, lat, lng, draggable = false) {
    this.locations.push({ title: title, coords: { lat: lat, lng: lng }, draggable: draggable });
  }
  updateLocation(key: string, coords) {
    this.locations.update(key, { coords: coords });
  }
  ngOnInit() {
    this.showPosition();
  }
  addMarker() {
    if (this.title !== '') {
      this.addLocation(this.title, this.lat + 0.0001, this.lng, true);
    }
  }
  showPosition() {
    navigator.geolocation.getCurrentPosition(
      (response) => {
        this.lat = this.myPosition.lat = response.coords.latitude;
        this.lng = this.myPosition.lng = response.coords.longitude;
        this.loadLocation = true;
      }, () => {

      });
  }
  login() {
    this.af.auth.login();
  }
  logout() {
    this.af.auth.logout();
  }
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  markerDragEnd(m, $event) {
    this.updateLocation(m.$key, $event.coords);
  }

}
