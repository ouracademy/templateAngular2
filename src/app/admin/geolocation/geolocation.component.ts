import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {
  geolocation: string;
  @Output() coords = new EventEmitter();
  constructor() { }


  ngOnInit() {
         navigator.geolocation.getCurrentPosition(this.ok,this.error);
  }
  showPosition() {
     navigator.geolocation.getCurrentPosition(this.ok,this.error);
  }
  error(){
    console.log("error");
  }
  ok(response){
    console.log(response);
    return response.coords;
  }

}
