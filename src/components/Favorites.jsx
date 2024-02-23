import React, { useEffect } from 'react';

import { HomeWrapper } from './Home.styled';
import { FavotitesList } from './FavotitesList';

export const Favorites = () => {

  return (
    <HomeWrapper>
      <FavotitesList/>
    </HomeWrapper>
  );
};
