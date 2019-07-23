import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mostrar: any = true;
  personas: any = ['Johnny', 'Gustavo', 'Edisson', 'Alexander'];
  constructor() { }

  ngOnInit() {
  }

}
