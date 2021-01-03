import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  CartBooks;
  totalPrice=0;
  constructor(public cartService:CartService) { }

  ngOnInit(): void {
    this.CartBooks=this.cartService.CartBooks;
    this.calculateTotalPrice();
  }


  remove(id){
    this.cartService.remove(id)
    this.calculateTotalPrice()
  }

  calculateTotalPrice(){
    this.CartBooks=this.cartService.CartBooks;
    this.totalPrice=0
    this.CartBooks.forEach(b => {
      this.totalPrice=this.totalPrice+(b.cartQuantity*b.price);
    });
  }

  updateCartQuantity(qte,id){
    this.cartService.updateQuantity(qte,id)
    this. calculateTotalPrice()
  }

  purchase(){
    this.cartService.purchase().subscribe();
    this.CartBooks=this.cartService.CartBooks=[];
  }
}
