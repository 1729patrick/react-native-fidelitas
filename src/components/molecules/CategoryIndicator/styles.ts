import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  categoryIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingVertical: StyleGuide.spacing * 1.5,
    borderBottomWidth: 1,
    height: 35 + StyleGuide.spacing * 2,
  },
  indicator: {
    height: 35,
    paddingHorizontal: StyleGuide.spacing,
    marginHorizontal: StyleGuide.spacing,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryActive: {
    position: 'absolute',
    top: 8,
    borderWidth: 1,
    borderColor: StyleGuide.palette.primary,
    borderRadius: 50,
    height: 35,
  },
  panContent: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
  },
});
