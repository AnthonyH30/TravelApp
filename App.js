import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Home';
import AttractionsDetails from './src/Screens/AttractionsDetails';
import Gallery from './src/Screens/Gallery';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="AttractionsDetails" component={AttractionsDetails}/>
        <Stack.Screen name="Gallery" component={Gallery}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
