import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from "./home-routing.module";
import { BookListComponent } from "./components/book-list/book-list.component";
import { HomeComponent } from "./home.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { SharedModule } from "../../shared/shared.module";
import { BookViewComponent } from './components/book-view/book-view.component';
import { BookItemComponent } from "./components/book-item/book-item.component";
import { BookEditDialogComponent } from "./components/book-edit-dialog/book-edit-dialog.component";
import { BookEditComponent } from "./components/book-edit/book-edit.component";



@NgModule({
  declarations: [
    HomeComponent,
    BookEditDialogComponent,
    BookListComponent,
    BookItemComponent,
    BookViewComponent,
    BookEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,

    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    SharedModule
  ]
})
export class HomeModule { }
