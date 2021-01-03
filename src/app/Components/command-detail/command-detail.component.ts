import { Component, Inject, OnInit } from '@angular/core';
//modal 
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-command-detail',
  templateUrl: './command-detail.component.html',
  styleUrls: ['./command-detail.component.css']
})
export class CommandDetailComponent implements OnInit {
books

  constructor(public dialogRef: MatDialogRef<CommandDetailComponent>, @Inject(MAT_DIALOG_DATA) public data: any)  { }

  ngOnInit(): void {
   this.books=this.data
  }

}
