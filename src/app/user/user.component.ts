import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { type User } from './user.model';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // user Input if want this component reusable
  //input decorator
  @Input({required:true}) users!:User
  @Output() select = new EventEmitter<string>();
  
  get imagePath() {
    return 'assets/users/' + this.users.avatar;
  }
  onSelectUser() {
    this.select.emit(this.users.id);
  }
}
