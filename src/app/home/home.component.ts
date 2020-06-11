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
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
   }, 1000);
  }

  ngOnInit() {}

}
