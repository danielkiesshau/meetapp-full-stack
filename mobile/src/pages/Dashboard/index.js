import React, { useEffect, useState } from 'react';
import { FlatList, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { format, addDays, subDays } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { withNavigationFocus } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../services/api';
import { PageContainer, Icon, MeetingCard } from '../../components';
import { DayContainer, DayLabel } from './styles';
import { HEADER_HEIGHT } from '../../components/Header';
import { mapToEvent } from '../../services/mappers';

const Dashboard = props => {
  const [loadIndicator, setLoadInd] = useState({ id: null, isQuering: false });
  const [events, setEvents] = useState([]);
  const u = useSelector(({ auth: { user } }) => user);
  const [day, setDay] = useState({
    label: format(new Date(), "dd 'de' MMMM", { locale: pt }),
    value: new Date(),
    apiValue: `"${format(new Date(), 'yyyy-MM-dd', { locale: pt })}"`
  });
  async function getEvents(date) {
    const { data } = await api.get('events', {
      params: {
        date
      }
    });

    const mapped = data.map(mapToEvent);

    if (data) setEvents(mapped);
  }
  useEffect(() => {
    if (props.isFocused) getEvents(day.apiValue);
    return () => {};
  }, [day.apiValue, props.isFocused]);

  const handleSubscription = ({ id }) => {
    setLoadInd({ id, isQuering: true });
    api
      .post('subscriptions', {
        user_id: u.id,
        event_id: id
      })
      .then(() => {
        setLoadInd({ id: null, isQuering: false });
        Alert.alert(
          'Inscrição conluída',
          'Parabéns, você concluiu sua inscrição neste evento'
        );
      })
      .catch(e => {
        setLoadInd({ id: null, isQuering: false });
        Alert.alert('Erro', e.response.data.error);
      });
  };
  const alterDay = async (shouldAdd = true) => {
    const newDate = shouldAdd ? addDays(day.value, 1) : subDays(day.value, 1);
    const apiValue = `"${format(newDate, 'yyyy-MM-dd', { locale: pt })}"`;
    await setDay({
      label: format(newDate, "dd 'de' MMMM", { locale: pt }),
      value: newDate,
      apiValue
    });
    getEvents(apiValue);
  };

  return (
    <PageContainer>
      <StyledList
        data={events}
        ListHeaderComponent={
          <SectionHeader
            title={day.label}
            leftAction={() => {
              alterDay(false);
            }}
            rightAction={alterDay}
          />
        }
        renderItem={({ item }) => (
          <MeetingCard
            item={item}
            isLoading={item.id === loadIndicator.id && loadIndicator.isQuering}
            handleAction={handleSubscription}
            btnLabel="Realizar inscrição"
          />
        )}
        extraData={{
          isQuering: loadIndicator.isQuering
        }}
        keyExtractor={({ id }) => id.toString()}
      />
    </PageContainer>
  );
};

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => <Icon name="event" color={tintColor} />
};

export default withNavigationFocus(Dashboard);

const SectionHeader = ({ title, leftAction, rightAction }) => (
  <DayContainer>
    <TouchableOpacity onPress={leftAction}>
      <StyledIcon name="chevron-left" />
    </TouchableOpacity>
    <DayLabel>{title}</DayLabel>
    <TouchableOpacity onPress={rightAction}>
      <StyledIcon name="keyboard-arrow-right" />
    </TouchableOpacity>
  </DayContainer>
);

SectionHeader.propTypes = {
  title: PropTypes.string,
  leftAction: PropTypes.func.isRequired,
  rightAction: PropTypes.func.isRequired
};

SectionHeader.defaultProps = {
  title: ''
};

const StyledList = styled(FlatList).attrs(() => ({
  contentContainerStyle: {
    paddingTop: HEADER_HEIGHT + 20,
    paddingBottom: 10
  }
}))`
  align-self: stretch;
`;

const StyledIcon = styled(Icon)`
  margin: 0px 15px;
`;
