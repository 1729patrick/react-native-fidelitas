import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const IMAGE_HEIGHT = height * 0.7;
export const CATEGORY_INDICATOR_HEIGHT = 45;
export const SEARCH_HEIGHT = 92;

export const TOTAL_HEADER_HEIGHT = IMAGE_HEIGHT - SEARCH_HEIGHT;
