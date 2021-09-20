import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';
import { INDICATOR_HEIGHT, PAN_PADDING_LEFT } from './constants';

export default StyleSheet.create({
  categoryIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    borderBottomWidth: 1,
    height: INDICATOR_HEIGHT + StyleGuide.spacing * 2,
  },
  indicator: {
    height: INDICATOR_HEIGHT,
    marginHorizontal: 0,
  },
  indicatorButton: {
    height: INDICATOR_HEIGHT,
    paddingHorizontal: StyleGuide.spacing * 2,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryActive: {
    position: 'absolute',
    top: StyleGuide.spacing,
    backgroundColor: StyleGuide.palette.app,
    borderRadius: 100,
    height: INDICATOR_HEIGHT,
  },
  panContent: {
    paddingHorizontal: StyleGuide.spacing,
    paddingVertical: StyleGuide.spacing,
    flexDirection: 'row',
    position: 'absolute',
    left: PAN_PADDING_LEFT,
  },
  indicatorTitle: {
    ...StyleGuide.typography.callout,
  },
});
