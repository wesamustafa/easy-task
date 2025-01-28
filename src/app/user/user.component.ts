import { Component , EventEmitter, Input, input, Output } from '@angular/core';
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
  @Input({required:true}) id!:string
  @Input({required:true}) avater!: string
  @Input({ required: true }) name!: string
  @Output() select = new EventEmitter<string>();
  
  get imagePath() {
    return 'assets/users/' + this.avater;
  }
  onSelectUser() {
    this.select.emit(this.id);
  }
}
