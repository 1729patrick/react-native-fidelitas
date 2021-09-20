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
  action: {
    width,
    height,
  },
  top: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    marginTop: StyleGuide.spacing * 2,
  },
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  description: {
    ...StyleGuide.typography.title1,
    fontSize: 29,
    paddingLeft: 20,
    paddingRight: 30,
    marginTop: 70,
    color: StyleGuide.palette.background,
    lineHeight: 40,
  },
});
