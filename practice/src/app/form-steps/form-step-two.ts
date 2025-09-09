import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { PlanCard } from "./plan-card";

@Component({
  selector: 'formStepTwo',
  imports: [MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatDatepickerModule, MatButtonToggleModule, MatCardModule, PlanCard],
  templateUrl: './form-step-two.html',
  styleUrl: '../app.css'
})
export class FormStepTwo {
  optionsForm = input.required<FormGroup>();

}
