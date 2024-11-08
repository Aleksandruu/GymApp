import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddDetailsComponent } from './pages/add-details/add-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'GymApp';
}
