import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { PageContainer, Label, Button } from '~/components';
import {
  FirstRow,
  MeetupTitle,
  ContainerActions,
  Edit,
  EditIcon,
  Banner,
  Description,
  StyledIconTime,
  Row,
  CancelIcon,
  StyledIconPlace,
  ContainerInfo
} from './styles';
import history from '~/services/history';
import api from '~/services/api';

export default function DetailMeetup() {
  const meetup = useSelector(state => state.meetup.meetup);
  const { id, title, description, date, location, banner } = meetup;
  function navigateToEdit() {
    history.push('meetup-create-edit');
  }
  async function cancelEvent() {
    try {
      await api.delete(`events/${id}`);
      toast.info(`Encontro cancelado`);
      history.push('dashboard');
    } catch (e) {
      toast.error(e.toString());
    }
  }
  return (
    <PageContainer>
      <FirstRow>
        <MeetupTitle>{title}</MeetupTitle>
        <ContainerActions>
          <Edit onClick={navigateToEdit} label="Editar">
            <EditIcon />
          </Edit>
          <Button onClick={cancelEvent} label="Cancelar">
            <CancelIcon />
          </Button>
        </ContainerActions>
      </FirstRow>
      <Banner src={banner.url} alt="banner" />
      <Description>{description}</Description>
      <ContainerInfo>
        <Row>
          <StyledIconTime />
          <Label highlight={false}>{date.label}</Label>
        </Row>
        <Row>
          <StyledIconPlace />
          <Label highlight={false}>{location}</Label>
        </Row>
      </ContainerInfo>
    </PageContainer>
  );
}

DetailMeetup.propTypes = {
  meetup: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.shape({
      label: PropTypes.string
    }),
    banner: PropTypes.shape({
      url: PropTypes.string
    })
  })
};

DetailMeetup.defaultProps = {
  meetup: {
    title: '',
    description: '',
    date: {
      label: ''
    },
    location: '',
    banner: {
      url: ''
    }
  }
};
