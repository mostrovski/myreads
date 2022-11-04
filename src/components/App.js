import '../assets/App.css';
import * as API from '../services/BooksAPI';
import IndexView from './views/IndexView';
import SearchView from './views/SearchView';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
    const [books, setBooks] = useState([]);

    function onShelfChange(bookToUpdate, shelf) {
        API.update({ id: bookToUpdate.id }, shelf).then(() => {
            bookToUpdate.shelf = shelf;
            setBooks(
                books
                    .filter(book => book.id !== bookToUpdate.id)
                    .concat(bookToUpdate)
            );
        });
    }

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
