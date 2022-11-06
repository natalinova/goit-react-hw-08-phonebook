import React from 'react';
import Title from '../../img/cat_title.jpeg'
import { HomeTitle, HomeTotal } from './PagesStyled';


const HomeView = () => (
    <HomeTotal>
        <HomeTitle>
      This is best place for secure storage your phonebook
    </HomeTitle>
    <img src={ Title} width='400' alt='cat'/>
  </HomeTotal>
);

export default HomeView;