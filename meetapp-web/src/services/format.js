import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

export default function(date, formatStr) {
  return format(date, formatStr, {
    locale: pt
  });
}
