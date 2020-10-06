import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styles: []
})
export class Exercice1Component implements OnInit {
  public inputType = "date";
  public displayButton = false;
  
  constructor() { }

  public changeStates(): void {
    this.displayButton = ! this.displayButton;
    this.inputType = this.inputType === "date" ? "number" : "date";
  }

  ngOnInit(): void {
  }

}
