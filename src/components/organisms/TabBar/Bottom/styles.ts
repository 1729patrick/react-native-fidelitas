import { StyleSheet } from 'react-native';
import StyleGuide from '../../../../util/StyleGuide';
import { BOTTOM_TAB_BAR_HEIGHT } from './constants';

export default StyleSheet.create({
  container: {
    height: BOTTOM_TAB_BAR_HEIGHT,
    backgroundColor: StyleGuide.palette.backgroundPrimary,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1,
    position: 'absolute',
    flexDirection: 'row',
    elevation: 10,
  },
  borderContainer: {
    left: 0,
    right: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    height: 1,
    backgroundColor: StyleGuide.palette.border,
  },
  tab: { flex: 1, justifyContent: 'flex-end', alignItems: 'center' },
  title: {
    ...StyleGuide.typography.tabBarLabel,
    marginTop: 3,
    marginBottom: 7,
  },
});
