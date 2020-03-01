import React, {Component} from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import CountryPicker from 'react-native-country-picker-modal';
export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cca2: 'US',
    };
  }
  render() {
    return (
        <View
          style={{
            width:responsiveWidth(15),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 10,
            height:responsiveHeight(6),
            marginLeft:responsiveWidth(3)
          }}>
          <CountryPicker
            countryCode={this.state.cca2}
            onSelect={value => {
              this.setState({cca2: value.cca2});
            }}
            containerButtonStyle={{alignSelf:'center', position:'relative', justifyContent:'center', alignContent:'center', alignItems:'center', marginLeft:responsiveWidth(2)}}
            withCallingCode={true}
            style={{alignSelf:'center'}}
            withFlag={true}
            withEmoji={true}
            withFilter={true}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 12,
    textAlign: 'center',
    color: '#888',
    marginBottom: 5,
  },
  data: {
    padding: 15,
    marginTop: 10,
    backgroundColor: '#ddd',
    borderColor: '#888',
    borderWidth: 1,
    color: '#777',
  },
});
