import React from 'react';

import { handleFormatDate } from 'helpers/date';

import logoImg from 'static/images/Logo.svg';

import { Container } from './styles';

const today = new Date();

function Header() {
  return (
    <Container>
      <img src={logoImg} alt="The App" />
      <div className="divisor" />
      <h6>Todo conteúdo que você procura</h6>
      <p className="date">
        {handleFormatDate({ date: today, _format: 'EEEEEE, d MMMM' })}
      </p>
    </Container>
  );
}

export default Header;
