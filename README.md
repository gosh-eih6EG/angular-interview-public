# Front End Developer Interview

This project is a simple, single-page application.
On the left hand side it shows a list of available books.
User can select books to add and remove them from their collection, which shows up on the right hand side

In the code you can find `TODO` comments which are the tasks for you to complete.

## Development environment setup

Make sure you have NodeJS installed (version 18.19.1 and up)

Run `npm install`

To start the project run `npm run start`

## Tasks

### Making HTTP call

Currently, the application shows a static list of books.
Instead, we want to see list of books retrieved from a public Google API: https://www.googleapis.com/books/v1/volumes'

Open `books.service.ts` file. The application now uses the `getMockBooks()` method.

1. Uncomment the `getBooks()` method and complete its implementation to return results retrieved from the API over HTTP call using the url: https://www.googleapis.com/books/v1/volumes?orderBy=relevance&q=Harry%20Potter
2. Change method usage in `HomeComponent`
3. The url above contains query parameters. Instead of providing them directly in the url, use query parameters in the HTTP request dynamically.
4. Add `query` parameter (string) to the method `getBooks()`. Use the parameter to set the query parameters dynamically

### NgRx Effects

Now, instead of calling this method directly in `HomeComponent`, we want to do that using NgRx Store.

1. Open `books.effects.ts` and add an effect. It should act on action `BooksActions.Search` and return `BooksApiActions.retrievedBookList` with results provided by the `getBooks` method from `BooksService`
2. In `HomeComponent` replace the `getBooks` usage with dispatching of the `Search` action

### Forms

In this step we want to add an input to this page. User will use it to search for books.

1. Open `form.component.ts`. Uncomment its HTML template
2. In `form.component.ts` add form group which should control the form inputs (text input and checkbox)
3. Form value should be submitted on button click and using the method `onSubmit`.
   - Complete implementation of `onSubmit` - emit `enter` only if the form is valid
   - Disable the button if the form is invalid.
4. Add form validators to the form group
   - search string should not be empty
   - its length should be greater than 2
   - it should contain at least 2 separate words (custom validator)

### Tests

Complete tests in `book.component.spec.ts` and `books.effects.spec.ts`

### Selectors

We now want to filter the available books - it should only display the books which have NOT been added to user's collection.

1. Open `books.selectors.ts`
2. Write the `selectAvailableBooks` selector. It should only select books which are not present in user's collection
   - You can use `selectCollection` selector to get state of user's collection
3. Change the selector in `HomeComponent`

### Loader

When the books are retrieved from API, we'd like to show the user a loader to indicate that we're awaiting response.
Implement it in `HomeComponent`

### Permissions

1. Uncomment code in `app.component.html`

You can see there are two main pages in the application: `HomeComponent` and `AdminComponent`
We want to restrict navigation based on user role.

User role is retrieved with `hasRole` method in `UserService`. 2. Write a route guard which will verify that the user has appropriate permissions to enter the page 3. Add that guard to route config in `app.routes.ts`
