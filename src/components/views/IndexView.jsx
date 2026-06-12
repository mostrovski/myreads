import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Shelf from '../Shelf';

function IndexView({ books, onShelfChange }) {
    return (
        <div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
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
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    paddingBottom: '2rem',
                }}
            >
                <Link
                    to="/search"
                    style={{
                        border: 'solid',
                        borderColor: '#1074e7',
                        borderRadius: '0.5rem',
                        color: '#1074e7',
                        padding: '0.5rem 1rem',
                        textDecoration: 'none',
                    }}
                >
                    Search Books
                </Link>
            </div>
        </div>
    );
}

IndexView.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
};

export default IndexView;
