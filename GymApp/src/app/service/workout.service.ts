import { Injectable } from '@angular/core';
import { Workout } from '../dataTypes/workout.type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environmentDev } from '../environment/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  constructor(private http: HttpClient) {}

  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(
      environmentDev.apiUrl + 'generate-workout/1/'
    );
  }
}
