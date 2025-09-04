import { Component, input } from '@angular/core';
import { MatButton, MatMiniFabButton } from '@angular/material/button';

@Component({
  selector: 'step',
  imports: [MatMiniFabButton],
  templateUrl: './step.html',
  styleUrl: './app.css'
})
export class Step {
   text = input.required<string>();
   stepNumber = input.required<number>();
   isActive = input.required<boolean>();
}
