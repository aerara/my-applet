import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  contactForm: FormGroup;
  isHidden = true;
  
  constructor() {
    this.contactForm = new FormGroup({
      'firstname': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'lastname': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'email': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'street': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'city': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'state': new FormControl('', [Validators.required, Validators.minLength(1)]),
      'zipcode': new FormControl('', [Validators.required, Validators.minLength(1)]),
    })
  }

  ngOnInit() {
  }

  formValue: any;
  onSubmit() {
    console.log(this.contactForm.value)
    this.isHidden = false;
    this.formValue = this.contactForm.value;
  }
}
