import { Component } from '@angular/core';
import { WorkoutService } from '../../service/workout.service';
import { Workout } from '../../dataTypes/workout.type';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.scss',
})
export class WorkoutComponent {
  workouts: Workout[] = [];
  constructor(private workoutService: WorkoutService) {
    this.workoutService.getWorkouts().subscribe((date) => {
      this.workouts = date;
    });
  }
}
