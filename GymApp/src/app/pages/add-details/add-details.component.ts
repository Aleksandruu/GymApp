import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-details.component.html',
  styleUrl: './add-details.component.scss',
})
export class AddDetailsComponent {
  detailsForm!: FormGroup;
  inputNumber = 1;

  constructor() {
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
    this.inputNumber++;
  }

  submit(): void {
    console.log(this.detailsForm.value);
  }
}
