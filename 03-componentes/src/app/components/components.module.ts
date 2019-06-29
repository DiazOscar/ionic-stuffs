import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent, 
    PopoverComponent
  ],

  exports:[
    HeaderComponent,
    MenuComponent,
    PopoverComponent
  ],

  imports: [
    CommonModule,
    IonicModule, 
    RouterModule
  ]
})
export class ComponentsModule { }
