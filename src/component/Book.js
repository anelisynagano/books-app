import { useState } from "react";

const Book = ({ image, title, handleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    handleFavorite({ image, title });
  };

  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={image} alt='book cover' />
      </div>
      <div className='star' onClick={handleClick}>
        {isFavorite ? "★" : "☆"}
      </div>
      <p>{title}</p>
    </div>
  );
};

export default Book;
