import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { BookViewComponent } from "./components/book-view/book-view.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'books/:bookId',
    component: BookViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
