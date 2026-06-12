function EmptyContentPlaceholder() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2rem',
                opacity: '75%',
                rotate: '15deg',
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

export default EmptyContentPlaceholder;
