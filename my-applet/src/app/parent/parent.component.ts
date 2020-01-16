import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public parentData : String;
  public dataFromChild : String;
  public reply : String;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.reply = this.parentData;
  }

}
