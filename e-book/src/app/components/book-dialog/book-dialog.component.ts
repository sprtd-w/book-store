import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Book } from "../../models/book";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import * as moment from "moment";

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.scss']
})
export class BookDialogComponent {
  form: FormGroup = new FormGroup<{}>({});
  course: Book;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) course:Book) {

    this.course = course;

    this.form = fb.group({
      description: [course.description, Validators.required],
      category: [course.category, Validators.required],
      releasedAt: [moment(), Validators.required],
      longDescription: [course.longDescription,Validators.required]
    });
  }

  save() {
    const changes = this.form.value;
  }

  close() {
    this.dialogRef.close();
  }
}
