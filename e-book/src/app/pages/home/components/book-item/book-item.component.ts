import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "../../../../models/book";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {
  @Input() book: Book;

  @Output() editBookEvent: EventEmitter<Book> = new EventEmitter<Book>();

  editBook(book: Book): void {
    this.editBookEvent.emit(book);
  }

}
