import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'addonCard',
  imports: [MatCardModule, MatIcon],
  templateUrl: './add-on-card.html',
  styleUrl: '../app.css'
})
export class AddonCard {
  title = input.required<string>();
  subtitle = input.required<string>();
  cost = input.required<string>();

}
