import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

export const mapToEvent = event => ({
  title: event.title,
  id: event.id,
  address: event.location,
  organizer: event.provider.name,
  bannerURL: event.banner.url.replace('localhost', '192.168.0.15'),
  day: format(new Date(event.date), "dd 'de' MMMM, 'às' k'h'", { locale: pt })
});

export const mapToSubscription = ({ id, event }) => ({
  id: event.id,
  title: event.title,
  day: format(new Date(event.date), "dd 'de' MMMM, 'às' k'h'", { locale: pt }),
  date: new Date(event.date),
  organizer: event.provider.name,
  address: event.location,
  bannerURL: event.banner.url.replace('localhost', '192.168.0.15'),
  subscriptionsId: id
});
