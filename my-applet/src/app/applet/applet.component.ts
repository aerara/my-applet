import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applet',
  templateUrl: './applet.component.html', //external link for binding
  styleUrls: ['./applet.component.css']
})

export class AppletComponent implements OnInit {
  isActive = false;
  public pdata = String;
  public cdata = String;
  buttonDisabled = true;
  
  constructor() {
  }

  ngOnInit() {
  }

  onClick(){
    console.log("Button is active");
  }
}