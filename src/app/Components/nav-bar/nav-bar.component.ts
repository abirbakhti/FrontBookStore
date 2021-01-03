import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/Service/authentication.service';
import { CartService } from 'src/app/Service/cart.service';
declare var $:any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() toggleSideBarForMe :EventEmitter<any>= new EventEmitter();
  
  count=0;

  constructor(public cartService:CartService, private authService: AuthenticationService) { }
  
 
  ngOnInit(): void {
  }

  sideBarToggler(){
    this.toggleSideBarForMe.emit();
  }

  logout(){
    this.authService.logOut();
  }
}
