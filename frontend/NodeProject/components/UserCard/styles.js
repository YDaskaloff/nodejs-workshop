import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  header: {
    alignSelf: 'center',
    fontSize: 16,
  },
  divider: {
    borderWidth: 1,
    width: 244,
    alignSelf: 'center',
    backgroundColor: 'black',
  },
  body: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 250,
  },
});
