import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCardComponent } from './Components/book-card/book-card.component';
import { BooklistComponent } from './Components/booklist/booklist.component';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';


import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { DefaultComponent } from './Components/default/default.component';
import { MatNativeDateModule } from '@angular/material/core';
import { LoginComponent } from './Components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    BooklistComponent,
    AddBookComponent,
    SideBarComponent,
    NavBarComponent,
    DefaultComponent,
    LoginComponent,

  ],
  entryComponents:[AddBookComponent]
  ,
  imports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
