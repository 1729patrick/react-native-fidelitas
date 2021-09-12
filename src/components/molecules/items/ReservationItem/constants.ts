import StyleGuide from '~/util/StyleGuide';

export const STATUS = {
  canceled: {
    title: 'Cancelado',
    color: StyleGuide.palette.red,
  },
  confirmed: {
    title: 'Confirmado',
    color: StyleGuide.palette.green,
  },
  inReview: {
    title: 'Em análise',
    color: StyleGuide.palette.blue,
  },
};
