import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import * as moment from "moment";
import { Book } from "../../../../models/book";

@Component({
  selector: 'app-book-edit-dialog',
  templateUrl: './book-edit-dialog.component.html',
  styleUrls: ['./book-edit-dialog.component.scss']
})
export class BookEditDialogComponent implements AfterViewInit {
  form: FormGroup = new FormGroup<{}>({});
  book: Book;

  @ViewChild('saveButton') saveButton: ElementRef;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BookEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) book: Book) {

    this.book = book;

    this.form = fb.group({
      description: [book.description, Validators.required],
      category: [book.category, Validators.required],
      releasedAt: [moment(), Validators.required],
      longDescription: [book.longDescription, Validators.required]
    });
  }

  ngAfterViewInit(): void {
    // fromEvent(this.saveButton.nativeElement, 'click')
    //   .pipe(
    //     exhaustMap(() => this.form.value),
    //   ).subscribe(null);

  }

  save() {
    const patch: {[key: string]: any } = this.getPatch();
    this.dialogRef.close(patch);
  }

  close() {
    this.dialogRef.close();
  }

  private getPatch(): any {
    const book = this.book as {[key: string]: any };
    const patch: {[key: string]: any } = {};

    for (const [ k, v ] of Object.entries(this.form.value)) {
      if (book[k] !== v) {
        patch[k] = v;
      }
    }

    return patch;
  }
}
