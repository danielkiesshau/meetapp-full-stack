import styled from 'styled-components';
import { Label } from '~/components';

export const Title = styled(Label)`
  font-size: 32px;
  font-weight: bold;
`;

export const TitleRow = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px;
`;

export const List = styled.ul`
  overflow: auto
  flex-direction: column;
  grid-gap: 10px;
`;
