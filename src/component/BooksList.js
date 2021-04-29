import { Link } from "react-router-dom";
import Book from "./Book";

const BooksList = ({ booksInfo, handleFavorite }) => {
  return (
    <div className='books-container'>
      {booksInfo.map((book) => (
        <Book handleFavorite={handleFavorite} key={book.isbn} {...book} />
      ))}
    </div>
  );
};

export default BooksList;
