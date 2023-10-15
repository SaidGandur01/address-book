import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUserResponse, User } from 'src/app/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userList : User[] = [];
  page = 1;
  constructor(
    private userService: UserService,
    private router: Router  
  ) { }

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    this.userService.getUsers(this.page).subscribe((res: IUserResponse) => {
      const users = res.results
      this.userList = this.userList.concat(users);
    });
  }

  userTrackBy(index: number) {
    return index;
   }
  
  getMoreUsers(): void {
    this.page += 1;
    this.initializeData();
  }

  goToUserDetails(user: User): void {
    this.userService.setUser(user);
    console.log(user)
    this.router.navigate(['user'])
  }

  test(): void {
    const currentUser = this.userService.getUser();
    console.log({currentUser})
  }
}
