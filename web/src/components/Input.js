import React, { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Input as RInput } from '@rocketseat/unform';

const Input = (props, ref) => <StyledInput ref={ref} {...props} />;
export default forwardRef(Input);

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

Input.defaultProps = {
  style: {}
};
const StyledInput = styled(RInput)`
  font-size: 18px;
  color: rgb(255, 255, 255);
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  justify-content: center;
  height: 50px;
  padding: 0px 20px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  align-self: stretch;
  border: 0px;
`;
