import { Dimensions, StyleSheet } from 'react-native';
import StyleGuide from '../../../util/StyleGuide';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  contentContainer: {},
  overlay: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
  },
  navigation: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
  },
  leftAction: {
    width: width / 2,
    height,
  },
  rightAction: {
    width: width / 2,
    height,
  },
  top: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
  },
  linearGradient: {
    flex: 1,
  },
  description: {
    ...StyleGuide.typography.title1,
    fontSize: 29,
    paddingHorizontal: 20,
    marginTop: 70,
    color: StyleGuide.palette.background,
    lineHeight: 40,
  },
});
