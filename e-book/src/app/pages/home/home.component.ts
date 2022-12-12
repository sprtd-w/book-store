import { Component } from '@angular/core';
import { Book, sortCoursesBySeqNo } from "../../models/book";
import { HttpClient } from "@angular/common/http";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { BookDialogComponent } from "../../components/book-dialog/book-dialog.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  beginnerBooks: Book[] = [];
  advancedBooks: Book[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.http.get('/api/books')
      .subscribe((res: any) => {
          const courses: Book[] = res["payload"].sort(sortCoursesBySeqNo);
          this.beginnerBooks = courses.filter(book => book.category == "BEGINNER");
          this.advancedBooks = courses.filter(book => book.category == "ADVANCED");
        });
  }

  editBook(course: Book) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    dialogConfig.data = course;

    const dialogRef = this.dialog.open(BookDialogComponent, dialogConfig);
  }
}
