import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HEADER_HEIGHT } from './Header/styles';

const PageContainer = ({ children }) => (
  <StyledContainer>
    <Content>{children}</Content>
  </StyledContainer>
);

export default PageContainer;

const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 940px;
`;

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  padding: ${HEADER_HEIGHT}px 18px 0px;
`;

PageContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
};

PageContainer.defaultProps = {
  children: {}
};
