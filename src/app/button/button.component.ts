import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() propName?: string;
  @Input() color?: string;
  @Input() size?: string;

  getSizeClass() {
    return {
      'btn-large': this.size === 'large',
      'btn-small': this.size === 'small',
    };
  }
}
