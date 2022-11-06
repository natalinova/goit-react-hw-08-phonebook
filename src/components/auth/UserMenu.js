import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';
import { Button } from 'styled/CommonStyled';
import { UserMenuText } from './AuthStyled';





export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);


  return (
    <div >
      <UserMenuText >Welcome, {name}</UserMenuText>
      <Button type="button" onClick={() => (dispatch(authOperations.logOut())
      )}>
        Log out
      </Button>
    </div>
  );
}