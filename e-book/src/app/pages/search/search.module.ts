import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from "./search-routing.module";
import { MatInputModule } from "@angular/material/input";



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MatInputModule,
  ]
})
export class SearchModule { }
