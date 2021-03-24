import React, { useEffect, useState } from 'react';
import { Button, TextInput, View, ActivityIndicator } from "react-native";
// import { StackNavigator } from "react-navigation";
const Search = ({onLocationChange} ) => {

  const [city, setCity] = useState('');
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    onLocationChange()
  }, []);
  if (loading) {
    return <ActivityIndicator />
  }


  return (
    <View>
      <TextInput
      //onChange est plus pour du react avec le e.target.value
        onChangeText={text => setCity(text)}
        defaultValue={city}
        underlineColorAndroid="transparent"
        placeholder="Search"
        style={{ height: 20, borderColor: "gray", borderWidth: 2, position: "relative" }}

      />
      
      <Button onPress={() => onLocationChange(city)} title="Rechercher" />
    </View>
  );
}

export default Search;


