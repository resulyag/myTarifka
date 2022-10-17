import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import styles from './Meals.style';
import useFetch from '../../hooks/useFetch';
import MealCard from '../../components/MealCard';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import API_URL from '../../config/ConfigMeals';

const Meals = ({route, navigation}) => {
  const {name} = route.params;
  const {loading, error, data} = useFetch(`${API_URL}=${name}`);
  const goToDetail = idMeal => {
    navigation.navigate('Detail', {idMeal});
  };
  const renderMealItem = ({item}) => (
    <MealCard Meal={item} goToDetail={() => goToDetail(item.idMeal)} />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderMealItem} />
    </SafeAreaView>
  );
};

export default Meals;
