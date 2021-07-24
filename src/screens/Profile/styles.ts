import { StyleSheet } from 'react-native';
import { BOTTOM_TAB_BAR_HEIGHT } from '~/components/organisms/TabBar/constants';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingHorizontal: StyleGuide.spacing * 2,
  },
  contentContainer: {
    paddingTop: StyleGuide.spacing * 3,
    paddingBottom: BOTTOM_TAB_BAR_HEIGHT,
  },
});
