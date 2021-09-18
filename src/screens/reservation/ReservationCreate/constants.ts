import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const MARGIN_TOP = 80;
const HEADER_HEIGHT = 70;
const FOOTER_HEIGHT = 80;

export const CONTENT_HEIGHT =
  height - MARGIN_TOP - HEADER_HEIGHT - FOOTER_HEIGHT;
