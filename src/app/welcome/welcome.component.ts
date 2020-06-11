import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  constructor(public router: Router) { }

  name: string;

  ngOnInit() {}

  save = () =>{
    localStorage.setItem("name", this.name);
    this.router.navigateByUrl('home');
  }

  getName = ($event) => {
    this.name = $event.target.value;
  }
}
