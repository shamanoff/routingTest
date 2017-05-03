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

  hoverSection: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');
    this.hoverSection.addEventListener('mousemove', mouseMove);
  }

  unsubscribe(){
    console.log('Unsubscribed!');
    this.hoverSection.removeEventListener('mousemove', mouseMove);
  }
}
function mouseMove(ev: MouseEvent){
  console.log(ev)

}
