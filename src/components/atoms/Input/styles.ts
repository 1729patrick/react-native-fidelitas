import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { height: 55, marginTop: 26 },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    height: 55,
    borderRadius: 4,
    paddingLeft: 19,
    color: '#444',
  },
  placeholderContainer: {
    position: 'absolute',
    paddingHorizontal: 12,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    left: -2,
  },
  placeholder: {
    backgroundColor: 'rgb(242, 242, 242)',
    color: '#888',
    paddingHorizontal: 8,
  },
});
