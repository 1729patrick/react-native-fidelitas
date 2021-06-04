import { StyleSheet } from 'react-native';
import { HEADER_HEIGHT } from '../../components/atoms/Header/constants';
import { BOTTOM_TAB_BAR_HEIGHT } from '../../components/organisms/TabBar/constants';
import StyleGuide from '../../util/StyleGuide';

export default StyleSheet.create({
  contentContainer: {
    paddingTop: HEADER_HEIGHT,
    paddingBottom: BOTTOM_TAB_BAR_HEIGHT + StyleGuide.spacing * 2,
    paddingHorizontal: StyleGuide.spacing * 2,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: StyleGuide.spacing * 2,
  },
  itemTitle: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.primary,
  },
});
