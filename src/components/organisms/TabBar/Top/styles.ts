import { StyleSheet } from 'react-native';
import StyleGuide from '../../../../util/StyleGuide';
import { TOTAL_HEADER_HEIGHT } from '../../../atoms/Header/constants';

import { TOP_TAB_BAR_HEIGHT } from './constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: TOTAL_HEADER_HEIGHT,
    backgroundColor: StyleGuide.palette.backgroundPrimary,
    height: TOP_TAB_BAR_HEIGHT,
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    elevation: 5,
  },
  indicator: {
    backgroundColor: StyleGuide.palette.app,
    height: 2,
    position: 'absolute',
    bottom: 0,
  },
});
