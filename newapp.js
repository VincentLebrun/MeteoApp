// import React from "react";
// // import { StatusBar } from "expo-status-bar";

// import Search from "./components/Search";
// import {NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { StatusBar } from "react-native";

// // const Tabs = TabNavigator({
// //   Search: { screen: Search}
// // })
// const Stack = createStackNavigator();
// export default class App extends React.Component {
//   render() {
//     return (
//       <NavigationContainer>
//         <StatusBar barStyle="dark-content"
//         animated={true}/>
//         <Stack.Navigator
//         screenOptions={{
//           headerStyle : {
//             backgroundColor: '#FFFFFF'
//           }
//         }}>
          
//          <Stack.Screen
//             name="Rechercher"
//             component={Search}
            
//           />
//           </Stack.Navigator>
//       </NavigationContainer>
      
//     );
//   }
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Icones ionicons ceci est en quelque sorte mon dossier poubelle qui évidemment disparaitra une fois l'app finie. //
// import Ionicons from 'react-native-vector-icons/Ionicons';                                                     //
// screenOptions={({ route }) => ({                                                                               //
//     tabBarIcon: ({ focused, color, size }) => {                                                                //
//       let iconName;                                                                                            //
//       if (route.name === 'Home') {                                                                             //
//         iconName = focused
//           ? 'home'
//           : 'home';
//
//       } else if (route.name === 'Search') {
//         iconName = focused ? 'search-circle-outline' : 'search-circle';
//       }
//       return <Ionicons name={iconName} size={size} color={color} />
//     },
//   })}
//   tabBarOptions={{
//     activeTintColor: 'blue',
//     inactiveTintColor: 'green',
//
//   }}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////