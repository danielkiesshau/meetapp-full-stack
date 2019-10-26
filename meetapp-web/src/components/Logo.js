import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Logo = props => <StyledImg src={logo} {...props} alt="logo" />;

export default Logo;

const StyledImg = styled.img`
  object-fit: contain;
  height: 42px;
`;
