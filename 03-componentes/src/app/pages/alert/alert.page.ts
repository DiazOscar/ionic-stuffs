import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;
  constructor( public alertCtrl : AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Real Niggas never sell D***',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentInput(){
    const input = await this.alertCtrl.create({
      header: 'Cambiar titulo',
      subHeader: 'Introduce un titulo',
      inputs: 
      [
        {
          name: 'txtTitulo',
          type: 'text',
          placeholder: 'Titulo'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ouh Yeah',
          handler: (data) => {
            console.log('Confirm Okay', data);
            this.titulo = data.txtTitulo
          }
        }
      ]
    });

    await input.present();
  }

}
