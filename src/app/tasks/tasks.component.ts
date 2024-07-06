import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ButtonComponent,TodoComponent],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
}
