import React from "react";
import { Button, TextInput, View } from "react-native";
// import { StackNavigator } from "react-navigation";
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
  submit() {
    this.props.navigation.navigate("Result", { city: this.state.city });
  }
  render() {
    return (
      <View>
        <TextInput
          onChangeText={(text) => this.setCity(text)}
          underlineColorAndroid="transparent"
          style={{ height: 50, borderColor: "gray", borderWidth: 2,position: "relative" }}
          value={this.state.city}
        />
        <Button onPress={() => this.submit()} title="Rechercher" />
      </View>
    );
  }
}


// export default StackNavigator({
//   Search: {
//     screen: Search,
//   },
//   Result: {
//     screen: Search,
//   },
// });
