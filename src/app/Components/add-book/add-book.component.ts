import { Component, OnInit, Inject } from '@angular/core';
import { BookService } from 'src/app/Service/book.service';

//reactive forms
import { FormGroup, FormControl, Validators } from '@angular/forms';
//Modal
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;
  title;
  books;

  constructor(public dialogRef: MatDialogRef<AddBookComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public BookService: BookService) {

  }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      id: new FormControl(this.data.id, [Validators.required]),
      title: new FormControl(this.data.title, [Validators.required]),
      author: new FormControl(this.data.author, [Validators.required]),
      date: new FormControl(this.data.date, [Validators.required]),
      price: new FormControl(this.data.price, [Validators.required]),
      picture: new FormControl(this.data.picture),
      quantity: new FormControl(this.data.quantity, [Validators.required])
    })
    this.handleTitle();
  }

  save() {
    if (this.bookForm.controls["id"].value == '0') {
      this.BookService.postBook(this.bookForm.value).subscribe();
    }
    else {
      this.BookService.updateBook(this.bookForm.value).subscribe();
    }
  }

  handleTitle() {
    if (this.bookForm.controls["id"].value == '0') {
      this.title = 'Add Book'
    } else {
      this.title = 'Update Book';
    }
  }
}