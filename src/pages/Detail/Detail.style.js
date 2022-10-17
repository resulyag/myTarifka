import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#e1e1e1',
    margin: 10,
  },
  image: {
    width: '100%',
    height: deviceSize.height / 3.2,
    resizeMode: 'stretch',
  },
  title: {
    color: 'red',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 24,
  },
  sub_title: {
    color: 'red',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  cizgi: {
    borderWidth: 1,
    color: 'gray',
  },
  body: {
    padding: 4,
  },
  btn: {
    margin: 10,
    backgroundColor: 'red',
    padding: 13,
    alignItems: 'center',
    borderRadius: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
