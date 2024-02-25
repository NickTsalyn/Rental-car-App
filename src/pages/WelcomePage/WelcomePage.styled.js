const { default: styled } = require("styled-components");


export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    180deg,
    rgba(52, 112, 255, 0) 25%,
    #b0cadb 92.19%
  );
`


export const WelcomeWrapper = styled.div`
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

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 12px;
  width: 270px;
`;


export const Btn = styled.button`
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