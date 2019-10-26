import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Label from './Label';

const Icon = ({ name, ...rest }) => <StyledIcon {...rest}>{name}</StyledIcon>;
export default Icon;
const StyledIcon = styled(Label)`
  color: ${props => props.color || 'white'};
`;

Icon.propTypes = {
  name: PropTypes.string
};

Icon.defaultProps = {
  name: ''
};
