import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    marginTop: StyleGuide.spacing,
  },
  buttonTitle: {
    color: StyleGuide.palette.primary,
    width: '100%',
    textAlign: 'center',
  },
  subtitle: {
    ...StyleGuide.typography.title3,
    marginBottom: StyleGuide.spacing * 3,
  },
  facility: {
    paddingHorizontal: 0,
  },
});
