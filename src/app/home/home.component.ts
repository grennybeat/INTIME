import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { PickerController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  //variables
  name: string;
  laps: number;
  lapsTime: Time;
  time: string;

  //errors handlers
  input_error: string;

  constructor(private picker_ctrl: PickerController) {
    this.name = localStorage.getItem("name");
    this.time = new Date().toLocaleTimeString().substring(0,5);
    setInterval(() => {
      this.time = new Date().toLocaleTimeString().substring(0,5);
   }, 10000);
  }
  showPicker(){
    let opt = {
      buttons: [

      ],
      colmuns: [
        
      ]
    }
  }

  ngOnInit() {}

  //laps input event
  getLaps = ($event) => {

    if ($event.target.value > 0 && $event.target.value < 999) {
        this.laps = $event.target.value;
      }
    else {
      this.input_error = 'laps';
      $event.target.value = '';
    }
  }

  //laps input event  
  getTime = ($event) => {
    if ($event.target.value > 0 && $event.target.value <= 18) {
      this.lapsTime = $event.target.value;
    }
    else{
      this.input_error = 'time';
      $event.target.value = '';
    }
  }
  
  start = () => {
    console.log(this.laps);
    console.log(this.lapsTime);
  }
}
