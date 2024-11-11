import {Component, Input} from '@angular/core';

@Component({
  selector: 'Gru-lib-button',
  standalone: true,
  imports: [],
  templateUrl: './gru-lib-button.component.html',
  styleUrl: './gru-lib-button.component.scss'
})
export class GruLibButtonComponent {
 @Input() label?: string = 'Button';
}
