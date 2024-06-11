import { useState, useEffect } from "react";

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookshelf(storedBookshelf);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">My Bookshelf</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookshelf.map((book, index) => (
          <div key={index} className="border p-4 rounded">
            <h2 className="text-xl font-bold">{book.title}</h2>
            <p>{book.author_name?.join(", ")}</p>
          </div>
        ))}
      </div>
      <a
        href="/"
        className="mt-4 inline-block bg-blue-500 text-white p-2 rounded"
      >
        Back to Search
      </a>
    </div>
  );
};

export default BookshelfPage;
