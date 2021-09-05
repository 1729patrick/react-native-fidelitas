import { StyleSheet } from 'react-native';

import StyleGuide from '~/util/StyleGuide';
import { PADDING_TOP } from './constants';

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: StyleGuide.navigation.colors.background,
    overflow: 'hidden',
    zIndex: 2,
  },
  contentContainer: {
    paddingTop: PADDING_TOP,
    flexGrow: 1,
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: StyleGuide.spacing * 2,
  },
  notFoundTitle: {
    ...StyleGuide.typography.callout,
    textAlign: 'center',
    color: StyleGuide.palette.primary,
  },
  notFoundDescription: {
    ...StyleGuide.typography.caption,
    textAlign: 'center',
    color: StyleGuide.palette.secondary,
  },
});
