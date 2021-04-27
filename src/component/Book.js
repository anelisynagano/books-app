import { useState } from "react";

const Book = ({ image, title }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={image} alt='book cover' />
      </div>
      <div onClick={() => setIsFavorite(!isFavorite)}>
        {isFavorite ? "★" : "☆"}
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Book;
