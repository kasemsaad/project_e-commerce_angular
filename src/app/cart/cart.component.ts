import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartData: any;
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getstateOfCart().subscribe((res: any) => {
      this.cartData = res.cartArray;
      this.calculateTotalPrice();
    });
  }

  increment(id: string) {
    this.cartService.increment(id);
    this.calculateTotalPrice();
  }

  decrement(id: any) {
    this.cartService.decrement(id);
    this.calculateTotalPrice();
  }

  remove(id: any) {
    this.cartService.removeFromCart(id);
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartData.reduce((total: number, product: any) => total + (product.price * product.quantity), 0);
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }
}
