import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { width: '100%', flexGrow: 1 },
  title: {
    fontSize: 22,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#444',
    marginBottom: 12,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  button: {
    marginLeft: 'auto',
    width: 100,
    height: 37,
    borderRadius: 0,
    marginBottom: 20,
  },
});
