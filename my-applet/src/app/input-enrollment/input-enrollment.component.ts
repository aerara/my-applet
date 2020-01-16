import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-enrollment',
  templateUrl: './input-enrollment.component.html',
  styleUrls: ['./input-enrollment.component.css']
})

export class InputEnrollmentComponent implements OnInit {
  public name: String;
  public gender: String;
  public isEnrolled: String;
  public status : boolean;
  public receiveData: String;
  public reply1: String;
  public reply2: String;
  public reply3: String;
  public declined: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.reply1 = this.name,
      this.reply2 = this.gender
      if (this.status) {
        this.reply3 = "Yes"
      } else {
        this.reply3 = "No"
      }
  }

  addDecline() {
    this.declined.push({
      name: this.reply1,
      gender: this.reply2,
      status: this.reply3
    })
  }
}
