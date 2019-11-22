import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {UserModel} from '../interfaces/user-model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  userList: UserModel[] = [];
  subscribe: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userList = this.userService.getUserList();
  }

}
