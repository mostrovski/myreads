import Book from './Book';
import BookPlaceholder from './BookPlaceholder';
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
        <BookPlaceholder />
    );
}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
};

export default BookList;
