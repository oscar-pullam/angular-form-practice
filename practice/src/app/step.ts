import { Component, inject, input, OnInit, SimpleChanges } from '@angular/core';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { StepperService } from './stepper.service';

@Component({
  selector: 'step',
  imports: [MatMiniFabButton],
  templateUrl: './step.html',
  styleUrl: './app.css'
})
export class Step {
  private stepperService = inject(StepperService);
  text = input.required<string>();
  stepNumber = input.required<number>();
  isActive = input.required<boolean>();

  public setAsActiveStep() {
    this.stepperService.activeStep.set(this.stepNumber());
  }
}
