import { Component, OnInit } from '@angular/core';
import { CommandService } from 'src/app/Service/command.service';
//modal 
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommandDetailComponent } from '../command-detail/command-detail.component';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {
  length=0
  commands
  commandDetail
  
  constructor(public CommandService:CommandService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCommand();
  }


  getCommand(){
    this.CommandService.getCommands().subscribe(res =>{
      this.commands=res;
      this.length=this.commands.length;
    })
  }

  showDetail(id){
    this.CommandService.showDetail(id).subscribe(res=>{this.commandDetail=res
      let dialogRef=this.dialog.open(CommandDetailComponent,{
        data:this.commandDetail,
        width: 'auto',
        height:'auto',
        
      });
      dialogRef.afterClosed().subscribe(()=>{
        this.getCommand();
      })
     } )
  }
}
