import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  template: '<p class = "primary"></p>', //inline-template
  styles: ['.primary{color:blue}'] //inline-styling
})
export class ManualComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}