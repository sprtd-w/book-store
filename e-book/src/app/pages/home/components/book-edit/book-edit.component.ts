import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "../../../../models/book";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent {
  @Input() book: Book;

  @Output() editBookEvent: EventEmitter<Book> = new EventEmitter<Book>();

  editBook(book: Book): void {
    this.editBookEvent.emit(book);
  }

}
