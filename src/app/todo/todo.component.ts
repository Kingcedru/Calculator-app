import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ButtonComponent, TasksComponent],
  templateUrl: './todo.component.html',
})
export class TodoComponent {}
