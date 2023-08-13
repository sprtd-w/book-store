import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from "./services/books.service";
import { ArticlesService } from "./services/articles.service";
import { HttpBaseService } from "./services/http-base.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    HttpBaseService,
    BooksService,
    ArticlesService
  ]
})
export class CoreModule { }
