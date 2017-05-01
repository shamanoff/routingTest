///<reference path="users.service.ts"/>
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from './users.service';
import {UserComponent} from '../user/user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // @Input() userEl: UserComponent;
  @Input() public i: number;
  users: UserComponent[];
  constructor(private  router: Router, private route: ActivatedRoute, private service: UsersService) {
  }

  toDetails(id: number) {
    this.router.navigate(['id'], {relativeTo: this.route});
    console.log(id);
  }

  ngOnInit() {
    this.users = this.service.getUsers();
  }

}
