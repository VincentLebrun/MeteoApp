import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
// import { LogoTitle } from "./src/LogoTitle";
import Home from './components/Home';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return(
    <NavigationContainer>
      <StatusBar style="light" />

      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2I4F6C',
        },
        headerTintColor: '#fff',
        headerTitleAlign: "center"
      }}>
        <Stack.Screen
            name="Home"
            component={Home}
            // options={{ headerTitle: () => <LogoTitle /> }}
          />

      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

   
 

