import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GruLibComponent} from '../../projects/gru-lib/src/lib/gru-lib.component';
import {GruLibButtonComponent} from '../../projects/gru-lib/src/components/gru-lib-button/gru-lib-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GruLibComponent, GruLibButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ui-custom';
}
