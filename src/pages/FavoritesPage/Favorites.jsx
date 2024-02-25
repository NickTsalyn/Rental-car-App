import React from 'react';

import { HomeWrapper } from '../HomePage/Home.styled';
import { FavotitesList } from '../../components/FavoriteList/FavotitesList';

export const Favorites = () => {

  return (
    <HomeWrapper>
      <FavotitesList/>
    </HomeWrapper>
  );
};
