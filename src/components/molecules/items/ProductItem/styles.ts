import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: StyleGuide.palette.border,
    marginBottom: StyleGuide.spacing * 1.5,
    marginHorizontal: StyleGuide.spacing * 2,
    borderRadius: StyleGuide.borderRadius * 2,
    overflow: 'hidden',
  },
  item: {
    // height: '100%',
    backgroundColor: StyleGuide.palette.background,
    borderRadius: StyleGuide.borderRadius * 2,
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
    minHeight: 67,
    justifyContent: 'space-between',
  },
  title: {
    ...StyleGuide.typography.headline,
    color: StyleGuide.palette.primary,
    fontSize: 13.5,
  },
  description: {
    ...StyleGuide.typography.subhead,
    color: StyleGuide.palette.secondary,
    fontSize: 12.5,
  },
  price: {
    ...StyleGuide.typography.callout,
    color: StyleGuide.palette.green,
  },
  header: {
    flexDirection: 'row',
    padding: StyleGuide.spacing * 2,
    borderBottomWidth: 1,
    borderBottomColor: StyleGuide.palette.border,
    alignItems: 'center',
  },
  footer: {},
  fieldInformation: {
    marginHorizontal: StyleGuide.spacing * 2,
    marginTop: StyleGuide.spacing * 2,
  },
  basket: {
    marginTop: StyleGuide.spacing * 2,
    paddingVertical: StyleGuide.spacing * 1.5,
    borderTopWidth: 1,
    paddingHorizontal: StyleGuide.spacing * 2,
    borderColor: StyleGuide.palette.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  total: {
    ...StyleGuide.typography.subhead,
    color: StyleGuide.palette.primary,
  },
  totalValue: {
    ...StyleGuide.typography.headline,
    fontSize: 14,
    color: StyleGuide.palette.primary,
  },
  badgeContainer: {
    position: 'absolute',
    top: StyleGuide.spacing,
    right: StyleGuide.spacing,
  },
  basketWithoutSpacing: {
    marginTop: 0,
    borderTopWidth: 0,
  },
});
