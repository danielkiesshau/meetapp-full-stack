import styled from 'styled-components';
import { darken } from 'polished';
import { Form as RForm } from '@rocketseat/unform';
import { Logo, Input, Button, Label } from '../../components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-width: 40px;
`;
export const StyledLogo = styled(Logo)`
  margin-bottom: 50px;
`;

export const StyledInput = styled(Input)`
  width: 100%;
  margin-bottom: 15px;
`;

export const Form = styled(RForm)`
  flex-direction: column;
  width: 315px;
  span {
    display: block;
    font-weight: bold;
    color: #ff0000;
    opacity: 0.9;
    margin: 0 0 15px;
  }
`;

export const StyledButton = styled(Button)`
  margin-bottom: 15px;
  width: 100%;
`;

export const StyledLink = styled.a`
  justify-content: center;
  width: 100%;
`;

export const LinkLabel = styled(Label)`
  display: flex;
  justify-content: center;
  transition: color 0.2s;
  &:hover {
    color: ${darken(0.25, 'rgba(255, 255, 255, 0.6)')};
  }
`;
