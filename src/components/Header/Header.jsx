import React from 'react'
import { NavElStyled, NavWrapperStyled, WrapperStyled } from './Header.styled'

export const Header = () => {
  return (
    <WrapperStyled>
    <NavWrapperStyled>
      <li>
        <NavElStyled to="/">Welcome</NavElStyled>
      </li>
      <li>
        <NavElStyled to="/catalog">Home</NavElStyled>
      </li>
      <li>
        <NavElStyled to="/favorites">Favorite</NavElStyled>
      </li>
    </NavWrapperStyled>
  </WrapperStyled>
  )
}
