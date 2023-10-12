import { Component, Input, OnInit } from '@angular/core';
import { Name, Picture } from 'src/app/utils/user-interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() userName !: Name;
  @Input() picture !: Picture;

  constructor() { }

  ngOnInit(): void {
  }

}
