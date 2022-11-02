import '../assets/App.css';
import { useState, useEffect } from 'react';
import * as API from '../services/BooksAPI';
import Shelf from './Shelf';

function App() {
    const [books, setBooks] = useState([]);

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
                        <Shelf type="currentlyReading" books={books} />
                        <Shelf type="wantToRead" books={books} />
                        <Shelf type="read" books={books} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
