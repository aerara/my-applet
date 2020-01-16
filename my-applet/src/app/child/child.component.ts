import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public childData: String;
  @Input() dataFromParent: String;
  @Output() childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(value: string) {
    this.childEvent.emit(value);
    console.log(value)
  }
}
