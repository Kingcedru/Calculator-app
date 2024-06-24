import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  parentValue: string = 'Add';
}
