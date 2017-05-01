import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent  {

public id: number;
public name: string;


  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

