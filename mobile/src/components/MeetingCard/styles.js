import styled from 'styled-components';
import Label from '../Label';
import Icon from '../Icon';
import Button from '../Button';

export const CardContainer = styled.View`
  align-items: center;
  align-self: stretch;
  border-radius: 4px;
  align-self: stretch;
  background-color: white;
  margin-bottom: 20px;
`;

export const MeetingImg = styled.Image.attrs(() => ({
  resizeMode: 'cover'
}))`
  height: 150px;
  align-self: stretch;
`;

export const InfoContainer = styled.View`
  align-self: stretch;
  padding: 20px;
`;

export const InfoTitle = styled(Label).attrs(() => ({
  numberOfLines: 3
}))`
  color: rgb(0, 0, 0);
  font-size: 18px;
  margin-bottom: 10px;
`;

export const InfoRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
  padding-right: 10px;
`;

export const InfoText = styled(Label).attrs(() => ({
  numberOfLines: 4
}))`
  color: #999999;
  margin-left: 8px;
`;

export const InfoIcon = styled(Icon)`
  color: #999999;
`;

export const StyledButton = styled(Button)`
  align-self: stretch;
  height: 40px;
  margin: 20px;
  margin-top: 0px;
`;
