import {Component, HostBinding, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {showTrigger} from "../animation";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
  animations: [
    showTrigger
  ]
})
export class ServersComponent implements OnInit {
  @HostBinding('@showTrigger') routeAnimation = true;

  constructor(private  router: Router) { }

  toUsers() {
    this.router.navigate(['/users', '1']);
  }
  ngOnInit() {
  }

}
