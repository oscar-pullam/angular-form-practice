import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'planCard',
  imports: [MatCardModule],
  templateUrl: './plan-card.html',
  styleUrl: '../app.css'
})
export class PlanCard {
  title = input.required<string>();
  subtitle = input.required<string>();
  icon = input.required<string>();

}
