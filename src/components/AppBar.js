import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors'
import UserMenu from './auth/UserMenu';
import AuthNav from './auth/AuthNav';

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header >
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}