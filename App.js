import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from './src/pages/Categories';
import Meals from './src/pages/Meals';
import Detail from './src/pages/Detail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            title: 'Kategoriler',
            headerTitleAlign: 'center',
            headerTitleStyle: {color: 'orange'},
          }}
        />
        <Stack.Screen
          name="Meals"
          component={Meals}
          options={{
            title: 'Yemek Listesi',
            headerTitleAlign: 'center',
            headerTitleStyle: {color: 'orange'},
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: 'Detay',
            headerTitleAlign: 'center',
            headerTitleStyle: {color: 'orange'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
