import React from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import styles from './Detail.style';
import useFetchdetail from '../../hooks/useFetchdetail';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

import API_URL from '../../config/ConfigDetail';

const Detail = ({route}) => {
  const {idMeal} = route.params;
  // console.log(idMeal);
  const {loading, error, data} = useFetchdetail(`${API_URL}=${idMeal}`);

  const onYoutube = () =>
    Linking.canOpenURL(data.strYoutube).then(() => {
      Linking.openURL(data.strYoutube);
    });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={{uri: data.strMealThumb}} />
        <Text style={styles.title}>{data.strMeal}</Text>
        <Text style={styles.sub_title}>{data.strArea}</Text>
        <View style={styles.cizgi} />
        <Text style={styles.body}>{data.strInstructions}</Text>
        <TouchableOpacity style={styles.btn} onPress={onYoutube}>
          <Text style={styles.btnText}>Watch on Youtube</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
