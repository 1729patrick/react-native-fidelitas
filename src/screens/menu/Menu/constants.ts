import { Dimensions } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

const { height, width } = Dimensions.get('window');

export const IMAGE_HEIGHT = height * 0.7;
export const CATEGORY_INDICATOR_HEIGHT = 45;
export const SEARCH_HEIGHT = 92;
export const SEARCH_WIDTH = width - StyleGuide.spacing * 4;
export const TOTAL_HEADER_HEIGHT = IMAGE_HEIGHT - SEARCH_HEIGHT;

export const BASKET_HEIGHT = 50;
