import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  name: string;
  laps: number;
  lapsTime: Time;
  time: string;
  
  constructor() { 
    this.name = localStorage.getItem("name");
    this.time = new Date().toLocaleTimeString().substring(0,5);
    setInterval(() => {
      this.time = new Date().toLocaleTimeString().substring(0,5);
   }, 10000);
  }

  ngOnInit() {}

}
