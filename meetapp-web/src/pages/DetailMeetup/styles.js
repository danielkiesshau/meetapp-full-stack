import styled from 'styled-components';
import { MdEvent, MdPlace, MdEdit, MdDeleteForever } from 'react-icons/md';
import { Label, Button } from '~/components';

export const FirstRow = styled.div`
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
  align-itens: center;
  margin: 30px 0px;
`;

export const MeetupTitle = styled(Label)`
  display: flex;
  align-items: center;
  font-size: 32px;
`;

export const ContainerActions = styled.div`
  flex-direction: row;
  justify-content: space-between;
`;

export const Edit = styled(Button).attrs(() => ({
  color: '#4dbaf9'
}))`
  margin-right: 10px;
`;

export const EditIcon = styled(MdEdit)`
  margin-right: 10px;
  font-size: 20px;
  color: white;
`;

export const CancelIcon = styled(MdDeleteForever)`
  margin-right: 10px;
  font-size: 20px;
  color: white;
`;

export const Banner = styled.img`
  object-fit: cover;
  width: 100%;
  background-color: #d8d8d8;
  height: 300px;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const Description = styled(Label)`
  height: 128px;
  align-self: strecth;
  margin-bottom: 15px;
  background: transparent;
  border: 0px;
  resize: none;
  color: white;
`;

export const ContainerInfo = styled.div`
  flex-direction: row;
  align-items: center;
`;

export const Row = styled.div`
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;
export const StyledIconTime = styled(MdEvent)`
  font-size: 20px;
  color: white;
  margin-right: 7px;
  color: rgba(255, 255, 255, 0.6);
`;

export const StyledIconPlace = styled(MdPlace)`
  font-size: 20px;
  color: white;
  margin-right: 7px;
  color: rgba(255, 255, 255, 0.6);
`;
