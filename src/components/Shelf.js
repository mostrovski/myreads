import BookList from './BookList';
import PropTypes from 'prop-types';

function Shelf({ type, books, onShelfChange }) {
    function titleMap() {
        const map = new Map();

        map.set('currentlyReading', 'Currently Reading');
        map.set('wantToRead', 'Want to Read');
        map.set('read', 'Read');

        return map;
    }

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{titleMap().get(type)}</h2>
            <div className="bookshelf-books">
                <BookList
                    books={books.filter(book => book.shelf === type)}
                    onShelfChange={onShelfChange}
                />
            </div>
        </div>
    );
}

Shelf.propTypes = {
    type: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
};

export default Shelf;
