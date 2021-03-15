import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
// import { LogoTitle } from "./src/LogoTitle";
import Home from "./components/Home";
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Search from "./components/Search";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from "./components/Search";

let Tab = createBottomTabNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar style="light" />

        <Tab.Navigator
         screenOptions={({ route })=>({
           tabBarIcon: ({focused, color, size}) =>{
             let iconName;
             if (route.name ==='Home') {
               iconName=focused 
               ? 'ios-information-circle'
               : 'ios-information-circle-outline';

             }else if (route.name === 'Search'){
               iconName= focused? 'ios-list' : 'ios-list';
             }
             return <Ionicons name={iconName} size={size} color={color}/>
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
            // options={{ headerTitle: () => <LogoTitle /> }}
          />
            <Tab.Screen
            name="Search"
            component={Search}
            // options={{ headerTitle: () => <LogoTitle /> }}
          />
        </Tab.Navigator>
       
      </NavigationContainer>
    );
  }
}
