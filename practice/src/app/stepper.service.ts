import { Injectable, signal } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class StepperService {

  activeStep = signal(1);

  public nextStep() {
    this.activeStep.set(this.activeStep() + 1);
  }

  public previousStep() {
    this.activeStep.set(this.activeStep() - 1);
  }
}
