import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ClienteDetalleComponent } from '../cliente-detalle/cliente-detalle.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,    
  ],
  declarations: [HomePage, ClienteDetalleComponent]
})
export class HomePageModule {}
