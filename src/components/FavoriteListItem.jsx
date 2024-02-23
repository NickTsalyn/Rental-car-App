import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import {
  AccentColStyled,
  CarItemStyled,
  ContentWrapperStyled,
  Heart,
  HeartBtn,
  ImgWrapper,
  InfoItemLastStyled,
  InfoItemStyled,
  InfoWrapperStyled,
  LinkBtnStyled,
  TitleWrapperStyled,
} from './Card.styled';
// import { InfoModal } from './InfoModal';
import Modal from 'react-modal';
import InfoModal from './InfoModal';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from 'redux/favorites/selectors';
import { allCars } from 'redux/cars/selectors';
// import { addFavorite } from 'redux/favorites/operations';

const customStyles = {
  overlay: {
    background: 'rgba(18, 20, 23, 0.5)',
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
    padding: '40px',
  },
};

//   Modal.setAppElement('#root');

export const FavoriteListItem = ({ favoriteCars }) => {
//   const favoriteCars = useSelector(selectFavorite);
  const cars = useSelector(allCars);
//   const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActived, setIsActived] = useState(false);
  // const [favCar, setFavCar] = useState([]);

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

//   const addFavorites = () => {

//     setIsActived(isActived);
//     // const clickCar = cars.find(item => item.id === favoriteCars.id)
//     const foundCar = cars.filter((item) => item.id === favoriteCar.id);
//     console.log(favoriteCar.id)
//     console.log(foundCar)
//     console.log(favoriteCars)
//     // console.log(clickCar)
//     // const favCar = favoriteCars.map(item => item.id === car.id)
//     dispatch(addFavorite(foundCar));
//     // if (favoriteCars.id) {
//     //  return
//     // }
//     // else {
//     //   dispatch(addFavorite(car));
//     // }
//   };

  return (
    <CarItemStyled>
      <ContentWrapperStyled>
        <ImgWrapper>
          <HeartBtn isActive={isActived}>
            <Heart />
          </HeartBtn>

          <Img loading="lazy" src={favoriteCars.img} alt={favoriteCars.make} />
        </ImgWrapper>

        <TitleWrapperStyled>
          <p>
            {favoriteCars.make} <AccentColStyled>{favoriteCars.model}</AccentColStyled>,{favoriteCars.year}
          </p>

          <p>{favoriteCars.rentalPrice}</p>
        </TitleWrapperStyled>
        <InfoWrapperStyled>
          <InfoItemStyled>{favoriteCars.address.split(',').splice(1, 1)}</InfoItemStyled>
          <InfoItemStyled>{favoriteCars.address.split(',').splice(2, 1)}</InfoItemStyled>
          <InfoItemStyled>{favoriteCars.rentalCompany}</InfoItemStyled>
        </InfoWrapperStyled>
        <InfoWrapperStyled>
          <InfoItemStyled>{favoriteCars.type}</InfoItemStyled>
          <InfoItemStyled>{favoriteCars.model}</InfoItemStyled>
          <InfoItemStyled>{favoriteCars.id}</InfoItemStyled>
          <InfoItemLastStyled>{favoriteCars.functionalities[0]}</InfoItemLastStyled>
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
          <InfoModal onClose={closeModal} id={favoriteCars.id} />
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
