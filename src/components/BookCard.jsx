import PropTypes from "prop-types";

const BookCard = ({ book, onAdd }) => {
  // Add 'book' to props validation
  BookCard.propTypes = {
    book: PropTypes.object.isRequired,
    onAdd: PropTypes.func.isRequired,
  };
  return (
    <div className="border p-4 rounded">
      <h2 className="text-xl font-bold">{book.title}</h2>
      <p>{book.author_name?.join(", ")}</p>
      <p>Year: {book.first_publish_year}</p>
      <p>Edition Count:{book.edition_count}</p>
      <button
        onClick={() => onAdd(book)}
        className="mt-2 bg-green-500 text-white p-2 rounded"
      >
        Add to Bookshelf
      </button>
    </div>
  );
};

export default BookCard;
