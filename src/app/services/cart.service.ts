// cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = []; // Array para almacenar los productos del carrito

  constructor() {}

  addToCart(product: any) {
    this.cartItems.push(product);
    console.log('Producto agregado al carrito:', product); // Verifica si se está llamando correctamente
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }
}
