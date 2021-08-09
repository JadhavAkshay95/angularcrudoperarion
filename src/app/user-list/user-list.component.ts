import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUserList().subscribe(data => {
      this.userList = data.data
    })
  }

  showUserDeatils(id: any) {
    this.router.navigate(['/', id]);

  }

  deleteUser(id: any) {
    this.userList = this.userList.filter((user: any) => user.id !== id)
  }
}
