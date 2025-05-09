import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  const handleInputChange = (event) => {
    // console.log(event.target);
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event, newBook) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: "", author: "" });
  };

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <form onSubmit={(event) => handleSubmit(event, newBook)}>
            <label htmlFor="title" name="title" id="title">
              Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={newBook.title}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              name="author"
              id="author"
              value={newBook.author}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="bookCardsDiv">
          {books.map((book, i) => {
            return (
              <div key={i} className="bookCard">
                <p>
                  <strong>{book.title}</strong>
                </p>
                <p>by {book.author}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Bookshelf;
