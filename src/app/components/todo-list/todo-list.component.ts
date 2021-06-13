import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/i-task';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  tasks : ITask[];

  constructor(private _todoService: TodoService) {
    this.tasks= this._todoService.todoTasks;
  }
  
  ngOnInit(): void {}

  onDeleteClick(taskId) {
    this._todoService.deleteItem(taskId);
    this.tasks= this._todoService.todoTasks;
  }

}
