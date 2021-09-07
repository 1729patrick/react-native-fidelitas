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
    height: '100%',
    backgroundColor: StyleGuide.palette.background,
    borderRadius: StyleGuide.borderRadius * 2,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: StyleGuide.spacing * 2,
    paddingRight: StyleGuide.spacing * 2,
    paddingLeft: StyleGuide.spacing * 1.5,
    borderBottomWidth: 1,
    borderBottomColor: StyleGuide.palette.border,
  },
  content: { flex: 1 },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: { flex: 1 },
  title: {
    ...StyleGuide.typography.headline,
    fontSize: 14.5,
    color: StyleGuide.palette.primary,
  },
  description: {
    ...StyleGuide.typography.subhead,
    fontSize: 13.5,
    color: StyleGuide.palette.primary,
  },
  icon: {
    marginTop: 'auto',
    marginBottom: 'auto',
    paddingRight: StyleGuide.spacing * 1.5,
  },
  footer: {
    paddingHorizontal: StyleGuide.spacing * 2,
    paddingVertical: StyleGuide.spacing,
  },
  button: {
    marginTop: StyleGuide.spacing,
    marginBottom: StyleGuide.spacing,
  },
});
