import { Status } from '~/screens/reservation/Reservation';
import StyleGuide from '~/util/StyleGuide';

export const STATUS = {
  [Status.Canceled]: {
    title: 'Cancelado',
    color: StyleGuide.palette.red,
  },
  [Status.Confirmed]: {
    title: 'Confirmado',
    color: StyleGuide.palette.green,
  },
  [Status.InReview]: {
    title: 'Em análise',
    color: StyleGuide.palette.blue,
  },
};

export const CARD_HEIGHT = 86;
