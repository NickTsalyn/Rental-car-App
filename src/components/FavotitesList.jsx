import React, { useEffect } from 'react';
import { CardListWrapper, List } from './CardList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from 'redux/favorites/selectors';
import { getFavorite } from 'redux/favorites/operations';
import { FavoriteListItem } from './FavoriteListItem';

export const FavotitesList = () => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavorite);

  useEffect(() => {
    dispatch(getFavorite());
  }, [dispatch]);

  console.log(favoriteCars)
  return (
    <CardListWrapper>
      <List>
      {favoriteCars.map(favoriteCar => ( 
          <li key={favoriteCar.id} >
            <FavoriteListItem favoriteCars={favoriteCar}/>
          </li>
      ))}
      </List>
    </CardListWrapper>
  );
};
