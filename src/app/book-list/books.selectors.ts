import { createFeatureSelector } from "@ngrx/store";
import { Book } from "./books.model";
import { booksFeatureKey } from "./books.reducer";

export const selectBooks =
  createFeatureSelector<ReadonlyArray<Book>>(booksFeatureKey);

// TODO: write selectAvailableBooks selector - selects only books that are NOT part of collection
