import { Dimensions } from 'react-native';
import {
  CATEGORY_INDICATOR_HEIGHT,
  SEARCH_HEIGHT,
} from '~/screens/menu/Menu/constants';
import { BOTTOM_TAB_BAR_HEIGHT } from '../../TabBar/Bottom/constants';

const { height } = Dimensions.get('window');

export const DEFAULT_CARD_HEIGHT =
  height - CATEGORY_INDICATOR_HEIGHT - SEARCH_HEIGHT - BOTTOM_TAB_BAR_HEIGHT;
