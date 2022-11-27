import { ReviewType } from './types/ReviewTypes';
import { StarRating } from '../StarRating';
import { Like } from '../svgs/Like';
import { Dislike } from '../svgs/Dislike';
import { Dispatch, SetStateAction } from 'react';
import useUpdateLikeDislike from '../../hooks/useUpdateLikeDislike';

export default function ReviewCard({
  createdBy,
  _id,
  text,
  rating,
  likes,
  dislikes,
  hotelId,
  setReviews,
}: ReviewType & {
  setReviews: Dispatch<SetStateAction<ReviewType[] | undefined>>;
}) {
  const { update, errorMessage } = useUpdateLikeDislike();
  return (
    <div className="review-card">
      <div>
        <h1>{createdBy.displayName}</h1>
        <p>{text}</p>
        <StarRating rating={rating} />
      </div>
      <div>
        <Like
          updateLike={() =>
            update({
              uri: 'http://localhost:3000/review/',
              reviewId: _id,
              setReviews,
            })
          }
          likes={likes}
        />
        <h4>{likes.length}</h4>

        <Dislike
          dislikes={dislikes}
          updateDislike={() =>
            update({
              uri: 'http://localhost:3000/review/dislike',
              reviewId: _id,
              setReviews,
            })
          }
        />
        <h4>{dislikes.length}</h4>
      </div>
    </div>
  );
}
