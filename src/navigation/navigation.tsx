// src/navigation/navigation.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chpt01Screen from '../Chapters/chpt01/chpt01';
import Chpt02Screen from '../Chapters/chpt02/chpt02';
import Chpt03Screen from '../Chapters/chpt03/chpt03';
import HomeScreen from '../Homescreen';

type RootStackParamList = {
  Home: undefined;
  Chpt01: undefined;
  Chpt02: undefined;
  Chpt03: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home'}}/>
      <Stack.Screen name="Chpt01" component={Chpt01Screen} options={{title: 'Chapter 01'}}/>
      <Stack.Screen name="Chpt02" component={Chpt02Screen} options={{title: 'Chapter 02'}}/>
      <Stack.Screen name="Chpt03" component={Chpt03Screen} options={{title: 'Chapter 03'}}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
