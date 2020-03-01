import React, { Component } from 'react'
import { View } from 'react-native'

export default class AuthLoading extends Component {
    componentDidMount = () =>{
        this.props.navigation.navigate('App')
    }
    render() {
        return (
            <View>
                {/* <Text> AuthLoading </Text> */}
            </View>
        )
    }
}
