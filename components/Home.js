import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";
// import Svg from "react-native-svg";

export default class Home extends Component {
  
  state = {
    data: [],

    isLoading: false,
  };
  async getData() {
    fetch(
      "https://api.meteo-concept.com/api/forecast/daily?token=3fe8287448ef08071efabaca2f80941a243f421b369ff39f31e0f1d5671033c3",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((cities) => {
        console.log(cities);
        this.setState({
          data: cities,
          isLoading: true,
        });
      });
  }

  async getWeathers() {
    fetch(
      "https://api.meteo-concept.com/api/ephemeride/1?token=3fe8287448ef08071efabaca2f80941a243f421b369ff39f31e0f1d5671033c3&insee=62000"
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          name: json,
          insee: json,
        });
      });
  }
  async getLocation() {
    await fetch(
      "https://api.meteo-concept.com/api/location/cities?token=3fe8287448ef08071efabaca2f80941a243f421b369ff39f31e0f1d5671033c3"
    )
      .then((response) => response.json())
      .then((json) => {
        this.setstate({
          cp: json,
        });
      });
  }
  componentDidMount() {
    // this.getData();
    // this.getWeathers();
   
  }

  render() {
    if (this.state.isLoading) {
    }
    // alert(JSON.stringify(this.state.data.cities)); Voici comment j'ai trouvé comment ("Commencer à utiliser l'api ") avec un alert pour afficher la valeur
    return (
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.container}>
            <View style={styles.textHead}>
              <Text style={styles.text}>Aure sur Mer</Text>
              <Text style={styles.textDate}>Thursday 30 april 2020</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.today}>Today</Text>
              <View style={styles.middle}>
                
                  <Ionicons name="md-rainy" size={70} color="black" />
                  <Text style={styles.textT}>13°</Text>
                
              </View>
            </View>
            <View style={styles.textUnder}>
              <Text>{JSON.stringify(this.state.data.city)}</Text>
              <Text></Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
// const vw = Dimensions.get('screen').width;
// const vh = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  body: {
    backgroundColor: "#f9f9f9",
  },
  container: {
    margin: 20,
  },
  textDate: {
    color: "#7A919D",
    fontWeight: "bold",
    fontSize: 20,
  },
  textHead: {
    textAlign: "left",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  today: {
    marginVertical: 40,
    fontSize: 35,
    textAlign: "center",
  },
  middle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "stretch",
  },
  textT: {
    fontSize: 60,
    fontWeight: "bold",
    color: "black",
  },
  textUnder: {
    fontSize: 20,
    color: "black",
    padding: 10,
  },
});
