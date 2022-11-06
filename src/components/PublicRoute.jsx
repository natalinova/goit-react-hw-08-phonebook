import { useSelector } from 'react-redux';
import { Navigate, Outlet} from 'react-router-dom';
import  authSelectors  from '../redux/auth/authSelectors';



export default function PublicRoute() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    console.log(isLoggedIn)
  
    if (isLoggedIn) {
        return <Navigate to='/contacts'/>
    }
    return <Outlet />
}