// home.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { TituloComponent } from '../services/titulo/titulo.component'; // Asegúrate de que la ruta sea correcta

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    TituloComponent // Asegúrate de declarar el componente aquí
  ]
})
export class HomePageModule {}



