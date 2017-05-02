import {Component, HostBinding, OnInit} from '@angular/core';
import {showTrigger} from "../animation";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    showTrigger
  ]
})
export class HomeComponent implements OnInit {
  @HostBinding('@showTrigger') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
