import { Component, input } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'step',
  imports: [MatButton],
  templateUrl: './step.html',
  styleUrl: './app.css'
})
export class Step {
   text = input.required<string>();
   stepNumber = input.required<number>();
}
