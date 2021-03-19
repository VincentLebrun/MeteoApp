import React from "react";
import { Button, TextInput, View } from "react-native";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
    };
  }
  setCity(city) {
    this.setState({
      city,
    });
  }
  render() {
    return (
      <View>
        <TextInput
          onChangeText={(text) => this.setCity(text)}
          underlineColorAndroid="transparent"
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          value={this.state.city}
        />
        <Button onPress={() => this.submit()} title="Rechercher" />
      </View>
    );
  }
}
