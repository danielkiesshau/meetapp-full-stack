import styled from 'styled-components/native';
import { Logo, Input, Button, Container } from '../../components';
import { HEADER_HEIGHT } from '../../components/Header';

export const StyledLogo = styled(Logo)`
  margin-bottom: 50px;
`;

export const StyledInput = styled(Input)`
  margin-bottom: 10px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-bottom
`;

export const StyledButton = styled(Button)`
  margin-bottom: 15px;
`;

export const StyledLink = styled.TouchableOpacity`
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const SeperatorLine = styled.View`
  align-self: stretch;
  background-color: rgba(255, 255, 255, 0.1),
  height: 1px;
  margin-bottom: 15px;
`;

export const EmailInput = styled(Input)`
  margin-bottom: 20px;
`;

export const PageContainer = styled(Container)`
  padding-top: ${HEADER_HEIGHT}
  justify-content: null;
`;

export const BtnUpdateProfile = styled(Button)`
  margin-bottom: 10px;
`;
export const BtnLogOut = styled(Button)`
  height: 42px;
`;
