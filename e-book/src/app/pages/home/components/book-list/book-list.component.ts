import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "../../../../models/book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  @Input() books: Book[] | null;
  @Output() editBookEvent: EventEmitter<Book> = new EventEmitter<Book>();

  editBook(book: Book): void {
    this.editBookEvent.emit(book);
  }

}
