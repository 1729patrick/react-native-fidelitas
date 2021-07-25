import { StyleSheet } from 'react-native';
import { CAMERA_HEIGHT } from './constants';

export default StyleSheet.create({
  container: { height: CAMERA_HEIGHT, backgroundColor: 'black' },
  preview: {
    flex: 1,
  },
});
