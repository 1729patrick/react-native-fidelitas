import { StyleSheet } from 'react-native';
import StyleGuide from '../../../util/StyleGuide';
import { TOTAL_HEADER_HEIGHT } from '../../atoms/Header/constants';
import { BOTTOM_TAB_BAR_HEIGHT } from '../../organisms/TabBar/constants';

export default StyleSheet.create({
  contentContainer: {
    paddingTop: TOTAL_HEADER_HEIGHT + StyleGuide.spacing * 2,
    paddingBottom: BOTTOM_TAB_BAR_HEIGHT + StyleGuide.spacing,
    paddingHorizontal: StyleGuide.spacing * 2,
  },
  item: {
    flexDirection: 'row',
    paddingHorizontal: StyleGuide.spacing,
    paddingVertical: StyleGuide.spacing * 2,
    marginBottom: StyleGuide.spacing * 2,
    backgroundColor: StyleGuide.palette.background,
    borderRadius: StyleGuide.borderRadius * 2,
  },
  progress: {
    paddingLeft: StyleGuide.spacing,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flex: 1,
    paddingLeft: StyleGuide.spacing * 2,
  },
  title: {
    ...StyleGuide.typography.callout,
    color: StyleGuide.palette.primary,
  },
  description: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.light,
    marginTop: StyleGuide.spacing / 2,
  },
  promotion: {
    ...StyleGuide.typography.callout,
    marginTop: StyleGuide.spacing * 1.5,
    color: StyleGuide.palette.green,
  },
  needMore: {
    ...StyleGuide.typography.callout,
    marginTop: StyleGuide.spacing,
    fontSize: 12,
    color: StyleGuide.palette.secondary,
    textAlign: 'center',
  },
});
