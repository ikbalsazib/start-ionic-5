import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {UserModel} from '../../interfaces/user-model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  userDetails: UserModel;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('userId')) {
        // Redirect...
      }

      this.userDetails = this.userService.getUser(paramMap.get('userId'));
    });
  }

}
