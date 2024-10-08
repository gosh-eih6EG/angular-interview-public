import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from '../../book-list/book-list.component';
import { BookCollectionComponent } from '../../book-collection/book-collection.component';
import { FormComponent } from '../../form/form.component';
import { selectBooks } from '../../book-list/books.selectors';
import { selectCollection } from '../../book-collection/collections.selectors';
import { GoogleBooksService } from '../../book-list/books.service';
import { Store } from '@ngrx/store';
import { BooksActions, BooksApiActions } from '../../book-list/books.actions';
import { Book } from '../../book-list/books.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BookListComponent, BookCollectionComponent, FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectCollection);

  constructor(
    private booksService: GoogleBooksService,
    private store: Store,
  ) {}

  onSearch(query: string) {
    this.store.dispatch(BooksActions.search({ query }));
  }

  onAdd(book: Book) {
    this.store.dispatch(BooksActions.addBook({ book }));
  }

  onRemove(book: Book) {
    this.store.dispatch(BooksActions.removeBook({ book }));
  }

  ngOnInit() {
    // TODO 1: call GoogleBooksService to get list of books
    // TODO 2: change to NgRx Effect (dispatch action instead of using service directly)
    this.booksService
      .getMockBooks()
      .subscribe((books) => this.store.dispatch(BooksApiActions.retrievedBookList({ books })));
  }
}
