import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Container from './Container';

const PageContainer = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default PageContainer;

const StyledContainer = styled(Container)`
  justify-content: null;
`;

PageContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),//eslint-disable-line
};

PageContainer.defaultProps = {
  children: []
};
