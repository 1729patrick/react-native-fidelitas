import { Dimensions, StyleSheet } from 'react-native';

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
    marginTop: 10,
    flexDirection: 'row',
  },
  indicators: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  indicator: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: 4,
    marginTop: 40,
    borderRadius: 10,
  },
});
