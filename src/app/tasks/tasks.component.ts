import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from '../DUMMY_TASKS';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from './task/task.model';
import { TaskService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  constructor(private taskService:TaskService){}
  userTasks = DUMMY_TASKS
  @Input({required:true}) userId!:string
  @Input({ required: true }) name!: string
  isAddTask = false;
  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId)
  }
  onStartAddTask() {
    this.isAddTask = true;
  }
  onCancelAddTask() {
    this.isAddTask = false;
  }
  onAddTask(taskData:NewTask){
    this.userTasks.push({
      id:new Date().getTime().toString(),
      userId:this.userId,
      title:taskData.title,
      summary:taskData.summary,
      dueDate:taskData.date
    })
    this.isAddTask= false
  }
}
