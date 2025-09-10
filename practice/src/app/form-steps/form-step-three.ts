import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddonCard } from "./add-on-card";

@Component({
  selector: 'formStepThree',
  imports: [MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatCheckboxModule, AddonCard],
  templateUrl: './form-step-three.html',
  styleUrl: '../app.css'
})
export class FormStepThree {
  addonsForm = input.required<FormGroup>();

}
