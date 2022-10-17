import React from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './MealCard.style';

const MealCard = ({Meal, goToDetail}) => {
  return (
    <TouchableWithoutFeedback onPress={goToDetail}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={{uri: Meal.strMealThumb}}>
          <Text style={styles.title}>{Meal.strMeal}</Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
