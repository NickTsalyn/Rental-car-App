import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



import { Card } from './Card';
import { fetchCars } from 'redux/cars/operations';
import { allCars } from 'redux/cars/selectors';
import styled from 'styled-components';



export const CardList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(allCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>
      <List>
        {cars.map(car => (
          <li key={car.id}>
            <Card car={car} />
          </li>
        ))}
      </List>
    </div>
  );
};


const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 29px;
    
`