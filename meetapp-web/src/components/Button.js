import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { darken } from 'polished';
import Label from './Label';

const Button = ({ children, isLoading, label, ...rest }) => (
  <StyledBtn disabled={isLoading} {...rest}>
    {children}
    <Label>{isLoading ? 'Carregando' : label}</Label>
  </StyledBtn>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Button.defaultProps = {
  isLoading: false,
  children: []
};

export default Button;

const StyledBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  height: 42px;
  padding: 0px 15px;
  border: 0px;
  background-color: ${props => props.color || '#f94d6a'};
  transition: background 0.2s;

  &:hover {
    background: ${props => darken(0.04, props.color || '#f94d6a')};
  }
  font-weight: bold;
`;
