import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '~/components';
import { StyledIcon, CardContainer } from './style';

const MeetupCard = ({ meetup, handleOnClick }) => (
  <CardContainer onClick={() => handleOnClick(meetup)}>
    <Label>{meetup.title}</Label>
    <aside>
      <Label highlight={false}>{meetup.date.label}</Label>
      <StyledIcon />
    </aside>
  </CardContainer>
);

export default MeetupCard;

MeetupCard.propTypes = {
  meetup: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  }),
  handleOnClick: PropTypes.func.isRequired
};

MeetupCard.defaultProps = {
  meetup: {
    title: '',
    date: ''
  }
};
