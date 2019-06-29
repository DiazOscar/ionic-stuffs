import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.page.html',
  styleUrls: ['./progressbar.page.scss'],
})
export class ProgressbarPage implements OnInit {

  porcentaje: number;
  constructor() { }

  ngOnInit() {
  }

  private cambioRango(event){
    console.log();
    this.porcentaje = event.detail.value / 100;
  }

}
