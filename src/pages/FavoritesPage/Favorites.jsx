import React, { useEffect } from 'react';

import { HomeWrapper } from '../HomePage/Home.styled';
import { FavotitesList } from '../../components/FavoriteListItem/FavotitesList';

export const Favorites = () => {

  return (
    <HomeWrapper>
      <FavotitesList/>
    </HomeWrapper>
  );
};
