import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 'auto',
  },
  cardNumber: { alignItems: 'center', flexDirection: 'row' },
  cardIcon: {
    aspectRatio: 1.5,
    width: 40,
    marginRight: StyleGuide.spacing * 1.3,
  },
  dots: {
    flexDirection: 'row',
    marginRight: StyleGuide.spacing,
    alignItems: 'center',
  },
  dot: {
    height: 6,
    width: 6,
    borderRadius: 6,
    marginRight: StyleGuide.spacing * 0.5,
    backgroundColor: StyleGuide.palette.primary,
  },
  number: { ...StyleGuide.typography.subhead },
  icon: {
    marginRight: StyleGuide.spacing * 1.5,
  },
});
