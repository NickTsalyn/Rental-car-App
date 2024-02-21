import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
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
// import { InfoModal } from './InfoModal';
import  Modal  from 'react-modal';
import InfoModal from './InfoModal';

const customStyles = {
    overlay: {
      background: 'rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(2px)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgb(255, 255, 255)',
      width: '541px',
      height: '752px',
      padding: "40px"
    },
  };

//   Modal.setAppElement('#root');

export const Card = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleAfterClose = () => {
    const modalRoot = document.getElementById('#root');
    if (modalRoot) {
      modalRoot.innerHTML = ''; // Remove the content of the modal root element
    }
  };

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
      <LinkBtnStyled onClick={openModal}>Learn more</LinkBtnStyled>
      {isModalOpen && (
        <Modal
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={true}
          isOpen={openModal}
          handleAfterClose={handleAfterClose}
          style={customStyles}
        >
            <InfoModal onClose={closeModal} id={car.id}/>
        </Modal>
      )}
    </CarItemStyled>
  );
};

const Img = styled.img`
  aspect-ratio: 1.02;
  object-fit: auto;
  object-position: center;
  width: 100%;
  width: 274px;
  height: 268px;
`;
