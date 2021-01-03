import { Component, OnInit } from '@angular/core';
import { Book } from '../../book';
import { BookService } from '../../Service/book.service';
//modal 
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  length;
  books;
  role="client";
  
  constructor(private ServiceBook:BookService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.ServiceBook.getBooks().subscribe(res =>{
      this.books=res;
      this.length=this.books.length;
    })
  }

}