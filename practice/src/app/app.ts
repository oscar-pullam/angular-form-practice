import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { Step } from './step';
import { MatButtonModule } from '@angular/material/button';
import { FormStepOne } from "./form-steps/form-step-one";
import { StepperService } from './stepper.service';
import { FormStepTwo } from './form-steps/form-step-two';

@Component({
  selector: 'app-root',
  imports: [MatInputModule, RouterOutlet, ReactiveFormsModule, MatFormFieldModule, MatSidenavContent, MatSidenavContainer, MatSidenav, Step, MatButtonModule, FormStepOne, FormStepTwo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice');
  stepperService = inject(StepperService);

  personalForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });

  optionsForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    planLevel: new FormControl(''),
  });
}
