import { StyleSheet } from 'react-native';

import StyleGuide from '~/util/StyleGuide';
import { PADDING_TOP } from './constants';

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: StyleGuide.navigation.colors.background,
    overflow: 'hidden',
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
  },
});
