import { useState } from "react";
import "./App.css";
import books from "./data";
import BooksList from "./component/BooksList";
import BookClub from "./component/BookClub";

function App() {
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = (bookInfo) => {
    setFavorites([...favorites, bookInfo]);
  };

  return (
    <div className='App'>
      <BookClub favoritesList={favorites} />
      <BooksList handleFavorite={handleFavorite} booksInfo={books} />
    </div>
  );
}

export default App;
