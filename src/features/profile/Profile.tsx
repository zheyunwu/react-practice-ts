import { useAppSelector } from '../../app/hooks';
import { AuthState, selectAuth } from '../auth/authSlice';

export function Profile() {
  const auth: AuthState = useAppSelector(selectAuth);

  return (
    <div>
      <h3>Profile</h3>
      <p>isLoggedin: {auth.isLoggedin ? 'Yes' : 'No'}</p>
      <p>Name: {auth.name}</p>
      <p>Email: {auth.email}</p>
    </div>
  );
}