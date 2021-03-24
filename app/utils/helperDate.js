import { format, formatDistanceToNow as formatDistance } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function formatDateLiteral(date) {
  return format(new Date(date), "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });
}

export function formatDistanceToNow(date) {
  return `${formatDistance(date, { locale: ptBR })} atrás`;
}

export function formatDateWithDistance(date) {
  return `${formatDateLiteral(date)} | ${formatDistanceToNow(date)}`;
}
