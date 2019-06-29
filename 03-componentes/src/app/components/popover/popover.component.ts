import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  items = Array(20);

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  onClick(valor: number){

    console.log(valor);
    this.popoverCtrl.dismiss({
      item: valor
    });
  }

}
