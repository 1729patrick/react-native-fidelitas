import { StyleSheet } from 'react-native';
import StyleGuide from '../../../util/StyleGuide';

export default StyleSheet.create({
  container: { width: '100%', flexGrow: 1 },
  title: {
    ...StyleGuide.typography.title3,
    marginTop: StyleGuide.spacing,
    textAlign: 'center',
  },
  description: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.secondary,
    marginVertical: StyleGuide.spacing,
    textAlign: 'center',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  button: {
    marginLeft: 'auto',
    height: 38,
    marginBottom: StyleGuide.spacing * 2,
    marginTop: StyleGuide.spacing * 2,
  },
});
