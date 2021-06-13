import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoTaskComponent } from './components/todo-task/todo-task.component';

const routes: Routes = [{
  path: '',
  component: TodoListComponent
}, {
  path: 'addTask',
  component: TodoTaskComponent
},
{
  path: 'editTask/:id',
  component: TodoTaskComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
