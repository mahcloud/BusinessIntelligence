/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Businesses from './screens/Businesses';
import BusinessDetail from './screens/BusinessDetail';

const MainNavigator = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator initialRouteName="Businesses">
        <MainNavigator.Screen name="Businesses" component={Businesses} />
        <MainNavigator.Screen name="BusinessDetail" component={BusinessDetail} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
