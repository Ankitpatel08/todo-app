import { TmplAstElement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ITask } from './i-task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoTasks: ITask[];

  constructor() {
    this.todoTasks = [{
      taskId: 101,
      taskTitle: 'buy grocery',
      taskDescription: 'grains, vegetables',
      isDone: false
    }];
   }

   addItem(data) {
     this.todoTasks.push(data);
   }

   updateItem(id, data) {
    this.todoTasks.forEach((task, index) => {
      if(task.taskId == id) {
        this.todoTasks[index] = data;
      }
    });
   }

   deleteItem(id) {
    this.todoTasks = this.todoTasks.filter((task) => task.taskId !== id);
    console.log(this.todoTasks);
   }
}
