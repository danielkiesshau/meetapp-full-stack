import styled from 'styled-components';
import { Form } from '@rocketseat/unform';
import {
  Logo,
  Input,
  Button,
  PageContainer as Container
} from '../../components';
import { HEADER_HEIGHT } from '../../components/Header/styles';

export const StyledLogo = styled(Logo)`
  margin-bottom: 50px;
`;

export const StyledInput = styled(Input)`
  margin-bottom: 10px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-top: 30px;
`;

export const StyledButton = styled(Button)`
  margin-bottom: 15px;
`;

export const StyledLink = styled.a`
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const SeperatorLine = styled.div`
  align-self: stretch;
  background-color: rgba(255, 255, 255, 0.1);
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
  width: 162px;
  align-self: flex-end;
  margin-bottom: 10px;
`;
