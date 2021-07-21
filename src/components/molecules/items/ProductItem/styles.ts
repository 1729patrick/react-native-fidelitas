import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: StyleGuide.palette.border,
    marginBottom: StyleGuide.spacing * 2,
    marginHorizontal: StyleGuide.spacing * 2,
    borderRadius: StyleGuide.borderRadius * 2,
  },
  content: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: StyleGuide.borderRadius * 2,
    padding: StyleGuide.spacing * 1.5,
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    backgroundColor: StyleGuide.palette.background,
    borderRadius: StyleGuide.borderRadius * 2,
  },
  info: {
    paddingLeft: StyleGuide.spacing * 2,
    flex: 1,
  },
  title: {
    ...StyleGuide.typography.headline,
    color: StyleGuide.palette.primary,
    fontSize: 13.5,
  },
  description: {
    ...StyleGuide.typography.subhead,
    color: StyleGuide.palette.secondary,
  },
  price: {
    ...StyleGuide.typography.callout,
    color: StyleGuide.palette.green,
    marginTop: StyleGuide.spacing,
  },
});
