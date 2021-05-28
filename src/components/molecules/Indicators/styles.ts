import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
