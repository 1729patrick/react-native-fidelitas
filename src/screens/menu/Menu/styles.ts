import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';
import { BASKET_HEIGHT, IMAGE_HEIGHT } from './constants';

export default StyleSheet.create({
  image: {
    width: '100%',
    height: IMAGE_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...StyleGuide.typography.title1,
    color: StyleGuide.palette.background,
    fontSize: 27,
    textAlign: 'center',
    marginTop: 80 + 48,
  },
  contentContainer: {
    paddingTop: 35 + StyleGuide.spacing * 4,
    paddingBottom: StyleGuide.spacing + BASKET_HEIGHT + StyleGuide.spacing * 4,
  },
});
