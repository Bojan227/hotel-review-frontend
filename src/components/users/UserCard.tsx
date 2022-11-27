import { UserType } from '../../context/userContext';

export default function UserCard({ _id, displayName, email, role }: UserType) {
  return (
    <div className="user-card">
      <h4>Display Name</h4>
      <h2>{displayName}</h2>
      <h4>Email</h4>
      <h2>{email}</h2>
    </div>
  );
}
