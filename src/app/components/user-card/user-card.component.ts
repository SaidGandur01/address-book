import { Component, Input } from '@angular/core';
import { Name, Picture } from 'src/app/utils';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input() userName !: Name;
  @Input() picture !: Picture;

  constructor() { }

}
