import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";
// import Svg from "react-native-svg";

export default class Home extends Component {
  // constructeur(props) {
  //   super(props)
  //   this.getCity = "Arras"
  //   this.getCp= "62000"
  //   this.state = {
  //     city: [],
  //     cp: []
  //   }
  // }
  state = {
    insee: "59000",
    name: [],
    isLoading: true
    
  };
  

  async getWeathers() {
    await fetch(
      'https://api.meteo-concept.com/api/forecast/daily?token=3fe8287448ef08071efabaca2f80941a243f421b369ff39f31e0f1d5671033c3'
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          name: json,
          insee: json,
        });
      });
  }
  // async getLocation() {
  //   await fetch ("https://api.meteo-concept.com/api/location/cities?token=3fe8287448ef08071efabaca2f80941a243f421b369ff39f31e0f1d5671033c3")
  //     .then(response => response.json())
  //     .then(json => {
  //       this.setstate({
  //         cp: json,
  //       });
  //     });
  // }
  componentDidMount() {
    fetch( 'https://api.meteo-concept.com/api/forecast/daily?token=3fe8287448ef08071efabaca2f80941a243f421b369ff39f31e0f1d5671033c3')
    .then((response)=>
    response.json())
    .then((json) =>{
        console.log(json)
    })
    .catch((error)=> {
        console.log(error)
    })
    this.getWeathers();
    console.log(this.getWeathers())
    
    // this.getLocation();
  }
  render() {
    return (
      <SafeAreaView>
        <View style={styles.text}>
          <Text style={styles.textHead}>Temps pour la ville d'Arras</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.container}>
            <Ionicons name="md-cloud" size={32} color="black" />
            <Ionicons name="md-sunny" size={32} color="green" />
            <Ionicons name="md-partly-sunny" size={32} color="black" />
            <Ionicons name="md-rainy" size={32} color="black" />
          </View>
        </View>
        <View style={styles.textUnder}>
          <Text>{this.state.insee.name}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
// const vw = Dimensions.get('screen').width;
// const vh = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textHead: {
    padding: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    color: "black",
    padding: 10,
    marginStart: 5,
  },
  textUnder: {
    fontSize: 20,
    color: "black",
    padding: 10,
    marginStart: 5,
  },
});
