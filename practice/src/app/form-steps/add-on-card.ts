import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckbox } from "@angular/material/checkbox";

@Component({
  selector: 'addonCard',
  imports: [MatCardModule, MatCheckbox],
  templateUrl: './add-on-card.html',
  styleUrl: '../app.css'
})
export class AddonCard {
  title = input.required<string>();
  subtitle = input.required<string>();
  cost = input.required<string>();

}
