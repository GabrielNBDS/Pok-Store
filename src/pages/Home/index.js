import React from 'react'
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png';
import grassImg from '../../assets/grass.png';
import psychicImg from '../../assets/psychic.png';

import { Container, TypeContainer } from './styles';

export default function Home() {
  return (
    <Container>
      <TypeContainer bgcolor="#78C850">
        <Link to="/grass">
          <img src={logoImg} alt="logo" />
          <img src={grassImg} alt="grass"/>
        </Link>
      </TypeContainer>
      <TypeContainer bgcolor="#EA477F">
        <Link to="/psychic">
          <img src={logoImg} alt="logo" />
          <img src={psychicImg} alt="psychic"/>
        </Link>
      </TypeContainer>
    </Container>
  )
}
