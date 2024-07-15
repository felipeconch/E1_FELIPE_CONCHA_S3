import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  productos: Producto[] = [
    {
      nombre: 'Poleras',
      descripcion: 'Poleras Manga Corta 100% Algodón $9.990',
      imagen: 'poleras.jpg'
    },
    {
      nombre: 'Pantalones',
      descripcion: 'Pantalones Urbanos $19.990',
      imagen: 'pantalones.jpg'
    },
    {
      nombre: 'Zapatillas',
      descripcion: 'Zapatillas Deportivas $29.000',
      imagen: 'zapatillas.jpg'
    },
    {
      nombre: 'Jockeys',
      descripcion: 'Modelos 2024 $14.990',
      imagen: 'jockeys.jpg'
    },
  ];

  images: any[] = [];
  toastMessage: string = ''; // Inicializa con una cadena vacía
  toastDuration: number = 2000; // Duración del toast en milisegundos
  isToastOpen: boolean = false;

  constructor(private cartService: CartService, private imageService: ImageService) {}

  ngOnInit() {
    this.imageService.getImages().subscribe(data => {
      this.images = data;
      this.mapImagesToProducts();
    });
  }

  agregarAlCarro(producto: Producto) {
    this.cartService.addToCart(producto);
    console.log(`${producto.nombre} agregado al carro de compras.`);
    this.mostrarToast(`${producto.nombre} agregado al carro de compras.`);
  }

  getImagenPath(nombreImagen: string): string {
    const image = this.images.find(img => img.url.includes(nombreImagen));
    return image ? image.url : 'assets/default.jpg';
  }

  mostrarToast(mensaje: string) {
    this.toastMessage = mensaje;
    this.isToastOpen = true;
  }

  private mapImagesToProducts() {
    this.productos.forEach(producto => {
      const image = this.images.find(img => img.url.includes(producto.imagen));
      if (image) {
        producto.imagen = image.url;
      }
    });
  }
}

interface Producto {
  nombre: string;
  descripcion: string;
  imagen: string;
}
