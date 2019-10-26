import React from 'react';
import PropTypes from 'prop-types';
import {
  CardContainer,
  MeetingImg,
  InfoContainer,
  InfoTitle,
  InfoRow,
  InfoIcon,
  InfoText,
  StyledButton
} from './styles';

const MeetingCard = ({ item, ...rest }) => (
  <CardContainer>
    <MeetingImg
      source={{
        uri: item.bannerURL
      }}
    />
    <InfoContainer>
      <InfoTitle>{item.title}</InfoTitle>
      <RowItem icon="event" label={item.day} />
      <RowItem icon="place" label={item.address} />
      <RowItem
        icon="event"
        label={`Organizador: ${item.organizer[0].toUpperCase() +
          item.organizer.substr(1)}`}
      />
    </InfoContainer>
    <StyledButton
      isLoading={rest.isLoading}
      label={rest.btnLabel}
      onPress={() => {
        rest.handleAction(item);
      }}
      {...rest.btnProps}
    />
  </CardContainer>
);

MeetingCard.propTypes = {
  item: PropTypes.shape({
    bannerURL: PropTypes.string,
    title: PropTypes.string,
    day: PropTypes.string,
    address: PropTypes.string,
    organizer: PropTypes.string
  }),
  btnLabel: PropTypes.string,
  handleAction: PropTypes.func.isRequired,
  btnProps: PropTypes.object,//eslint-disable-line
};

MeetingCard.defaultProps = {
  item: {
    bannerURL: '',
    title: '',
    day: '',
    address: '',
    organizer: ''
  },
  btnLabel: '',
  btnProps: {}
};

export default MeetingCard;

const RowItem = ({ icon, label }) => (
  <InfoRow>
    <InfoIcon name={icon} />
    <InfoText>{label}</InfoText>
  </InfoRow>
);

RowItem.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string
};

RowItem.defaultProps = {
  icon: '',
  label: ''
};
