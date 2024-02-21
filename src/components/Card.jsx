import React from 'react';
import styled from 'styled-components';
import {
  AccentColStyled,
  CarItemStyled,
  ContentWrapperStyled,
  InfoItemLastStyled,
  InfoItemStyled,
  InfoWrapperStyled,
  LinkBtnStyled,
  TitleWrapperStyled,
} from './Card.styled';

export const Card = ({ car }) => {
  return (
    <CarItemStyled>
      <ContentWrapperStyled>
        <Img loading="lazy" src={car.img} alt={car.make} />
        <TitleWrapperStyled>
          <p>
            {car.make} <AccentColStyled>{car.model}</AccentColStyled>,{car.year}
          </p>

          <p>{car.rentalPrice}</p>
        </TitleWrapperStyled>
        <InfoWrapperStyled>
          <InfoItemStyled>{car.address.split(',').splice(1, 1)}</InfoItemStyled>
          <InfoItemStyled>{car.address.split(',').splice(2, 1)}</InfoItemStyled>
          <InfoItemStyled>{car.rentalCompany}</InfoItemStyled>
        </InfoWrapperStyled>
        <InfoWrapperStyled>
          <InfoItemStyled>{car.type}</InfoItemStyled>
          <InfoItemStyled>{car.model}</InfoItemStyled>
          <InfoItemStyled>{car.id}</InfoItemStyled>
          <InfoItemLastStyled>{car.functionalities[0]}</InfoItemLastStyled>
        </InfoWrapperStyled>
      </ContentWrapperStyled>
      <LinkBtnStyled>Learn more</LinkBtnStyled>
    </CarItemStyled>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 426px;
  font-size: 12px;
  font-weight: 400;
  @media (max-width: 991px) {
    margin-top: 29px;
  }
`;

const Img = styled.img`
  aspect-ratio: 1.02;
  object-fit: auto;
  object-position: center;
  width: 100%;
  width: 274px;
  height: 268px;
`;

const Div2 = styled.div`
  display: flex;
  margin-top: 14px;
  width: 270px;
  max-width: 100%;
  padding-right: 20px;
  justify-content: space-between;
  gap: 20px;
  font-size: 16px;
  font-weight: 500;
  @media (max-width: 991px) {
    margin-right: 4px;
  }
`;

const Div3 = styled.div`
  color: #3470ff;
  font-family: Inter, sans-serif;
  line-height: 24px;
  flex-grow: 1;
  flex-basis: auto;
`;

const Div4 = styled.div`
  color: #121417;
  font-family: Manrope, sans-serif;
  line-height: 150%;
`;

const Div5 = styled.div`
  justify-content: center;
  align-self: start;
  display: flex;
  margin-top: 8px;
  padding-right: 20px;
  gap: 5px;
  color: rgba(18, 20, 23, 0.5);
  line-height: 150%;
`;

const Div6 = styled.div`
  font-family: Manrope, sans-serif;
`;

const Img2 = styled.img`
  aspect-ratio: 0.06;
  object-fit: auto;
  object-position: center;
  width: 1px;
  stroke-width: 1px;
  stroke: rgba(18, 20, 23, 0.1);
  align-self: start;
`;

const Div7 = styled.div`
  font-family: Manrope, sans-serif;
`;

const Img3 = styled.img`
  aspect-ratio: 0.06;
  object-fit: auto;
  object-position: center;
  width: 1px;
  stroke-width: 1px;
  stroke: rgba(18, 20, 23, 0.1);
  align-self: start;
`;

const Div8 = styled.div`
  font-family: Manrope, sans-serif;
  flex-grow: 1;
  flex-basis: auto;
`;

const Img4 = styled.img`
  aspect-ratio: 0.06;
  object-fit: auto;
  object-position: center;
  width: 1px;
  stroke-width: 1px;
  stroke: rgba(18, 20, 23, 0.1);
  align-self: start;
`;

const Div9 = styled.div`
  font-family: Manrope, sans-serif;
`;

const Div10 = styled.div`
  justify-content: center;
  align-self: start;
  display: flex;
  margin-top: 4px;
  padding-right: 20px;
  gap: 5px;
  color: rgba(18, 20, 23, 0.5);
  white-space: nowrap;
  line-height: 150%;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div11 = styled.div`
  font-family: Manrope, sans-serif;
`;

const Img5 = styled.img`
  aspect-ratio: 0.06;
  object-fit: auto;
  object-position: center;
  width: 1px;
  stroke-width: 1px;
  stroke: rgba(18, 20, 23, 0.1);
  align-self: start;
`;

const Div12 = styled.div`
  font-family: Manrope, sans-serif;
`;

const Img6 = styled.img`
  aspect-ratio: 0.06;
  object-fit: auto;
  object-position: center;
  width: 1px;
  stroke-width: 1px;
  stroke: rgba(18, 20, 23, 0.1);
  align-self: start;
`;

const Div13 = styled.div`
  font-family: Manrope, sans-serif;
`;

const Img7 = styled.img`
  aspect-ratio: 0.06;
  object-fit: auto;
  object-position: center;
  width: 1px;
  stroke-width: 1px;
  stroke: rgba(18, 20, 23, 0.1);
  align-self: start;
`;

const Div14 = styled.div`
  font-family: Manrope, sans-serif;
  flex-grow: 1;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div15 = styled.button`
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #3470ff;
  margin-top: 28px;
  color: var(--White, #fff);
  white-space: nowrap;
  padding: 12px 60px;
  font: 600 14px/143% Manrope, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;
