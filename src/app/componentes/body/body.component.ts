import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  accion = 'Ocultar';
  mostrar = true;
  personas: any = ['Johnny', 'Gustavo', 'Edisson', 'Alexander'];
  constructor() { }

  ngOnInit() {
  }

  clickBtn(): void {
    this.mostrar = !this.mostrar;
    if (this.mostrar) {
      this.accion = 'Ocultar';
    } else {
      this.accion = 'Mostras';
    }
  }

}
