// products.page.ts
import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage {
  productos: Producto[] = [
    {
      nombre: 'Poleras',
      descripcion: 'Poleras Manga Corta 100% Algodón $9.990',
      imagen: 'poleras.jpg' // Ruta de la imagen para Poleras (relativa a assets/)
    },
    {
      nombre: 'Pantalones',
      descripcion: 'Pantalones Urbanos $19.990',
      imagen: 'pantalones.jpg' // Ruta de la imagen para Pantalones (relativa a assets/)
    },
    {
      nombre: 'Zapatillas',
      descripcion: 'Zapatillas Deportivas $29.000',
      imagen: 'zapatillas.jpg' // Ruta de la imagen para Zapatillas (relativa a assets/)
    },
    {
      nombre: 'Jockeys',
      descripcion: 'Modelos 2024 $14.990',
      imagen: 'jockeys.jpg' // Ruta de la imagen para Jockeys (relativa a assets/)
    },
  ];

  constructor(private cartService: CartService) {}

  agregarAlCarro(producto: Producto) {
    this.cartService.addToCart(producto);
    console.log(`${producto.nombre} agregado al carro de compras.`);
  }

  getImagenPath(nombreImagen: string): string {
    return `assets/${nombreImagen}`; // Ajusta según la estructura de tu proyecto
  }
}

interface Producto {
  nombre: string;
  descripcion: string;
  imagen: string; // Agrega la propiedad imagen al Producto
}
