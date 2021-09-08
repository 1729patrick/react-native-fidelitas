import { Dimensions, StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

const HEADER_HEIGHT = 0;
const STATUS_BAR_HEIGHT = 0;

export const headerHeight = HEADER_HEIGHT + STATUS_BAR_HEIGHT;
const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
  },
  contentContainer: {
    backgroundColor: StyleGuide.palette.background,
    height: height + 10,
  },
  header: {
    backgroundColor: StyleGuide.palette.background,
    borderTopRightRadius: StyleGuide.borderRadius * 2,
    borderTopLeftRadius: StyleGuide.borderRadius * 2,
    width: '100%',
    elevation: 15,
  },
  headerContent: {
    flexDirection: 'row',
    height: HEADER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: StyleGuide.spacing * 2,
  },
  titleButtonOK: {
    color: StyleGuide.palette.app,
    textTransform: 'uppercase',
  },
  title: {
    ...StyleGuide.typography.headline,
    color: StyleGuide.palette.primary,
  },
});
