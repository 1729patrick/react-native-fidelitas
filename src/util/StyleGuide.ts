const dark = {
  primary: '#eeeeee',
  secondary: '#A0A2A7',
  light: '#BFC1C4',
  background: '#1d1e21',
  backgroundPrimary: '#222326',
  backgroundSecondary: '#303137',
  border: '#27282c',
  app: '#16CA61',
  green: '#16CA61',
  red: '#D9594C',
  blue: '#3E6990',
};

const light = {
  primary: '#222326',
  secondary: '#6d6e7c',
  light: '#808080',
  background: '#fff',
  backgroundPrimary: '#fafafa',
  backgroundSecondary: '#f1f1f1',
  border: '#f1f1f1',
  app: '#16CA61',
  green: '#16CA61',
  red: '#D9594C',
  blue: '#3E6990',
};

export const palette = { dark, light };

const navigation = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(247, 247, 247)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const StyleGuide = {
  navigation,
  spacing: 8,
  borderRadius: 4,
  palette: light,
  typography: {
    body: {
      fontSize: 17,
      // lineHeight: 20,
    },
    callout: {
      fontSize: 15,
      fontFamily: 'Montserrat-SemiBold',
    },
    caption: {
      fontFamily: 'Montserrat-Medium',
      fontSize: 14,
    },
    headline: {
      fontSize: 16,
      // lineHeight: 22,
      fontFamily: 'Montserrat-SemiBold',
    },
    subhead: {
      fontSize: 14,
      // lineHeight: 20,
      fontFamily: 'Montserrat-Medium',
    },
    title1: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 21,
      // lineHeight: 41,
      letterSpacing: 0.21,
    },
    title2: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 19,
      // lineHeight: 22,
      // letterSpacing: 0.22,
    },
    title3: {
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 20,
      // lineHeight: 22,
      letterSpacing: 0.21,
    },
    tabBarLabel: {
      fontSize: 12,
      fontFamily: 'Montserrat-Medium',
    },
    link: {
      fontSize: 14,
      fontFamily: 'Montserrat-Medium',
      color: '#0582CA',
      paddingVertical: 4,
    },
  },
};

export default StyleGuide;
