import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/CAR LOGO - Made with PosterMyWall-Photoroom.png'

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


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    180deg,
    rgba(52, 112, 255, 0) 25%,
    #b0cadb 92.19%
  );
`


const WelcomeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 12px;
  width: 270px;
`;


const Btn = styled.button`
 display: block;
  width: 270px;

  padding: 12px 12px;

  font-size: 14px;
  line-height: 1.43;

  background-color: #3470ff;
  color: var(--color-text-button);

  border: 1px solid #3470ff;
  border-radius: 12px;

  transform: scale(1);
  transition: border 2500ms var(--timing-function),
    transform 250ms var(--timing-function);

  &:hover {
    background-color: #0b44cd;
    border-color: #0b44cd;
    transform: scale(1.05);
  }
`