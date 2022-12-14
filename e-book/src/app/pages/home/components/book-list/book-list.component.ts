import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "../../../../models/book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  @Input() books: Book[] | null;
  @Output() editBookClicked: EventEmitter<Book> = new EventEmitter<Book>();

  bookItemEditClicked(book: Book): void {
    this.editBookClicked.emit(book);
  }

}
