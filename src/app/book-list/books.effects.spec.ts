import { TestBed } from '@angular/core/testing';
import { BooksEffects } from './books.effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

describe('BooksEffects', () => {
  let actions$: Observable<Action>;
  let effects: BooksEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(BooksEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should call GoogleBooksService and return BooksApiActions.retrievedBookList action', () => {
    // TODO: complete unit test
  });
});
