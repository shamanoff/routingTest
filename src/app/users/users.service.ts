import {Injectable} from '@angular/core';

@Injectable()
export class UsersService {

  allusers = [
    {id: 1, name: 'Max'},
    {id: 2, name: 'Anna'},
    {id: 3, name: 'Chris'},
    {id: 4, name: 'Dan'}
  ];

  getUsers() {
    return this.allusers;
  }

  getUserById(id: number) {
     return this.allusers.find(user => user.id === id);
  }

}
