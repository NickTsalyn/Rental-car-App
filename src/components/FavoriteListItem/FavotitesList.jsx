import React, { useEffect } from 'react';
import { CardListWrapper, List } from '../CardList/CardList.styled';
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

  return (
    <CardListWrapper>
      <List>
      {favoriteCars.map(favoriteCar => ( 
          <li key={favoriteCar.id} >
            <FavoriteListItem favCar={favoriteCar}/>
          </li>
      ))}
      </List>
    </CardListWrapper>
  );
};
