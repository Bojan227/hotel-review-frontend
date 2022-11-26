import { useState } from 'react';
interface StarRatingProps {
  rating: number;
  setRating?: React.Dispatch<React.SetStateAction<number>>;
  hover?: number;
  setHover?: React.Dispatch<React.SetStateAction<number>>;
}

export const StarRating = ({
  rating,
  setRating = () => {},
  hover,
  setHover = () => {},
}: StarRatingProps) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? 'on' : 'off'}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            onDoubleClick={() => {
              setRating(0);
              setHover(0);
            }}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
