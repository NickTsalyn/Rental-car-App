import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const WrapperStyled = styled.nav`
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100vw;

  padding: 22px 0;

  background-color: lightblue;

  z-index: 100;
`;

export const NavWrapperStyled = styled.ul`
  display: flex;
  padding: 0 128px;
  justify-content: space-around;
`;

export const NavElStyled = styled(NavLink)`
  padding: 10px 24px;

  background-color: var(--color-button);
  color: var(--color-text-button);

  border: 1px solid var(--color-button);
  border-radius: 12px;

  cursor: pointer;

  transform: scale(1);
  transition: border 2500ms var(--timing-function),
    transform 250ms var(--timing-function);

  &:hover {
    background-color: var(--color-button-hover);
    border-color: var(--color-button-hover);
    transform: scale(1.05);
  }

  &.active {
    background-color: var(--color-button-hover);
  }
`;