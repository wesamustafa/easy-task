import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();
  enterTitle = '';
  enterSummary = '';
  enterDate = '';
  onCancel() {
    this.cancel.emit();
  }
  onSubmit(){
    console.log("Task added:", this.enterTitle, this.enterSummary, this.enterDate);
this.add.emit({
  title:this.enterTitle,
  summary:this.enterSummary,
  date:this.enterDate
})
  }
}
