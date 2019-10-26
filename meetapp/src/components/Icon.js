import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

export default props => <StyledIcon {...props} />;

const StyledIcon = styled(Icon).attrs(() => ({
  size: 20
}))`
  color: ${props => props.color || 'white'};
`;
