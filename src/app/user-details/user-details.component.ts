import {Component, HostBinding, OnInit} from '@angular/core';
import {UsersService} from '../users/users.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserComponent} from '../user/user.component';
import { slideTrigger} from "../animation";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  animations: [
    slideTrigger
  ]
})
export class UserDetailsComponent implements OnInit {
  @HostBinding('@slideTrigger') routeAnimation = true;

  id: number;
  user: UserComponent;
  constructor(private userService: UsersService,
              private route: ActivatedRoute,
              private  router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.user = this.userService.getUserById(this.id);
      }
    );
  }


}
