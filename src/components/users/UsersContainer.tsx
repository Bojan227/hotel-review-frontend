import { useEffect } from 'react';
import './users.css';
import { UserType } from '../../context/userContext';
import useGetUsers from '../../hooks/useGetUsers';
import UserCard from './UserCard';
interface UsersContainerProps {
  title: string;
  reviewId: string;
  closeModal: () => void;
}

export default function UsersContainer({
  title,
  reviewId,
  closeModal,
}: UsersContainerProps) {
  const { getUsers, users, errorMessage } = useGetUsers();

  useEffect(() => {
    getUsers(`http://localhost:3000/review/${reviewId}/${title.toLowerCase()}`);
  }, []);

  return (
    <div onClick={closeModal} className="main-users-container">
      <div onClick={(e) => e.stopPropagation()} className="users-container">
        <section>
          <h1>{title}</h1>
          <h1 onClick={closeModal}>X</h1>
        </section>
        <div>
          {users?.map((user) => (
            <UserCard key={user?._id} {...{ ...user }} />
          ))}
        </div>
      </div>
    </div>
  );
}
