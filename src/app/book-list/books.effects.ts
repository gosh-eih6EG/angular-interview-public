import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GoogleBooksService } from './books.service';
import { Injectable } from '@angular/core';
import { BooksActions, BooksApiActions } from './books.actions';
import { map, switchMap } from 'rxjs';

@Injectable()
export class BooksEffects {
  constructor(
    private actions$: Actions,
    private booksService: GoogleBooksService,
  ) {}

  // TODO 1: add effect for fetching books
  searchBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.search),
      switchMap(({ query }) =>
        this.booksService.getBooks(query).pipe(map((books) => BooksApiActions.retrievedBookList({ books }))),
      ),
    ),
  );
}
