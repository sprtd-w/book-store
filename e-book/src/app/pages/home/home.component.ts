import { Component, EventEmitter, OnDestroy, OnInit } from "@angular/core";
import { Book, sortCoursesBySeqNo } from "../../models/book";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { BooksService } from "../../core/services/books.service";
import { LevelEnum } from "../../enums/level.enum";
import { BehaviorSubject, filter, map, Observable, Subject, switchMap, takeUntil } from "rxjs";
import { BookDialogComponent } from "./components/book-dialog/book-dialog.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  books$: Observable<Book[]>;
  beginnerBooks$: Observable<Book[]>;
  advancedBooks$: Observable<Book[]>;
  private getData$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private unsubscribe$: Subject<any> = new Subject<any>();

  constructor(private booksService: BooksService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.books$ = this.getData$.pipe(
      switchMap(() => this.booksService.getBooks().pipe(map(books => books.sort(sortCoursesBySeqNo)))),
    );

    this.beginnerBooks$ = this.books$.pipe(
      map(books => books.filter(book => book.category == LevelEnum.BEGINNER))
    );

    this.advancedBooks$ = this.books$.pipe(
      map(books => books.filter(book => book.category == LevelEnum.ADVANCED))
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }

  editBookHandler(book: Book): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    dialogConfig.data = book;

    const dialogRef = this.dialog.open(BookDialogComponent, dialogConfig);

    dialogRef.afterClosed()
      .pipe(
        filter(res => !!res),
        switchMap(changes => this.booksService.saveBook(book.id, changes))
    ).subscribe((res: Partial<Book>) => {
      this.getData$.next(true);
    });
  }
}
