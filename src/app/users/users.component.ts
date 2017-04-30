import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [
    {id: 1, name: 'Max'},
    {id: 2, name: 'Anna'},
    {id: 3, name: 'Chris'},
    {id: 4, name: 'Dan'}
  ];
  constructor(private  router: Router,private route: ActivatedRoute) { }

  toDetails(id: number) {
    this.router.navigate(['/users/' + id], {relativeTo: this.route});
    console.log(id);
  }
  ngOnInit() {
    return this.users;
  }

}
