import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import styles from './Categories.style';
import CategoryCard from '../../components/CategoryCard';
import useFetchcat from '../../hooks/useFetchcat';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import API_URL from '../../config/ConfigCategory';

const Categories = ({navigation}) => {
  const {loading, error, data} = useFetchcat(`${API_URL}`);

  const handleCategorySelect = name => {
    navigation.navigate('Meals', {name});
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const renderCatData = ({item}) => (
    <CategoryCard
      Category={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderCatData}
        keyExtractor={item => item.idCategory}
      />
    </SafeAreaView>
  );
};

export default Categories;
