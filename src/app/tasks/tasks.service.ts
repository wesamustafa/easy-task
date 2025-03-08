import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../DUMMY_TASKS";
import { NewTask } from "./task/task.model";
@Injectable({
    providedIn:'root'
})
export class TaskService{
    private tasks = DUMMY_TASKS
    getUserTasks(userId:string){
        return this.tasks.filter((task)=> task.userId === userId)
    }
    addTask(taskData:NewTask, userId:string){
        this.tasks.push({
            id:new Date().getTime().toString(),
            userId:userId,
            title:taskData.title,
            summary:taskData.summary,
            dueDate:taskData.date
          })
    }
    removeTask(id:string){
        this.tasks= this.tasks.filter((task) => task.id !== id);
    }
}