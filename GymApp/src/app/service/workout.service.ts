import { Injectable } from '@angular/core';
import { Workout } from '../dataTypes/workout.type';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  constructor() { }

  getWorkouts(): Workout[]{
    return [
      {
        name: "Chest-Tri",
        exercises: [],
      },{
        name: "Back-Biceps",
        exercises: [],
      },{
        name: "Legs",
        exercises: [],
      },{
        name: "Shoulder-Abs",
        exercises: [],
      },
    ]
  }
}
