import { StyleSheet } from 'react-native';
import StyleGuide from '../../../../util/StyleGuide';

export default StyleSheet.create({
  container: {
    height: 45,
    marginTop: 22,
    overflow: 'hidden',
  },
  button: {
    paddingHorizontal: StyleGuide.spacing * 2,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    ...StyleGuide.typography.callout,
    color: StyleGuide.palette.background,
  },
  loader: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
