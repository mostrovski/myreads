import PropTypes from 'prop-types';
import { useState } from 'react';

function Book({ bookData, onShelfChange }) {
    const [moving, setMoving] = useState(false);

    function handleShelfChange(event) {
        setMoving(true);
        onShelfChange(bookData.id, event.target.value);
    }

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${bookData.imageLinks.thumbnail})`,
                        opacity: moving ? '30%' : '100%',
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select onChange={event => handleShelfChange(event)}>
                        <option value="none" disabled>
                            Move to...
                        </option>
                        <option
                            value="currentlyReading"
                            selected={bookData.shelf === 'currentlyReading'}
                        >
                            Currently Reading
                        </option>
                        <option
                            value="wantToRead"
                            selected={bookData.shelf === 'wantToRead'}
                        >
                            Want to Read
                        </option>
                        <option
                            value="read"
                            selected={bookData.shelf === 'read'}
                        >
                            Read
                        </option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{bookData.title}</div>
            <div className="book-authors">{bookData.authors.join(', ')}</div>
        </div>
    );
}

Book.propTypes = {
    bookData: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired,
};

export default Book;
