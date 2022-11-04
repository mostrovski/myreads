function BookPlaceholder() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                opacity: '75%',
            }}
        >
            <img
                src="/img/empty.jpg"
                alt="It's empty here..."
                style={{ width: 128, height: 193 }}
            />
        </div>
    );
}

export default BookPlaceholder;
