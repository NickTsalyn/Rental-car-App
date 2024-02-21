import { AccentColorStyled, ImgCarStyled, ImgTextWrapperStyled, InfoModalWrapperStyled, InfoTitleWrapperStyled, ModalContentWrapper, TitleModalStyled, InfoModalTextWrapperStyled, InfoModalItemStyled, InfoModalItemLastStyled, DescriptionModalStyled, ConditionsWrapperStyled, SubTitleModalStyled, AccessoriesFuncWrapperStyled, InfoModalAccessoriesWrapperStyled, TextConditionsWrapperStyled, RentalConditionStyled, BtnRentalStyled, CloseIcon } from './Modal.styled';
import { useSelector } from 'react-redux';
import { allCars } from 'redux/cars/selectors';

import {nanoid} from 'nanoid'


export const InfoModal = ({id, onClose}) => {
    const cars = useSelector(allCars)
    const car = cars.find(car => car.id === id)

    return(
     
        <ModalContentWrapper>
      <ImgTextWrapperStyled>
        <ImgCarStyled src={car.img} alt={car.description} />
        <CloseIcon onClick={onClose}/>

        <InfoTitleWrapperStyled>
          <TitleModalStyled>
            {car.make} <AccentColorStyled>{car.model}</AccentColorStyled>, {car.year}
          </TitleModalStyled>

          <InfoModalWrapperStyled>
            <InfoModalTextWrapperStyled>
              <InfoModalItemStyled>
                {car.address.split(",").splice(1, 1)}
              </InfoModalItemStyled>
              <InfoModalItemStyled>
                {car.address.split(",").splice(2, 1)}
              </InfoModalItemStyled>
              <InfoModalItemStyled>Id: {car.id}</InfoModalItemStyled>
              <InfoModalItemStyled>Year: {car.year}</InfoModalItemStyled>
              <InfoModalItemLastStyled>Type: {car.type}</InfoModalItemLastStyled>
            </InfoModalTextWrapperStyled>

            <InfoModalTextWrapperStyled>
              <InfoModalItemStyled>
                Fuel Consumption: {car.fuelConsumption}
              </InfoModalItemStyled>
              <InfoModalItemLastStyled>
                Engine Size: {car.engineSize}
              </InfoModalItemLastStyled>
            </InfoModalTextWrapperStyled>
          </InfoModalWrapperStyled>
        </InfoTitleWrapperStyled>

        <DescriptionModalStyled>{car.description}</DescriptionModalStyled>
      </ImgTextWrapperStyled>

      <ConditionsWrapperStyled>
        <SubTitleModalStyled>
          Accessories and functionalities:
        </SubTitleModalStyled>
        <AccessoriesFuncWrapperStyled>
          <InfoModalAccessoriesWrapperStyled>
            {car.accessories.map((accessory) => {
              const accessoriesID = nanoid();
              return (
                <InfoModalItemStyled key={accessoriesID}>
                  {accessory}
                </InfoModalItemStyled>
              );
            })}
          </InfoModalAccessoriesWrapperStyled>
          <InfoModalTextWrapperStyled>
            {car.functionalities.map((functionality) => {
              const funcID = nanoid();
              return (
                <InfoModalItemStyled key={funcID}>
                  {functionality}
                </InfoModalItemStyled>
              );
            })}
          </InfoModalTextWrapperStyled>
        </AccessoriesFuncWrapperStyled>
      </ConditionsWrapperStyled>

      <ConditionsWrapperStyled>
        <SubTitleModalStyled>Rental Conditions:</SubTitleModalStyled>
        <TextConditionsWrapperStyled>
          {car.rentalConditions.split("\n").map((condition, index) => (
            <RentalConditionStyled key={index}>
            </RentalConditionStyled>
          ))}
        </TextConditionsWrapperStyled>
      </ConditionsWrapperStyled>

      

      <BtnRentalStyled href="tel:+380730000000">Rental Car</BtnRentalStyled>
    </ModalContentWrapper>
    )
}

export default InfoModal