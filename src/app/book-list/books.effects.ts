import { Actions } from '@ngrx/effects';
import { GoogleBooksService } from './books.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BooksEffects {
  constructor(
    private actions$: Actions,
    private booksService: GoogleBooksService,
  ) {}

  // TODO 1: add effect for fetching books
}
