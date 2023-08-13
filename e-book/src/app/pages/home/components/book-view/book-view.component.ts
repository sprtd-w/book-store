import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Book } from "../../../../models/book";
import { BooksService } from "../../../../core/services/books.service";
import { Article } from "../../../../models/article";
import { ArticlesService } from "../../../../core/services/articles.service";

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {
  bookId: string;
  book$: Observable<Book>;
  articles$: Observable<Article[]>;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private articlesService: ArticlesService,
  ) {
  }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['bookId'];
    this.book$ = this.booksService.getBook(this.bookId);
    this.articles$ = this.articlesService.getArticles({ bookId: this.bookId });
  }

}
