import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: { flexDirection: 'row' },
  button: {
    ...StyleGuide.typography.headline,
    color: StyleGuide.palette.green,
    fontSize: 15,
  },
  disabled: { opacity: 0.4 },
});
