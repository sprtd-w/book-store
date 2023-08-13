import { Injectable } from "@angular/core";
import { HttpBaseService } from "./http-base.service";
import { Article } from "../../models/article";
import { map, Observable, shareReplay } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService extends HttpBaseService {
  getArticles(params: Partial<Article>): Observable<Article[]> {
    return this.http.get<{ payload: Article[]}>('/api/articles', { params })
      .pipe(
        map(res => res.payload),
        shareReplay(),
      );
  }
}
