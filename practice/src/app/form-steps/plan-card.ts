import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'planCard',
  imports: [MatCardModule, MatIcon],
  templateUrl: './plan-card.html',
  styleUrl: '../app.css'
})
export class PlanCard {
  title = input.required<string>();
  subtitle = input.required<string>();
  icon = input.required<string>();

}
