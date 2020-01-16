import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-enrollment',
  templateUrl: './output-enrollment.component.html',
  styleUrls: ['./output-enrollment.component.css']
})
export class OutputEnrollmentComponent implements OnInit {
  public app: String;
  @Input() userName: String;
  @Input() userGender: String;
  @Input() userEnroll: String;
  @Output() receiveEvent = new EventEmitter();
  @Output() declinedEvent = new EventEmitter();
  public enrollee: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.receiveEvent.emit("The enrollment form has been approved");
    this.enrollee.push({
      name: this.userName,
      status: this.userEnroll,
      gender: this.userGender
    })
  }

  onTap() {
    this.receiveEvent.emit("The enrollment form has been disapproved");
    this.declinedEvent.emit();
  }
}