import React from 'react';
import { CardList } from '../components/CardList';
import { HomeWrapper } from '../components/Home.styled';

export const Home = () => {
  return (
    <HomeWrapper>
      <CardList />
    </HomeWrapper>
  );
};
