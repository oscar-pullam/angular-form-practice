import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { Step } from './step';

@Component({
  selector: 'app-root',
  imports: [MatInputModule, RouterOutlet, ReactiveFormsModule, MatFormFieldModule, MatSidenavContent, MatSidenavContainer, MatSidenav, Step],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice');
  personalForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });

  public maskPhoneNo() {
    console.log('Calling')
    let el = document.getElementById("phone") as HTMLInputElement | null;
    if(el == null) return;
    let pnum = el.value.replace(/\D*/g,"");
    if (pnum.length >= 3) { pnum = "("+pnum.slice(0,3)+") "+pnum.slice(3); }
    if (pnum.length >= 9) { pnum = pnum.slice(0,9)+"-"+pnum.slice(9); }
    el.value = pnum;
  }
}
