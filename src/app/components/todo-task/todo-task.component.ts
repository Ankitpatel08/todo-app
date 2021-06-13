import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent implements OnInit {
  todoForm: FormGroup;
  taskId;
  isEdit = false;
  initialTask;

  constructor(private _todoService : TodoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      if (param.id) {
        this.isEdit = true;
        this.taskId = param.id;
      }
    });

    if (this.taskId) {
      this._todoService.todoTasks.forEach((task) => {
        if (task.taskId == this.taskId) {
          this.initialTask = task;
        }
      });
      this.initForm();
    } else {
      this.initForm();
    }
  }

  initForm() {
    let taskId = this.initialTask ? this.initialTask.taskId : 0;
    let taskTitle = this.initialTask ? this.initialTask.taskTitle : '';
    let taskDescription = this.initialTask ? this.initialTask.taskDescription : '';
    let isDone = this.initialTask ? this.initialTask.isDone : false;


    this.todoForm = new FormGroup({
      taskId : new FormControl(taskId, Validators.required),
      taskTitle : new FormControl(taskTitle, Validators.required),
      taskDescription: new FormControl(taskDescription),
      isDone: new FormControl(isDone)
    });

    this.isEdit && this.todoForm.get('taskId').disable();
  }

  onSubmit() {
    if (this.isEdit) {
      this.todoForm.get('taskId').enable()
      this._todoService.updateItem(this.taskId, this.todoForm.value);
    } else {
      this._todoService.addItem(this.todoForm.value);
    }

    this.router.navigate(['']);
  }
}
