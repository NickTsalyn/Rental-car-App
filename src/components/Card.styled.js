import { styled } from 'styled-components';


export const TitleWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;

  font-size: 16px;
  line-height: 1.5;
`;

export const AccentColStyled = styled.span`
  color: #3470ff;
`;

export const InfoWrapperStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 6px;

  font-size: 12px;
  line-height: 1.5;
  color: #12141780;
`;

export const InfoItemStyled = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-overflow: nowrap;

  &::after {
    content: "";
    margin-left: 6px;
    border-right: 1px solid #1214171a;
  }
`;

export const InfoItemLastStyled = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-overflow: nowrap;
`;

export const LinkBtnStyled = styled.button`
  display: block;
  width: 100%;

  padding: 12px 99.5px;

  text-align: center;
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
`;

export const ContentWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const CarItemStyled = styled.div`
  width: 274px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
`;