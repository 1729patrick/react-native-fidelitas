import { StyleSheet } from 'react-native';
import { STATUS_BAR_HEIGHT } from '~/components/atoms/Header/constants';
import { BOTTOM_TAB_BAR_HEIGHT } from '~/components/organisms/TabBar/Bottom/constants';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: {
    paddingTop: STATUS_BAR_HEIGHT,
    paddingHorizontal: StyleGuide.spacing * 2,
  },
  contentContainer: {
    paddingTop: StyleGuide.spacing * 2,
    paddingBottom: BOTTOM_TAB_BAR_HEIGHT + StyleGuide.spacing,
  },
});
