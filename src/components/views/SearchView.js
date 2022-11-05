import * as API from '../../services/BooksAPI';
import BookList from '../BookList';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';

function SearchView({ selectedBooks, onShelfChange }) {
    const maxResults = 20;
    const searchInputEl = useRef(null);

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        searchInputEl.current.focus();
    }, []);

    const handleSearchInput = debounce(query => {
        if (query.length < 3) {
            return setSearchResults([]);
        }

        API.search(query, maxResults).then(results => {
            if (Array.isArray(results)) {
                setSearchResults(
                    results.map(result => {
                        result.shelf =
                            selectedBooks.find(book => book.id === result.id)
                                ?.shelf ?? 'none';
                        return result;
                    })
                );
            }
        });
    }, 500);

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search" />

                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        ref={searchInputEl}
                        onInput={event => handleSearchInput(event.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <BookList books={searchResults} onShelfChange={onShelfChange} />
            </div>
        </div>
    );
}

SearchView.propTypes = {
    selectedBooks: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
};

export default SearchView;
