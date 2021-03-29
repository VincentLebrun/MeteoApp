import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import Icon from "../weatherIcon";
// import Search from "./Search";

export default class Home extends Component {
  state = {
    data: [],
    weather: [],
    date: new Date(),
    isLoading: true,
  };

  // BARRE DE RECHERCHE DE VILLE
  onLocationChange = () => {};
  ////////////////////////////////////////

  async getData() {
    await fetch(
      `https://api.meteo-concept.com/api/location/city?token=3fe8287448ef08071efabaca2f80941a243f421b369ff39f31e0f1d5671033c3&insee=62041`,
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
    fetch(
      "https://api.meteo-concept.com/api/forecast/daily?token=3fe8287448ef08071efabaca2f80941a243f421b369ff39f31e0f1d5671033c3&insee=62041",
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
          weather: json,
          isLoading: false,
        });
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { weather, data, isLoading, date } = this.state;
    if (isLoading) {
      return <Text>Chargement en cours</Text>;
    }

    return (
      <SafeAreaView>
        <View style={styles.body}>
          {/* <Search 
          onLocationChange={this.onLocationChange}
          /> */}
          <View style={styles.container}>
            <View style={styles.textHead}>
              <View style={styles.gear}>
                <Ionicons
                  class={styles.icon}
                  name="settings-outline"
                  size={30}
                  color="black"
                ></Ionicons>
                <Ionicons
                  name="search-circle-outline"
                  size={30}
                  color="black"
                ></Ionicons>
              </View>
            </View>
            <View>
              <Text style={styles.text}>{data.city.name}</Text>
              <Text style={styles.textDate}>{weather.update}</Text>
            </View>

            <View style={styles.text}>
              <Text style={styles.today}>Today</Text>
              <View style={styles.middle}>
                <Icon name="wi-day-sunny" size={80} color="black" />

                <Text style={styles.textT}>13°</Text>
              </View>
            </View>
            <View style={styles.textUnder}>
              <FlatList
                data={data}
                keyExtractor={({ city }, index) => city}
                renderItem={({ item }) => <Text></Text>}
              />

              <Text style={styles.textRain}>Rain</Text>
            </View>
            <View style={styles.middleHour}>
              <View style={styles.hourDate}>
                <Text style={styles.hourItem}>06:40</Text>
                <Text style={styles.textWeather}>Sunrise</Text>
              </View>
              <View style={styles.hourDate}>
                <Text style={styles.hourItem}>21:20</Text>
                <Text style={styles.textWeather}>Sunset</Text>
              </View>

              <View style={styles.hourDate}>
                <Text style={styles.hourItem}>14:40</Text>
                <Text style={styles.textWeather}>Duration Day</Text>
              </View>
            </View>
            <View style={styles.footer}>
              <View style={styles.hourDate}>
                <Text style={styles.textWeather}>THU</Text>
                <Icon name="wi-day-sunny" size={40} color="black" />
                <Text style={styles.hourFooter}>16°</Text>
              </View>
              <View style={styles.hourDate}>
                <Text style={styles.textWeather}>FRI</Text>
                <Icon name="wi-rain-wind" size={40} color="black" />
                <Text style={styles.hourFooter}>26°</Text>
              </View>

              <View style={styles.hourDate}>
                <Text style={styles.textWeather}>SAT</Text>
                <Icon name="wi-day-rain-wind" size={40} color="black" />
                <Text style={styles.hourFooter}>23°</Text>
              </View>
              <View style={styles.hourDate}>
                <Text style={styles.textWeather}>SUN</Text>
                <Icon name="wi-day-sprinkle" size={40} color="black" />
                <Text style={styles.hourFooter}>22°</Text>
              </View>
              <View style={styles.hourDate}>
                <Text style={styles.textWeather}>MON</Text>
                <Icon name="wi-alien" size={40} color="black" />
                <Text style={styles.hourFooter}>32°</Text>
              </View>

              <View style={styles.hourDate}>
                <Text style={styles.textWeather}>TUE</Text>
                <Icon name="wi-meteor" size={40} color="black" />
                <Text style={styles.hourFooter}>23°</Text>
              </View>
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
  gear: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-end",
    margin: 2,
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
    paddingBottom: 10,
  },
  textRain: {
    color: "#7A919D",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    paddingBottom: 30,
  },
  textUnder: {
    fontSize: 20,
    color: "black",
    padding: 10,
  },
  textWeather: {
    color: "#7A919D",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  hourItem: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  middleHour: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hourDate: {
    justifyContent: "center",
  },
  footer: {
    paddingTop: 90,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hourFooter: {
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
    paddingBottom: 60,
  },
});
