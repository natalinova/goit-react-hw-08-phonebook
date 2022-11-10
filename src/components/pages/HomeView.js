import React from 'react';
import Title from '../../img/cat_title.jpeg'
import { HomeTitle } from './PagesStyled';
import { PageTotal } from 'styled/CommonStyled';


const HomeView = () => (
    <PageTotal>
        <HomeTitle>
      This is best place for secure storage your phonebook
    </HomeTitle>
    <img src={ Title} maxWidth='400' alt='cat'/>
  </PageTotal>
);

export default HomeView;