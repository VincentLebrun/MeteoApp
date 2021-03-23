import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
// import { LogoTitle } from "./src/LogoTitle";
import Home from "./components/Home";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from "./components/Search";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


const fetchFonts = () => {
  return Font.loadAsync({
    'icomoon': require('./assets/fonts/icomoon.ttf')
  });
};

let Tab = createBottomTabNavigator();
export default class App extends Component {

  state = {
    dataLoaded: false
  }

  render() {

    if(!this.state.dataLoaded) {
      // Chargement de la police icomoon
      return (
        <AppLoading
        startAsync={fetchFonts}
        onFinish={() => this.setState({ dataLoaded: true })}
        onError={console.warn}
        />
      )
    }

    return (
      <NavigationContainer>
        <StatusBar style="light" />

        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home';

              } else if (route.name === 'Search') {
                iconName = focused ? 'search-circle-outline' : 'search-circle';
              }
              return <Ionicons name={iconName} size={size} color={color} />
            },
          })}
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'green',

          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}

          />
          <Tab.Screen
            name="Search"
            component={Search}

          />
        </Tab.Navigator>

      </NavigationContainer>
    );
  }
}
