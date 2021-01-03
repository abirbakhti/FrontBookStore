import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  onStock;
  onCart;
  title;
  price;
  picture;
  quantity;
  @Input() book;

  constructor(public cartService:CartService) { }

  ngOnInit(): void {
    this.title = this.book.title;
    this.price = this.book.price;
    this.quantity = this.book.quantity;
    this.picture=this.book.picture;
    this.onStock = this.CheckStock();
  }

  CheckStock() {
    if (this.quantity >= 1) {
      return true;
    } else {
      return false;
    }
  }



  addToCart(){
    this.cartService.addToCart(this.book);
    console.log(this.book)
  }

}
