import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, shareReplay } from "rxjs";
import { Book } from "../../models/book";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<{ payload: Book[]}>('/api/books')
      .pipe(
        map(res => res.payload),
        shareReplay(),
      );
  }
}
