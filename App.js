/* eslint-disable prettier/prettier */
import React from 'react';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from './screens/Detail';
import NavBar from './components/NavBar';

const Stack = createNativeStackNavigator();

const YourApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
          options={{
            headerTransparent: true,
            header: ({navigation}) => <NavBar navigation={navigation}/>,
          }}
        />
        <Stack.Screen name="Detail" component={Detail}
          options={{
            headerTransparent: true,
            header:({navigation})=> <NavBar navigation={navigation}/>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default YourApp;
