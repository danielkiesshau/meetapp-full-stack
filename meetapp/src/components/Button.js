import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { BaseButton } from 'react-native-gesture-handler';
import Label from './Label';

const Button = ({ isLoading, label, ...rest }) => (
  <StyledBtn disabled={isLoading} {...rest}>
    {isLoading ? (
      <ActivityIndicator color="white" />
    ) : (
      <StyledLabel>{label}</StyledLabel>
    )}
  </StyledBtn>
);

Button.propTypes = {
  isLoading: PropTypes.bool,
  label: PropTypes.string
};

Button.defaultProps = {
  isLoading: false,
  label: ''
};

export default Button;

const StyledBtn = styled(BaseButton)`
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 15px;
  background-color: ${props => props.color || '#f94d6a'};
`;

const StyledLabel = styled(Label)`
  font-weight: bold;
`;
