// cart.page.ts
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CartService } from '../services/cart.service'; // Ajusta la ruta según la estructura de tu proyecto

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
  cartItems: any[] = [];

  constructor(
    private navCtrl: NavController,
    private cartService: CartService
  ) {}

  ionViewWillEnter() {
    this.cartItems = this.cartService.getCartItems();
    console.log('Productos en el carrito:', this.cartItems); // Verifica si se están recuperando los productos correctamente
  }

  realizarPago() {
    // Lógica para realizar el pago aquí (puede ser una simulación)
    // Mostrar mensaje de confirmación
    alert('Gracias por tu compra!');
    
    // Navegar a la página de inicio después de 1 segundo
    setTimeout(() => {
      this.navCtrl.navigateRoot('/home'); // Redirige a la página de inicio
    }, 1000); // 1000 milisegundos = 1 segundo
  }
}
