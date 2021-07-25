import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';
import { CAMERA_HEIGHT, CAMERA_WIDTH, SCANNER_SIZE } from './constants';

export default StyleSheet.create({
  container: {},
  camera: { height: CAMERA_HEIGHT },
  left: {
    position: 'absolute',
    left: 0,
    width: (CAMERA_WIDTH - SCANNER_SIZE) / 2,
    height: CAMERA_HEIGHT,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  right: {
    position: 'absolute',
    right: 0,
    width: (CAMERA_WIDTH - SCANNER_SIZE) / 2,
    height: CAMERA_HEIGHT,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: (CAMERA_WIDTH - SCANNER_SIZE) / 2,
    width: CAMERA_WIDTH - (CAMERA_WIDTH - SCANNER_SIZE),
    height: (CAMERA_HEIGHT - SCANNER_SIZE) / 2,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  top: {
    position: 'absolute',
    top: 0,
    left: (CAMERA_WIDTH - SCANNER_SIZE) / 2,
    width: CAMERA_WIDTH - (CAMERA_WIDTH - SCANNER_SIZE),
    height: (CAMERA_HEIGHT - SCANNER_SIZE) / 2,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  border: {
    position: 'absolute',
    height: SCANNER_SIZE,
    width: SCANNER_SIZE,
    borderColor: StyleGuide.palette.app,
    borderWidth: 2,
    top: (CAMERA_HEIGHT - SCANNER_SIZE) / 2,
    left: (CAMERA_WIDTH - SCANNER_SIZE) / 2,
  },
  preview: {
    flex: 1,
  },
});
