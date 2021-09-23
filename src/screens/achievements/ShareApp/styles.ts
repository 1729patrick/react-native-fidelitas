import { StyleSheet } from 'react-native';
import StyleGuide from '~/util/StyleGuide';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: StyleGuide.spacing * 2,
    backgroundColor: StyleGuide.navigation.colors.background,
    paddingBottom: StyleGuide.spacing * 2,
    justifyContent: 'center',
    flexGrow: 1,
  },
  title: {
    ...StyleGuide.typography.title1,
    textAlign: 'center',
    fontSize: 18,
    color: StyleGuide.palette.primary,
  },
  description: {
    ...StyleGuide.typography.callout,
    fontSize: 15,
    textAlign: 'center',
    marginTop: StyleGuide.spacing * 2,
    color: StyleGuide.palette.primary,
  },
  steps: {
    marginTop: StyleGuide.spacing * 2,
    alignItems: 'flex-start',
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: StyleGuide.spacing,
  },
  stepTitle: {
    ...StyleGuide.typography.caption,
    fontSize: 14,
    color: StyleGuide.palette.primary,
  },
  bubble: {
    ...StyleGuide.typography.title3,
    fontSize: 14,
    backgroundColor: StyleGuide.palette.app,
    color: StyleGuide.palette.background,
    borderRadius: 13,
    width: 26,
    height: 26,
    textAlignVertical: 'center',
    textAlign: 'center',
    marginRight: StyleGuide.spacing,
  },
  invitationCode: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginTop: StyleGuide.spacing * 6,
  },
  referralTitle: {
    ...StyleGuide.typography.caption,
    fontSize: 14,
  },
  referral: {
    ...StyleGuide.typography.headline,
    fontSize: 14,
    color: StyleGuide.palette.primary,
  },
  code: { flexDirection: 'row', alignItems: 'center' },
  copy: {
    marginLeft: StyleGuide.spacing * 0.5,
  },
  button: {
    marginHorizontal: StyleGuide.spacing * 2,
    width: '100%',
    marginTop: StyleGuide.spacing * 1.5,
  },
  icon: {
    marginRight: StyleGuide.spacing,
  },
});
