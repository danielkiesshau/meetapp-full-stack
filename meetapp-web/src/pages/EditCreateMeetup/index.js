import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { set } from 'date-fns';
import { PageContainer } from '~/components';
import Banner from './components/Banner';
import {
  StyledInput,
  StyledTextArea,
  StyledForm,
  StyledButton
} from './styles';
import api from '~/services/api';
import format from '~/services/format';
import { acSetMeetup } from '~/redux/actions/meetup';
import history from '~/services/history';

export default function EditCreateMeetup() {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const selectedMeetup = useSelector(({ meetup }) => meetup.meetup);
  const user = useSelector(({ auth }) => auth.user);

  function handleSubmit(data) {
    let newDate = new Date();
    const initialDate = new Date();
    if (data.date.length > 0) {
      const [dateObj, time] = data.date.split(' ');
      const [hours, minutes] = time.split(':');
      newDate = set(new Date(dateObj), {
        hours: Number(hours),
        minutes: Number(minutes)
      });
    }
    if (selectedMeetup) {
      const updated = {
        ...data,
        date: {
          value: newDate,
          label: format(newDate, "dd 'de' MMMM, 'às' hh'h'")
        }
      };
      api
        .put(`events/${selectedMeetup.id}`, {
          ...updated,
          date: newDate === initialDate ? selectedMeetup.date.value : newDate
        })
        .then(async () => {
          const response = await api.get(`files/${updated.banner_id}`);
          dispatch(
            acSetMeetup({
              ...selectedMeetup,
              ...updated,
              banner: { url: response.data, id: updated.banner_id }
            })
          );
          toast.success('Atualização feita com sucesso');
          setLoading(false);
        })
        .catch(e => console.tron.log('ERROR', e));
    } else {
      api
        .post('events', {
          provider_id: user.id,
          ...data,
          date: newDate
        })
        .then(() => {
          toast.success('Meetup criado com sucesso');
          history.goBack();
        })
        .catch(() => {
          toast.error('Valide os campos inseridos');
        });
    }
  }
  return (
    <PageContainer>
      <StyledForm
        initialData={
          selectedMeetup
            ? {
                ...selectedMeetup,
                date: format(
                  new Date(selectedMeetup.date.value),
                  'yyyy/MM/dd HH:mm'
                )
              }
            : {}
        }
        onSubmit={handleSubmit}
      >
        <Banner name="banner_id" />
        <StyledInput name="title" placeholder="Título do meetup" />
        <StyledTextArea name="description" placeholder="Descrição completa" />
        <StyledInput name="date" placeholder="Data do meetup" />
        <StyledInput name="location" placeholder="Localização" />
        <StyledButton
          type="submit"
          label="Salvar meetup"
          isLoading={isLoading}
        />
      </StyledForm>
    </PageContainer>
  );
}
