import React from 'react';
import { CardList } from '../components/CardList';
import { HomeWrapper } from '../components/Home.styled';
import { FiltersForm } from '../components/FiltersForm'

export const Home = () => {
  return (
    <HomeWrapper>
      <FiltersForm/>
      <CardList />
    </HomeWrapper>
  );
};
