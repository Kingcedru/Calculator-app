import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {}
