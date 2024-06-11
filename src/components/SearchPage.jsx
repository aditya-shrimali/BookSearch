import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
import useDebounce from "../hooks/useDebounce";
import ClipLoader from "react-spinners/ClipLoader"; // If using react-spinners

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state
  const debouncedQuery = useDebounce(query, 500); // Debounce delay of 500ms

  useEffect(() => {
    if (debouncedQuery) {
      fetchBooks(debouncedQuery);
    } else {
      setBooks([]);
    }
  }, [debouncedQuery]);

  const fetchBooks = async (searchQuery) => {
    setLoading(true); // Set loading to true when starting fetch
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${searchQuery}&limit=10&page=1`
      );
      setBooks(response.data.docs);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
    setLoading(false); // Set loading to false after fetch
  };

  useEffect(() => {
    fetchBooks("harry potter");
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    if (value) {
      fetchBooks(value);
    } else {
      setBooks([]);
    }
  };

  const addToBookshelf = (book) => {
    let bookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    bookshelf.push(book);
    localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl mb-4">Book Search</h1>
        <a
          href="/bookshelf"
          className="mb-2 bg-blue-500 text-white p-2 rounded"
        >
          Go to My Bookshelf
        </a>
      </div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for books..."
        className="border p-2 w-full mb-4"
      />
      {loading ? (
        <div className="flex justify-center h-[80vh] items-center">
          <ClipLoader size={50} color={"#123abc"} loading={loading} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((book) => (
            <BookCard key={book.key} book={book} onAdd={addToBookshelf} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
