import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';
import Splash from '../pages/Splash';
import PokemonList from '../pages/PokemonList';
import MyPokemonList from '../pages/MyPokemonList';
import Exchange from '../pages/Exchange';
import PokemonDetail from '../pages/PokemonDetail';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="PokemonList" component={PokemonList} />
      <Tab.Screen name="MyPokemonList" component={MyPokemonList} />
      <Tab.Screen name="Excahnge" component={Exchange} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PokemonDetail"
        component={PokemonDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
