import '../assets/App.css';
import { useState, useEffect } from 'react';
import * as API from '../services/BooksAPI';
import Shelf from './Shelf';

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
        <div className="app">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf
                            type="currentlyReading"
                            books={books}
                            onShelfChange={onShelfChange}
                        />
                        <Shelf
                            type="wantToRead"
                            books={books}
                            onShelfChange={onShelfChange}
                        />
                        <Shelf
                            type="read"
                            books={books}
                            onShelfChange={onShelfChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
