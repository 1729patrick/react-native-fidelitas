import { Dimensions, StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  confetti: { height, position: 'absolute', zIndex: 2 },
  rewardContainer: {
    transform: [{ scale: 1.2 }],
    zIndex: 3,
  },
  reward: {
    width,
  },
  title: {
    ...StyleGuide.typography.title1,
    fontSize: 35,
    textAlign: 'center',
    zIndex: 3,
  },
  description: {
    ...StyleGuide.typography.callout,
    fontSize: 16,
    textAlign: 'center',
    marginTop: StyleGuide.spacing * 2,
    paddingHorizontal: StyleGuide.spacing * 2,
    zIndex: 3,
  },
  button: {
    marginHorizontal: StyleGuide.spacing * 2,
    marginTop: StyleGuide.spacing * 6,
    zIndex: 3,
  },
  icon: {
    marginRight: StyleGuide.spacing,
  },
});
