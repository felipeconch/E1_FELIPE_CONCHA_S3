import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  productos: Producto[] = [
    {
      nombre: 'Poleras',
      descripcion: 'Poleras Manga Corga 100% Algodon',
    },
    {
      nombre: 'Pantalones',
      descripcion: 'Pantalones urbanos',
    },
    {
      nombre: 'Zapatillas',
      descripcion: 'Zapatillas deportivas',
    },
    {
      nombre: 'Jockeys',
      descripcion: 'Modelos 2024',
    },
  ];

  constructor() {}

  ngOnInit() {}

  agregarAlCarro(producto: Producto) {
    console.log(`${producto.nombre} agregado al carro de compras.`);
  }
}

interface Producto {
  nombre: string;
  descripcion: string;
}
