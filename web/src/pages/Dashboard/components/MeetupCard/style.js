import styled from 'styled-components';
import { MdChevronRight } from 'react-icons/md';
import { darken } from 'polished';

export const CardContainer = styled.li`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  height: 62px;
  padding: 0px 20px;
  aside {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  margin 10px 0px 0px;
  transition: background 0.2s
  &:hover {
    background: ${darken('0', 'rgba(255,255,255,0.025)')};
  }
  cursor: pointer
`;

export const StyledIcon = styled(MdChevronRight)`
  color: white;
  font-size: 24px;
  margin-left: 20px;
`;
