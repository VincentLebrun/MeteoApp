import { StatusBar } from "expo-status-bar";
import Home from "./components/Home";
import Search from "./components/Search";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';

const Stack = createStackNavigator();
const App = () => {
  const [load,setLoaded]= useState(false)
  function fetchFonts() {
    return Font.loadAsync({
      'icomoon': require('./fonts/icomoon.ttf')
    });
  }

    if (!load) {
      // Chargement de la police icomoon
      return (
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => setLoaded({ load: true })}
          onError={console.warn}
        />
      )
    }

    return (
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator
        screenOptions={{
         headerShown: false
        }}     
        >
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Search"
            component={Search}
          />
        </Stack.Navigator>

      </NavigationContainer>
    );
  }
export default App


