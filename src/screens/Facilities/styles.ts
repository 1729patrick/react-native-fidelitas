import { StyleSheet } from 'react-native';
import { TOTAL_HEADER_HEIGHT } from '../../components/atoms/Header/constants';
import StyleGuide from '../../util/StyleGuide';

export default StyleSheet.create({
  contentContainer: {
    paddingTop: TOTAL_HEADER_HEIGHT,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: StyleGuide.spacing * 2,
    paddingVertical: StyleGuide.spacing * 1.5,
  },
  itemTitle: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.primary,
  },
});
