import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PATHS } from '../../constants/routes';

@Component({
  selector: 'app-add-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-details.component.html',
  styleUrl: './add-details.component.scss',
})
export class AddDetailsComponent {
  detailsForm!: FormGroup;
  inputNumber = signal(1);

  constructor(
    private router: Router
  ) {
    this.detailsForm = new FormGroup({
      name: new FormControl(''),
      gender: new FormControl(''),
      age: new FormControl(''),
      weight: new FormControl(''),
      height: new FormControl(''),
      howManyTimesPerWeek: new FormControl(''),
      howMuchTimeInGym: new FormControl(''),
      reason: new FormControl(''),
      bodyPart: new FormControl(''),
    });
  }

  showComponent(): void {
    this.inputNumber.update((value) => value + 1);
  }

  submit(): void {
    console.log(this.detailsForm.value);
    this.router.navigate([PATHS.WORKOUT]);
  }
}
