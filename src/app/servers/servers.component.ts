import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  constructor(private  router: Router) { }

  toUsers() {
    this.router.navigate(['/users']);
  }
  ngOnInit() {
  }

}
