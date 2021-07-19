import { StyleSheet } from 'react-native';
import StyleGuide from '../../util/StyleGuide';
import { TOTAL_HEADER_HEIGHT } from '~/components/atoms/Header/constants';
import { BOTTOM_TAB_BAR_HEIGHT } from '~/components/organisms/TabBar/Bottom/constants';

export default StyleSheet.create({
  progressGlobal: {
    ...StyleGuide.typography.callout,
    color: StyleGuide.palette.secondary,
  },
  contentContainer: {
    paddingTop: TOTAL_HEADER_HEIGHT + StyleGuide.spacing * 2,
    paddingBottom: BOTTOM_TAB_BAR_HEIGHT + StyleGuide.spacing,
    paddingHorizontal: StyleGuide.spacing * 2,
  },
});
