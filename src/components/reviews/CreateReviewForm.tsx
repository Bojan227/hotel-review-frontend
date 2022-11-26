import React, { useState } from 'react';
import useCreateReview from '../../hooks/useCreateReview';
import { StarRating } from '../StarRating';

export default function CreateReviewForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const { isLoading, error, createReview } = useCreateReview();

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tell us your experience"
      />
      <StarRating {...{ rating, setRating, hover, setHover }} />
      <button>Rate now</button>
    </form>
  );
}
