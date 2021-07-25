import { Dimensions, StyleSheet } from 'react-native';
import { BOTTOM_TAB_BAR_HEIGHT } from '~/components/organisms/TabBar/Bottom/constants';
import StyleGuide from '~/util/StyleGuide';
import { BUTTON_SIZE } from './constants';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    position: 'absolute',
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    bottom: BOTTOM_TAB_BAR_HEIGHT + 20,
    right: width / 2 - BUTTON_SIZE / 2,
    borderRadius: BUTTON_SIZE,
    backgroundColor: StyleGuide.palette.app,
    elevation: 5,
  },
  button: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
