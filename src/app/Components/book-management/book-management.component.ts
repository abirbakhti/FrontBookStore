import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from 'src/app/book';
import { BookService } from 'src/app/Service/book.service';
import { AddBookComponent } from '../add-book/add-book.component';
//modal 
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css']
})
export class BookManagementComponent implements OnInit {

  private bookForm:FormGroup;
  length;
  books;
  role="client";
  
  constructor(private ServiceBook:BookService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBooks();
    this.bookForm=new FormGroup({
      id:new FormControl('0'),
      title:new FormControl(),
      author:new FormControl(),
      date:new FormControl(),
      price:new FormControl(),
      picture:new FormControl(),
      quantity:new FormControl()
    }) 
  }

  getBooks(){
    this.ServiceBook.getBooks().subscribe(res =>{
      this.books=res;
      this.length=this.books.length;
    })
  }

  clickAddBook(){
    let dialogRef=this.dialog.open(AddBookComponent,{
      data:this.bookForm.value,
      width: 'auto',
      height:'auto',
      
    });
    dialogRef.afterClosed().subscribe(()=>{
      this.getBooks();
    })
  }

  delete(id){
    this.ServiceBook.deleteBook(id).subscribe(()=>{
      this.getBooks();
    });
  }

  clickUpdateBook(b:Book){
    let dialogRef=this.dialog.open(AddBookComponent,{
      data:b,
      width: 'auto',
      height:'auto',
    });
    dialogRef.afterClosed().subscribe(()=>{
      this.getBooks();
    })
  }

}
