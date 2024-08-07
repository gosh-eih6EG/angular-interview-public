import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { Book } from "./books.model";
import { BOOKS_MOCK } from "./books-mock";

@Injectable({ providedIn: "root" })
export class GoogleBooksService {
  // TODO 1: complete implementation of getBooks()
  //  https://www.googleapis.com/books/v1/volumes?orderBy=relevance&q=Harry%20Potter
  // TODO 2: set query parameters orderBy = "relevance" and q = "Harry Potter"
  // TODO 3: dynamically change q parameter based on method parameter, default value = "Harry Potter"
  // getBooks(query: string): Observable<Array<Book>> {
  //
  // }

  getMockBooks(): Observable<Array<Book>> {
    return of(BOOKS_MOCK);
  }
}
