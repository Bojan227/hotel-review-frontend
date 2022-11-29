import { ReviewType } from './types/ReviewTypes';
import { StarRating } from '../StarRating';
import { Like } from '../svgs/Like';
import { Dislike } from '../svgs/Dislike';
import { Dispatch, SetStateAction, useState } from 'react';
import useUpdateLikeDislike from '../../hooks/useUpdateLikeDislike';
import UsersContainer from '../users/UsersContainer';
import useUserContext from '../../hooks/useUserContext';
import { Link } from 'react-router-dom';

export default function ReviewCard({
  createdBy,
  _id,
  text,
  rating,
  likes,
  dislikes,
  setReviews,
}: ReviewType & {
  setReviews: Dispatch<SetStateAction<ReviewType[] | undefined>>;
}) {
  const { update } = useUpdateLikeDislike();
  const [showUsers, setShowUsers] = useState(false);
  const [title, setTitle] = useState('');
  const userContext = useUserContext();

  return (
    <div className="review-card">
      <div>
        <h1>{createdBy?.displayName}</h1>
        <p>{text}</p>
        <StarRating rating={rating} />
      </div>
      <div>
        {userContext.user ? (
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
        ) : (
          <Link to="/signup">
            <div className="show-like">
              <Like />
            </div>
          </Link>
        )}
        <h4
          onClick={() => {
            setTitle('Likes');
            setShowUsers(true);
          }}
        >
          {likes?.length}
        </h4>

        {userContext.user ? (
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
        ) : (
          <Link to="/signup">
            <div className="show-like">
              <Dislike />
            </div>
          </Link>
        )}
        <h4
          onClick={() => {
            setTitle('Dislikes');
            setShowUsers(true);
          }}
        >
          {dislikes?.length}
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
