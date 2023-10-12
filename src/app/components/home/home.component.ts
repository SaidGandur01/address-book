import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUserResponse, User } from 'src/app/utils/user-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userList !: User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    this.userService.getUsers().subscribe((res: IUserResponse) => {
      this.userList = res.results
      console.log({res})
    });
  }

}
