import '../assets/App.css';
import * as API from '../services/BooksAPI';
import IndexView from './views/IndexView';
import SearchView from './views/SearchView';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
    const [books, setBooks] = useState([]);

    const moveBook = (movingBook, shelf) => {
        setBooks(
            books
                .filter(book => book.id !== movingBook.id)
                .concat({ ...movingBook, shelf })
        );
    };

    const onShelfChange = (bookToUpdate, shelf) => {
        if (bookToUpdate.shelf === shelf) {
            return;
        }

        const oldShelf = bookToUpdate.shelf;

        moveBook(bookToUpdate, shelf);

        API.update({ id: bookToUpdate.id }, shelf).catch(error => {
            console.log(error);
            moveBook(bookToUpdate, oldShelf);
            alert('Something went wrong. Try again!');
        });
    };

    useEffect(() => {
        API.getAll().then(books => setBooks(books));
    }, []);

    return (
        <Routes>
            <Route
                exact
                path="/"
                element={
                    <IndexView books={books} onShelfChange={onShelfChange} />
                }
            />

            <Route
                exact
                path="/search"
                element={
                    <SearchView
                        selectedBooks={books}
                        onShelfChange={onShelfChange}
                    />
                }
            />
        </Routes>
    );
}

export default App;
