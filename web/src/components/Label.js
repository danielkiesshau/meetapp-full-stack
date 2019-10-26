import styled from 'styled-components';

const Label = styled.p`
  color: ${props => (props.highlight ? 'white' : 'rgba(255, 255, 255, 0.6)')};
  font-size: 16px;
`;

Label.defaultProps = {
  highlight: true
};

export default Label;
