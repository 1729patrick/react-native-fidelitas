import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';
import { DEFAULT_CARD_HEIGHT } from './constants';

export default StyleSheet.create({
  contentContainer: {},
  group: { marginBottom: StyleGuide.spacing * 4 },
  title: {
    ...StyleGuide.typography.title2,
    paddingHorizontal: StyleGuide.spacing * 2,
    marginBottom: StyleGuide.spacing * 2,
  },
  loader: {
    height: DEFAULT_CARD_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
