import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors'
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { Link } from 'react-router-dom';
import Logo from '../../img/pngwing.png'
import { TotalAppBar } from './AuthStyled';

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <TotalAppBar >
      <Link to=''>
        <img src={ Logo} width='60' alt='logo'/>
      </Link>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </TotalAppBar>
  );
}