import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/CAR LOGO - Made with PosterMyWall-Photoroom.png'
import { Btn, Container, Text, WelcomeWrapper } from './WelcomePage.styled';

export const WelcomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/catalog');
  };

  return (
    <Container>
    <WelcomeWrapper>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <Text>
        Unlock Adventures: Your Journey, Your Rental, Your
        Way!
      </Text>
      <Btn onClick={handleClick}>Get started</Btn>
    </WelcomeWrapper>
    </Container>
  );
};


