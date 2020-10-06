import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice4',
  templateUrl: './exercice4.component.html',
  styles: []
})
export class Exercice4Component implements OnInit {

  public texts = ["un", "deux", "trois"];
  
  constructor() { }

  ngOnInit(): void {
  }

}
