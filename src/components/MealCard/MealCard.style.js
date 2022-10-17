import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    margin: 15,
  },
  image: {
    flex: 1,
    width: '100%',
    height: deviceSize.height / 4,
    resizeMode: 'cover',
    borderRadius: 20,
    borderBottomRightRadius: 35,
    textAlign: 'justify',
  },
  title: {
    backgroundColor: 'gray',
    opacity: 0.7,
    justifyContent: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
});
