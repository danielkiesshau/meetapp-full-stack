import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PageContainer, Button } from '~/components';
import { TitleRow, Title, List } from './styles';
import MeetupCard from './components/MeetupCard';
import api from '~/services/api';
import format from '~/services/format';
import history from '~/services/history';
import { acSetMeetup } from '~/redux/actions/meetup';

export default function Dashboard() {
  const userId = useSelector(({ auth }) => auth.user.id);
  const dispatch = useDispatch();
  const [meetups, setMeetups] = useState([]);
  useEffect(() => {
    async function getEvents() {
      const { data } = await api.get('events', {
        params: {
          isProvider: true
        }
      });

      const ms = data.map(({ date, ...rest }) => ({
        ...rest,
        date: {
          label: format(new Date(date), "dd 'de' MMMM, 'às' hh'h'"),
          value: date
        }
      }));

      setMeetups(ms);
    }

    getEvents();
    return () => {};
  }, [userId]);

  const handleMeetupClicked = meetupClicked => {
    history.push('meetup-detail');
    dispatch(acSetMeetup(meetupClicked));
  };

  const handleNewMeetup = () => {
    dispatch(acSetMeetup(null));
    history.push('meetup-create-edit');
  };

  return (
    <PageContainer>
      <TitleRow>
        <Title>Meus meetups</Title>
        <Button label="Novo meetup" onClick={handleNewMeetup} />
      </TitleRow>
      <List>
        {meetups.map(m => (
          <MeetupCard
            key={m.id}
            meetup={m}
            handleOnClick={handleMeetupClicked}
          />
        ))}
      </List>
    </PageContainer>
  );
}
