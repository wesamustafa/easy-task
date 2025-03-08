import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TaskService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Input({required:true}) userId!:string
  taskService = inject(TaskService);
  enterTitle = '';
  enterSummary = '';
  enterDate = '';
  onCancel() {
    this.cancel.emit();
  }
  onSubmit(){
    this.taskService.addTask({
      title:this.enterTitle,
      summary:this.enterSummary,
      date:this.enterDate
    }, this.userId);
    this.cancel.emit();
  }
}
