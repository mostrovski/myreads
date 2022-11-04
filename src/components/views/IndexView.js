import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Shelf from '../Shelf';

function IndexView({ books, onShelfChange }) {
    return (
        <div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
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
                    style={{ textDecoration: 'none', color: '#2e7c31' }}
                >
                    Search Books &#10230;
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
