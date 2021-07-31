import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between' },
  info: { flexDirection: 'column', flex: 1 },
  title: {
    ...StyleGuide.typography.headline,
    color: StyleGuide.palette.primary,
  },
  description: {
    ...StyleGuide.typography.caption,
    color: StyleGuide.palette.secondary,
  },
  buttons: { flexDirection: 'row', alignItems: 'center' },
  round: {
    borderWidth: 1.5,
    borderColor: StyleGuide.palette.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    height: 36,
    width: 36,
  },
  value: {
    ...StyleGuide.typography.caption,
    width: StyleGuide.spacing * 5,
    textAlign: 'center',
  },
  button: { borderRadius: 18, height: 36, width: 36 },
});
