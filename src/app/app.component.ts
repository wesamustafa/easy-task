import { Component } from '@angular/core';
import { DUMMY_USERS } from './DUMMY_USERS';
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'easy-task';
  users = DUMMY_USERS;
  selectedUserId?:string;
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
