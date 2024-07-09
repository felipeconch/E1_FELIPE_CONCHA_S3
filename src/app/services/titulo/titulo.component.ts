// Importa las funciones necesarias para animaciones desde @angular/animations
import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss'],
  animations: [
    // Define la animación @scaleIn
    trigger('scaleIn', [
      transition(':enter', [
        style({ transform: 'scale(0.8)' }),
        animate('1s ease-in-out', style({ transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class TituloComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
