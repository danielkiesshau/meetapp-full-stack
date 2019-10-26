import React from 'react';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-safe-area-view';
import Logo from './Logo';

const Header = () => (
  <Container>
    <StyledLogo />
  </Container>
);

export default Header;

const Container = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: ${getStatusBarHeight() + 18}px 0px 18px 0px;
  background-color: rgba(0, 0, 0, 0.9);
`;
const StyledLogo = styled(Logo).attrs(() => ({
  resizeMode: 'contain'
}))`
  height: 24px;
`;

export const HEADER_HEIGHT = 81;
