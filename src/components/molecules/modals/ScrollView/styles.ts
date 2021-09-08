import { StyleSheet } from 'react-native';

const HEADER_HEIGHT = 0;
const STATUS_BAR_HEIGHT = 0;
const INDICATOR_TOTAL_HEIGHT = 0;
import StyleGuide from '~/util/StyleGuide';

const headerHeight = HEADER_HEIGHT + STATUS_BAR_HEIGHT;

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
  },
  contentContainer: {
    backgroundColor: StyleGuide.palette.background,
    paddingTop: headerHeight,
    borderTopRightRadius: StyleGuide.borderRadius * 3,
    borderTopLeftRadius: StyleGuide.borderRadius * 3,
  },
  header: {
    backgroundColor: StyleGuide.palette.background,
    paddingHorizontal: StyleGuide.spacing * 2,
    zIndex: 2,
    height: headerHeight,
    borderTopRightRadius: StyleGuide.borderRadius * 2,
    borderTopLeftRadius: StyleGuide.borderRadius * 2,
    position: 'absolute',
    width: '100%',
    elevation: 15,
  },
  headerContent: {
    flexDirection: 'row',
    marginTop: STATUS_BAR_HEIGHT - INDICATOR_TOTAL_HEIGHT,
    height: HEADER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: StyleGuide.spacing,
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
