import PropTypes from 'prop-types';

function Book({ bookData, onShelfChange }) {
    const handleShelfChange = newShelf => {
        onShelfChange(bookData, newShelf);
    };

    const handleDragStart = event => {
        event.dataTransfer.setData('book_id', bookData.id);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <div
            className="book"
            draggable="true"
            onDragStart={event => handleDragStart(event)}
        >
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${bookData.imageLinks?.thumbnail})`,
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select
                        onChange={event =>
                            handleShelfChange(event.target.value)
                        }
                        value={bookData.shelf}
                    >
                        <option value="" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">
                            Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{bookData.title}</div>
            <div className="book-authors">{bookData.authors?.join(', ')}</div>
        </div>
    );
}

Book.propTypes = {
    bookData: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired,
};

export default Book;
