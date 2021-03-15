import React from 'react'
import { TextInput } from 'react-native'


export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: ""
        }
    }
    setCity(city) {
        this.setState({
            city
        })
    }
    render() {
        return (
            <TextInput
                onChangeText={(text) => this.setCity(text)}
                underlineColorAndroid='transparent'
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                value={this.state.city}
            />
        )
    }

}