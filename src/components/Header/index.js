import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer } from './styles';
import logo from '../../assets/logo.png';
import grass from '../../assets/grass.png';
import psychic from '../../assets/psychic.png';

export default function Header() {
  return (
    <HeaderContainer bgcolor={window.location.pathname === '/grass' ? "#78C850" : "#EA477f"}>
      <div>
        <img src={logo} alt="PokéStore"/>
        <img
          src={window.location.pathname === '/grass' ? grass : psychic} 
          alt={window.location.pathname === '/grass' ? 'grass' : 'psychic'}
        />
      </div>
      <Link to="/">
        &larr; Voltar
      </Link>
    </HeaderContainer>
  )
}
