# MyReads

## A demo React project showcasing work with the library basics, such as components, state, hooks, event handlers, and routing.

### Minimum requirements

#### UI:

- The main page should show three categories (or “bookshelves”) for books, i.e., "Currently Reading", "Want to Read", and "Read";
- The main page should allow users to move books between shelves;
- Information should persist between page refreshes;
- The search page should have a search input that allows users to search for books;
- The search results should allow a user to categorize a book as "Currently Reading", "Want to Read", or "Read";
- Selections made on the search page should show up on the main page;
- The main page should link to the search page and the other way around.

#### Code:

- Handle state appropriately;
- Use functional components;
- Follow best practices.

### Approach

The external API provides the book data for the app:
- there is a default array of books;
- each default book object contains the `shelf` attribute;
- changes are persisted per authorization token.

With this in mind, building the main page was pretty straightforward:
- fetch the (default) array of books on component mount with `useEffect` to the state;
- each shelf gets own books based on the `shelf` attribute of each book;
- moving the book to the other shelf is effectively changing its `shelf` attribute, persisting this update, and reflecting it in the state.

Since the `Shelf` component was only relevant for the main page, I decided to
introduce an additional layer - the `BookList` component - to be able to reuse
the `Book` components on the search page.

Building the search page turned out to be a little bit tricky, mainly because of
the API response from the search endpoint:
- it did not always return an array of books;
- the book object was slightly different from the one on the main page.

Noticing that books in search results were at least missing the `shelf` attribute,
I opted for the internal piece of state in the search component. While setting the
search results, it would query the main state to check if the currently rendered book
is already there, and if so - use its `shelf` value, otherwise - "none". As a result
of this "upgrade", there would be the `BookList` of the exact same shape as on the
main page, so that one could entirely reuse the "moving" logic.

Since the search was meant to be "live", the topic of debouncing came up naturally.
I solved it with a help of [lodash.debounce](https://docs-lodash.com/v4/debounce/).

The rest was about some UI/UX tweaks:
- focusing the search input automatically;
- implementing drag-and-drop functionality to move books between shelves on the main page;
- signalling the "dirty" state of the moving book, etc.

### How to run it

1. Make sure you have [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed.
2. Clone, or download and extract the repository.
3. Change to the root of the project.
4. Run `npm install` to install the dependencies.
5. Run `npm start` to initiate the development build.
6. In your terminal, you should see something like this:

   ```bash
   Compiled successfully!

   You can now view myreads in the browser.

     Local:            http://localhost:3000
     On Your Network:  http://<your-ip>:3000

   Note that the development build is not optimized.
   To create a production build, use npm run build.

   webpack compiled successfully
   ```
7. If it didn't happen automatically during the build, open provided link in your browser.

### Kudos

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The starter code and project requirements were provided as a part of the [React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019) at Udacity.