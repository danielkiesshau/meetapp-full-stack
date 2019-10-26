import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Container = ({ children, style }) => (
  <Background>
    <StyledContainer style={style}>{children}</StyledContainer>
  </Background>
);

export default Container;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),//eslint-disable-line
  style: PropTypes.oneOfType([PropTypes.style, PropTypes.array, PropTypes.object]), //eslint-disable-line
};

Container.defaultProps = {
  children: []
};

const StyledContainer = styled.KeyboardAvoidingView.attrs(() => ({
  enabled: true,
  behavior: 'height'
}))`
  padding: 0px 20px;
  flex: 1;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  background-color: transparent;
`;
const Background = styled(LinearGradient).attrs(() => ({
  colors: ['#22202C', '#2A2233', '#312439', '#38263F', '#402845']
}))`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
