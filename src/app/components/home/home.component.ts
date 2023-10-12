import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUserResponse, User } from 'src/app/utils/user-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userList : User[] = [];
  page = 1;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    this.userService.getUsers(this.page).subscribe((res: IUserResponse) => {
      const users = res.results
      this.userList = this.userList.concat(users);
      // console.log({userList: this.userList, users})
    });
  }
  
  getMoreUsers(): void {
    this.page += 1;
    this.initializeData();
  }

  setUser(user: User): void {
    this.userService.setUser(user);
    this.test();
  }

  test(): void {
    const currentUser = this.userService.getUser();
    console.log({currentUser})
  }
}
