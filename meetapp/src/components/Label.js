import styled from 'styled-components/native';

const Label = styled.Text`
  color: ${props => (props.highlight ? 'white' : 'rgba(255, 255, 255, 0.6)')};
  font-size: 16px;
`;

Label.defaultProps = {
  highlight: true
};

export default Label;
