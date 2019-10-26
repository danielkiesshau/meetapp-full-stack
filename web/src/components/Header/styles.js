import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import Button from '../Button';

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 18px 18px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 940px;

  aside {
    display: flex;
    flex-direction: row;
  }

  div {
    margin-right: 20px;
    align-items: flex-end;
    justify-content: center;
  }

  strong {
    color: white;
    font-size: 14px;
    text-transform: capitalize;
  }
`;

export const StyledLogo = styled(Logo)`
  height: 32px;
`;

export const LinkLabel = styled(Link)`
  display: flex;
  color: white;
  justify-content: center;
  transition: color 0.2s;
  color: #999999;
  &:hover {
    color: ${darken(0.25, 'rgba(255, 255, 255, 0.6)')};
  }
  font-size: 14px;
`;

export const StyledButton = styled(Button)`
  width: 71px;
`;

export const HEADER_HEIGHT = 92;
