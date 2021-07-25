import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const CAMERA_HEIGHT = height;
export const CAMERA_WIDTH = width;

export const SCANNER_SIZE = width * 0.7;
