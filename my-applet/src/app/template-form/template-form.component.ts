import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  isDisplayed = false;
  isHidden = true;

  constructor() {}

  ngOnInit() {
  }

  formValue: any;
  onSubmit(form: NgForm) {
    this.formValue = form.value;
    console.log(this.formValue);
    if (this.isDisplayed) {
      this.isDisplayed = false;
      this.isHidden = true;
    } else {
      this.isDisplayed = true;
      this.isHidden = false;
    }
  }

  onClick() {
      this.isDisplayed = false;
      this.isHidden = true;
  }
}