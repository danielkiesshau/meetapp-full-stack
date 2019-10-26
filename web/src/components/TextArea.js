import React, { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Input } from '@rocketseat/unform';

const TextArea = (props, ref) => (
  <StyledTextArea multiline ref={ref} {...props} />
);
export default forwardRef(TextArea);

TextArea.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

TextArea.defaultProps = {
  style: {}
};
const StyledTextArea = styled(Input)`
  font-size: 18px;
  color: rgb(255, 255, 255);
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  align-self: stretch;
  border: 0px;
`;
