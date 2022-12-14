import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import * as moment from "moment";
import { Book } from "../../../../models/book";

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.scss']
})
export class BookDialogComponent {
  form: FormGroup = new FormGroup<{}>({});
  book: Book;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) book: Book) {

    this.book = book;

    this.form = fb.group({
      description: [book.description, Validators.required],
      category: [book.category, Validators.required],
      releasedAt: [moment(), Validators.required],
      longDescription: [book.longDescription, Validators.required]
    });
  }

  save() {
    const changes = this.form.value;
  }

  close() {
    this.dialogRef.close();
  }
}
