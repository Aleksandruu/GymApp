import { Injectable } from '@angular/core';
import { Details } from '../dataTypes/details.type';
import { HttpClient } from '@angular/common/http';
import { environmentDev } from '../environment/environment.dev';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(private http: HttpClient) {}

  postDetails(details: Details): Observable<null> {
    return this.http.post<null>(
      environmentDev.apiUrl + 'add-workout-profile/',
      details
    );
  }
}
