import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PATHS } from '../../constants/routes';
import { DetailsService } from '../../service/details.service';

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

  constructor(private router: Router, private detailsService: DetailsService) {
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
    this.detailsService.postDetails(this.detailsForm.value).subscribe();
    this.router.navigate([PATHS.WORKOUT]);
  }
}
