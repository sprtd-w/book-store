import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { LoginComponent } from "./pages/login/login.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  // {
  //   path:"search-articles",
  //   component: SearchArticlesComponent
  // },
  {
    path: 'about',
    component: AboutComponent
  },
  // {
  //   path: 'books/:courseId',
  //   component: BooksComponent
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
