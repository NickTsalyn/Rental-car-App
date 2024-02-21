import styled from "styled-components";
import { InfoWrapperStyled } from "./Card.styled";
import { IoMdClose } from "react-icons/io";
// import { InfoWrapperStyled } from "../../pages/CatalogPage/CatalogPage.styled";

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  /* padding: 40px; */
`;

export const ImgCarStyled = styled.img`
  width: 100%;
  height: 248px;

  border-radius: 14px;

  object-fit: cover;

  transform: scale(1);

  transition: transform 250ms var(--timing-function);

  &:hover {
    transform: scale(1.05);
  }
`;

export const BtnRentalStyled = styled.button`
  display: inline-block;

  text-align: center;

  width: 168px;
  padding: 12px 50px;
  white-space: nowrap;
  background-color: var(--color-button);
  color: var(--color-text-button);

  border: 1px solid var(--color-button);
  border-radius: 12px;

  font-size: 14px;

  cursor: pointer;

  transform: scale(1);
  transition: border 2500ms var(--timing-function),
    transform 250ms var(--timing-function);

  &:hover {
    background-color: var(--color-button-hover);
    border-color: var(--color-button-hover);
    transform: scale(1.05);
  }
`;

export const TitleModalStyled = styled.h2`
  margin-bottom: 8px;

  font-size: 18px;
  line-height: 1.5;
`;

export const InfoModalTextWrapperStyled = styled(InfoWrapperStyled)``;

export const TextConditionsWrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 8px;
`;

export const InfoModalAccessoriesWrapperStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 6px;

  font-size: 12px;
  line-height: 1.5;
  color: #12141780;
`;

export const SubTitleModalStyled = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const DescriptionModalStyled = styled.p`
  font-size: 14px;
  line-height: 1.43;
`;

export const AccentColorStyled = styled.span`
  color: #3470ff;
  font-weight: 500;
`;

export const AccentNumberStyled = styled.span`
  color: #3470ff;
  font-weight: 600;
`;

export const InfoModalWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoTitleWrapperStyled = styled.div``;

export const ImgTextWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const InfoModalItemStyled = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-overflow: nowrap;

  &:not(:last-child)::after {
    content: "";
    margin-left: 6px;
    border-right: 1px solid #1214171a;
    text-overflow: nowrap;
  }
`;

export const InfoModalItemLastStyled = styled.p``;

export const AccessoriesFuncWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const RentalConditionStyled = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 8px;

  font-size: 12px;
  line-height: 1.5;
  color: #121417;
`;

export const ConditionStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;

  padding: 7px 14px;
  border-radius: 35px;
  background-color: #f9f9f9;
`;

export const ConditionsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CloseIcon = styled(IoMdClose)`
position: absolute;
top: 16px;
right: 16px;
/* transform: translate(-50%, -50%); */
width: 24px;
height: 24px;
`