import { Component, OnInit, Input } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  onStock;
  @Input() public title;
  @Input() public price=100;
  @Input() public picture="../../assets/book1.jpg";
  @Input() public quantity;
  
  constructor() { }

  ngOnInit(): void {
    this.onStock=this.CheckStock();
  }

  CheckStock(){
    if(this.quantity>=1){
      return true;
    }else{
      return false;
    }
    
  }

}
