import React, { Component } from "react";
import { StyleSheet, View, Text} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
// import Svg from "react-native-svg";

export default class Home extends Component {


  state = {
    data: [],
    weather: [],
    date: new Date(),
    isLoading: true,
  };
  async getData() {
    await fetch(
      "https://api.meteo-concept.com/api/location/city?token=3fe8287448ef08071efabaca2f80941a243f421b369ff39f31e0f1d5671033c3&insee=62041",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {

        this.setState({
          data: json,
        });
      });

    this.getWeathers();
  }

  async getWeathers() {
    fetch("https://api.meteo-concept.com/api/forecast/daily?token=3fe8287448ef08071efabaca2f80941a243f421b369ff39f31e0f1d5671033c3&insee=62041"
      , {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },

      })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          weather: json,
          isLoading: false
        });
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { data, isLoading, date } = this.state;
    if (isLoading) {
      return (
        <Text>Chargement en cours</Text>
      )
    }

    return (
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.container}>
            <View style={styles.textHead}>
              <Text style={styles.text}>{data.city.name}</Text>
              <Text style={styles.textDate}>{date.getDay()}{date.getMonth()}-{date.getFullYear()}</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.today}>Today</Text>
              <View style={styles.middle}>
                <Ionicons name="md-rainy" size={70} color="black" />
                <Text style={styles.textT}>{ }</Text>

              </View>
            </View>
            <View style={styles.textUnder}>
              <FlatList
                data={data}
                keyExtractor={({ city }, index) => city}
                renderItem={({ item }) => <Text></Text>}
              />

              {/* <Text>{data.name}</Text> */}
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
