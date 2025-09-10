import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'formStepThree',
  imports: [MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatDatepickerModule, MatButtonToggleModule, MatCardModule, MatSlideToggleModule],
  templateUrl: './form-step-three.html',
  styleUrl: '../app.css'
})
export class FormStepThree {
  addonsForm = input.required<FormGroup>();

}
