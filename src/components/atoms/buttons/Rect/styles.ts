import { StyleSheet } from 'react-native';
import StyleGuide from '../../../../util/StyleGuide';

export default StyleSheet.create({
  container: {
    height: 45,
    marginTop: 22,
    overflow: 'hidden',
  },
  button: {
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    ...StyleGuide.typography.callout,
    color: StyleGuide.palette.background,
  },
});
