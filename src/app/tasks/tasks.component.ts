import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from '../DUMMY_TASKS';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  userTasks = DUMMY_TASKS
  @Input({required:true}) userId!:string
  @Input({ required: true }) name!: string
  
  get selectedUserTasks() {
    return this.userTasks.filter((task)=> task.userId === this.userId)
  }
}
