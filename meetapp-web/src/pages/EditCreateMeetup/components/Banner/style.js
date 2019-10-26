import styled from 'styled-components';
import { MdCameraAlt } from 'react-icons/md';
import { Label } from '~/components';

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  text-align: center;
  overflow: hidden;
  margin-top 30px;
  margin-bottom: 20px;
  &:hover {
    opacity: 0.7;
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    cursor: pointer;
    justify-content: center;
  }
  img {

    cursor: pointer;
    height: 300px;
    width: 100%;
    object-fit: cover;
    transition: opacity 0.2s;
    &:hover: inherit;
    cursor: pointer;
    border-radius: inherit;
  }

  input {
    height: 100%;
    width: 100%;
    display: none;
    cursor: pointer;
  }
`;

export const StyledIcon = styled(MdCameraAlt)`
  color: rgba(255, 255, 255, 0.3);
  font-size: 54px;
`;

export const StyledLabel = styled(Label)`
  color: rgba(255, 255, 255, 0.3);
  font-size: 20px;
`;

export const ContainerInfo = styled.div``;
