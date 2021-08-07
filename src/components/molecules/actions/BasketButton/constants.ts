import { Dimensions } from 'react-native';
import { BOTTOM_TAB_BAR_HEIGHT } from '~/components/organisms/TabBar/Bottom/constants';
import { BASKET_HEIGHT } from '~/screens/menu/Menu/constants';
import StyleGuide from '~/util/StyleGuide';

const { height } = Dimensions.get('window');

export const MARGIN_TOP =
  height - BASKET_HEIGHT - BOTTOM_TAB_BAR_HEIGHT - StyleGuide.spacing * 2;
