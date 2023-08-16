import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, of, tap } from "rxjs";

@Injectable()
export class LoadingService {
  private notifyLoading$ = new BehaviorSubject<boolean>(false);
  isLoading$: Observable<boolean> = this.notifyLoading$.asObservable();

  showLoaderUntilComplete<T>(o: T): Observable<T> {
    return of(null)
      .pipe(
        tap(() => this.loadingStart()),
        map(() => o),
        tap(() => {
          this.loadingComplete();
        }),
      );
  }

  loadingStart(): void {
    console.log('loadingStart');
    this.notifyLoading$.next(true);
  }

  loadingComplete(): void {
    console.log('loadingComplete');
    this.notifyLoading$.next(false);
  }
}
