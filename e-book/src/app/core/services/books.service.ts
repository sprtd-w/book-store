import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, shareReplay } from "rxjs";
import { Book } from "../../models/book";
import { HttpBaseService } from "./http-base.service";

@Injectable({
  providedIn: 'root'
})
export class BooksService extends HttpBaseService {

  getBooks(): Observable<Book[]> {
    return this.http.get<{ payload: Book[]}>('/api/books')
      .pipe(
        map(res => res.payload),
        shareReplay(),
      );
  }

  getBook(bookId: string): Observable<Book> {
    return this.http.get<Book>(`/api/books/${bookId}`);
  }

  saveBook(bookId: string, changes: Partial<Book>): Observable<Partial<Book>> {
    return this.http.put<Partial<Book>>(`/api/books/${bookId}`, changes).pipe(shareReplay());
  }
}
