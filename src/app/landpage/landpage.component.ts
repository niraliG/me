import { Component, OnInit } from '@angular/core';
import {Route} from '@angular/router';
@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.scss']
})
export class LandpageComponent implements OnInit {
  route: Route;
  constructor() {
     setTimeout(() => {
       window.location.href = '/home';
     }, 3000);
    }
    ngOnInit() {
    }
  

}
