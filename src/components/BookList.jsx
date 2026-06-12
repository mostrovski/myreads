import Book from './Book';
import EmptyContentPlaceholder from './EmptyContentPlaceholder';
import PropTypes from 'prop-types';

function BookList({ books, onShelfChange }) {
    return books.length ? (
        <ol className="books-grid">
            {books.map(book => (
                <li key={book.id}>
                    <Book bookData={book} onShelfChange={onShelfChange} />
                </li>
            ))}
        </ol>
    ) : (
        <EmptyContentPlaceholder />
    );
}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
};

export default BookList;
