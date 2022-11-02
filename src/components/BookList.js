import Book from './Book';
import PropTypes from 'prop-types';

function BookList({ books }) {
    return (
        <ol className="books-grid">
            {books.map(book => (
                <li>
                    <Book data={book} />
                </li>
            ))}
        </ol>
    );
}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
};

export default BookList;
