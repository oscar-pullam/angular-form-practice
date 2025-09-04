import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'formStepOne',
  imports: [MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './form-step-one.html',
  styleUrl: '../app.css'
})
export class FormStepOne {
  personalForm = input.required<FormGroup>();
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
