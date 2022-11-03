import Book from './Book';
import PropTypes from 'prop-types';

function BookList({ books, onShelfChange }) {
    return (
        <ol className="books-grid">
            {books.map(book => (
                <li key={book.id}>
                    <Book bookData={book} onShelfChange={onShelfChange} />
                </li>
            ))}
        </ol>
    );
}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
};

export default BookList;
