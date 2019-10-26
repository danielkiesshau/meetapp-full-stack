import React, { useEffect, useState } from 'react';
import { FlatList, Alert } from 'react-native';
import styled from 'styled-components/native';
import { withNavigationFocus } from 'react-navigation';
import api from '../../services/api';
import { PageContainer, Icon, MeetingCard } from '../../components';
import { HEADER_HEIGHT } from '../../components/Header';
import { mapToSubscription } from '../../services/mappers';

const Subscriptions = props => {
  const [loadIndicator, setLoadInd] = useState({ id: null, isQuering: false });
  const [subscriptions, setSubscriptions] = useState([]);
  const getSubscriptions = async () => {
    const { data } = await api.get('subscriptions');

    console.tron.log('MAPPED', data);
    if (data) {
      const mapped = data.map(mapToSubscription);
      setSubscriptions(mapped);
    }
  };
  useEffect(() => {
    if (props.isFocused) getSubscriptions();
    return () => {};
  }, [props.isFocused]);

  const handleCancelSubscription = event => {
    setLoadInd({ id: event.id, isQuering: true });
    api
      .delete(`subscriptions/${event.subscriptionsId}`)
      .then(() => {
        setLoadInd({ id: null, isQuering: false });
        getSubscriptions();
        Alert.alert(
          'Inscrição cancelada',
          'Você cancelou sua inscrição neste evento'
        );
      })
      .catch(e => {
        setLoadInd({ id: null, isQuering: false });
        Alert.alert('Erro', e.response.data.error);
      });
  };

  return (
    <PageContainer>
      <StyledList
        data={subscriptions}
        renderItem={({ item }) => (
          <MeetingCard
            item={item}
            isLoading={item.id === loadIndicator.id && loadIndicator.isQuering}
            handleAction={handleCancelSubscription}
            btnLabel="Cancelar inscrição"
            btnProps={{
              color: '#D44059'
            }}
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

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => <Icon name="local-offer" color={tintColor} />
};

export default withNavigationFocus(Subscriptions);

const StyledList = styled(FlatList).attrs(() => ({
  contentContainerStyle: {
    paddingTop: HEADER_HEIGHT + 20,
    paddingBottom: 10
  }
}))`
  align-self: stretch;
`;
