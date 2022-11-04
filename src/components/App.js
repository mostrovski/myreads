import '../assets/App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import * as API from '../services/BooksAPI';
import IndexView from './views/IndexView';
import SearchView from './views/SearchView';

function App() {
    const [books, setBooks] = useState([]);

    function onShelfChange(bookId, shelf) {
        const bookToUpdate = books.find(book => book.id === bookId);

        if (bookToUpdate) {
            API.update({ id: bookToUpdate.id }, shelf).then(() => {
                bookToUpdate.shelf = shelf;
                setBooks(
                    books
                        .filter(book => book.id !== bookToUpdate.id)
                        .concat(bookToUpdate)
                );
            });
        }
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

            <Route exact path="/search" element={<SearchView />} />
        </Routes>
    );
}

export default App;
