import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  border: {
    borderWidth: 0.5,
    borderColor: StyleGuide.palette.border,
    marginBottom: StyleGuide.spacing * 1.5,
    borderRadius: StyleGuide.borderRadius * 2,
    overflow: 'hidden',
  },
  item: {
    backgroundColor: StyleGuide.palette.background,
    borderRadius: StyleGuide.borderRadius * 2,
    flexDirection: 'row',
    paddingHorizontal: StyleGuide.spacing * 2,
    paddingVertical: StyleGuide.spacing * 2,
    borderBottomWidth: 1,
    borderBottomColor: StyleGuide.palette.border,
  },
  progress: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flex: 1,
    paddingLeft: StyleGuide.spacing * 2,
  },
  title: {
    ...StyleGuide.typography.callout,
    color: StyleGuide.palette.primary,
  },
  description: {
    ...StyleGuide.typography.subhead,
    color: StyleGuide.palette.light,
    marginTop: StyleGuide.spacing / 2,
  },
  promotion: {
    ...StyleGuide.typography.callout,
    marginTop: StyleGuide.spacing * 1.5,
    color: StyleGuide.palette.green,
  },
  needMore: {
    ...StyleGuide.typography.callout,
    marginTop: StyleGuide.spacing,
    fontSize: 12,
    color: StyleGuide.palette.secondary,
    textAlign: 'center',
  },
});
