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

    const onShelfChange = (book, newShelf) => {
        const oldShelf = book.shelf;

        if (oldShelf === newShelf) {
            return;
        }

        moveBook(book, newShelf);

        API.update({ id: book.id }, newShelf).catch(error => {
            console.log(error);
            moveBook(book, oldShelf);
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
