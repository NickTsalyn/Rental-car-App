import React from 'react';
import styled from 'styled-components';
import { LinkBtnStyled } from '../../components/Card.styled';
import { useNavigate } from 'react-router-dom';

export const WelcomePage = () => {
const navigate = useNavigate()

const handleClick = () => {
  navigate('/home')
}

  return (
    <WelcomeWrapper>
      <LinkBtnStyled onClick={handleClick}>Get started</LinkBtnStyled>
    </WelcomeWrapper>
  );
};

const WelcomeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: 335px;

  text-align: center;
`;
