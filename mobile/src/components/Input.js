import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Input = ({ style, ...rest }, ref) => (
  <Container style={style}>
    <StyledInput ref={ref} {...rest} />
  </Container>
);
export default forwardRef(Input);

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

Input.defaultProps = {
  style: {}
};
const StyledInput = styled.TextInput.attrs(() => ({
  placeholderTextColor: 'rgba(255, 255,255, 0.5)'
}))`
  font-size: 18px;
  color: rgb(255, 255, 255);
`;

const Container = styled.View`
  justify-content: center;
  height: 50px;
  padding: 0px 20px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  align-self: stretch;
`;
