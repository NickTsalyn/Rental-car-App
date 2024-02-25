import React from 'react';
import { CardList } from '../../components/CardList/CardList';
import { HomeWrapper } from './Home.styled';
import { FiltersForm } from '../../components/FiltersForm/FiltersForm'

export const Home = () => {
  return (
    <HomeWrapper>
      <FiltersForm/>
      <CardList />
    </HomeWrapper>
  );
};
