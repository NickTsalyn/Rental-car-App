import React, { useEffect } from 'react';
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
} from '../Card/Card.styled';
import Modal from 'react-modal';
import InfoModal from '../InfoModal/InfoModal';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from 'redux/favorites/selectors';
import { allCars } from 'redux/cars/selectors';
import { addFavorite, deleteFavorite } from 'redux/favorites/operations';

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

  Modal.setAppElement('#root');

export const FavoriteListItem = ({ favCar }) => {
    const favoriteCars = useSelector(selectFavorite);
    // const isActivated = useSelector(selectIsActive)
    const cars = useSelector(allCars);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isActivated, setIsActivated] = useState(false);

    useEffect(() => {
        const isCarFav =  !!favoriteCars.find(item => item.id === favCar.id)
        setIsActivated(isCarFav)
      }, [])
  
  
  
    const toggleIcon = (carId) => {
      const foundCar = favoriteCars.find((car) => car.id === carId)
      console.log(foundCar)
  
      if(foundCar) {
        setIsActivated(false)
        dispatch(deleteFavorite(foundCar._id))
      }
      else {
        const chosenFavCar = cars.find((car) => car.id === carId)
        setIsActivated(true)
        dispatch(addFavorite({
          id: carId,
          ...chosenFavCar
        }))
        console.log(chosenFavCar)
       
      }
    }
    console.log(favoriteCars)
  
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
        <ImgWrapper>
          <HeartBtn onClick={() => toggleIcon(favCar.id)}>
            <Heart isActived={isActivated}/>
          </HeartBtn>

          <Img loading="lazy" src={favCar.img} alt={favCar.make} />
        </ImgWrapper>

        <TitleWrapperStyled>
          <p>
            {favCar.make} <AccentColStyled>{favCar.model}</AccentColStyled>,{favCar.year}
          </p>

          <p>{favCar.rentalPrice}</p>
        </TitleWrapperStyled>
        <InfoWrapperStyled>
          <InfoItemStyled>{favCar.address.split(',').splice(1, 1)}</InfoItemStyled>
          <InfoItemStyled>{favCar.address.split(',').splice(2, 1)}</InfoItemStyled>
          <InfoItemStyled>{favCar.rentalCompany}</InfoItemStyled>
        </InfoWrapperStyled>
        <InfoWrapperStyled>
          <InfoItemStyled>{favCar.type}</InfoItemStyled>
          <InfoItemStyled>{favCar.model}</InfoItemStyled>
          <InfoItemStyled>{favCar.id}</InfoItemStyled>
          <InfoItemLastStyled>{favCar.functionalities[0]}</InfoItemLastStyled>
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
          <InfoModal onClose={closeModal} id={favCar.id} />
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
