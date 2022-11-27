import { ReviewType } from './types/ReviewTypes';
import { StarRating } from '../StarRating';
import { Like } from '../svgs/Like';
import { Dislike } from '../svgs/Dislike';
import { Dispatch, SetStateAction, useState } from 'react';
import useUpdateLikeDislike from '../../hooks/useUpdateLikeDislike';
import UsersContainer from '../users/UsersContainer';

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
  const [showUsers, setShowUsers] = useState(false);
  const [title, setTitle] = useState('');
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
        <h4
          onClick={() => {
            setTitle('Likes');
            setShowUsers(true);
          }}
        >
          {likes.length}
        </h4>

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
        <h4
          onClick={() => {
            setTitle('Dislikes');
            setShowUsers(true);
          }}
        >
          {dislikes.length}
        </h4>
      </div>
      {showUsers && (
        <UsersContainer
          title={title}
          reviewId={_id}
          closeModal={() => setShowUsers(false)}
        />
      )}
    </div>
  );
}
