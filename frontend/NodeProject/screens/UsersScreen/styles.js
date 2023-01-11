import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSize: {
    fontSize: 17,
  },
  editButton: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'green',
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginTop: 20,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  editButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
  },
});
