import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Routes, Route } from 'react-router-dom';

import AppBar from './auth/AppBar';
import { Container } from './phonebook/PhonebookStyled';
import authOperations from 'redux/auth/authOperations';
import UserRoutes from './UserRoutes';


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      <AppBar />
       <UserRoutes/>
    </Container>
     
  );
};
