import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {TextColor, LightBackground} from '../../../Globals/colors';
import {Button} from 'react-native-paper';

export default class Pay extends Component {
  state = {
    user: false,
    User: '',
    Amount: '',
  };
  render() {
    return (
      <View>
        <Text style={Styles.ParagraphText}>
          When any user sending any amount to your balance will be debited.
        </Text>
        <TextInput
          style={Styles.inputUser}
          onChangeText={text => {
            this.setState({User: text});
          }}
          value={this.state.User}
          placeholder={'User'}
        />
        <TextInput
          style={Styles.inputUser}
          onChangeText={text => {
            this.setState({Amount: text});
          }}
          value={this.state.Amount}
          placeholder={'Amount'}
        />

        <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={Styles.LinearGradientSellButton}>
          <Button
            style={Styles.SellButton}
            contentStyle={{height: responsiveHeight(6)}}
            labelStyle={{color: LightBackground, fontWeight: 'bold'}}>
            Send
          </Button>
        </LinearGradient>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  ParagraphText: {
    marginTop: responsiveHeight(1),
    width: '80%',
    alignSelf: 'center',
    textAlign:'center',
    color: TextColor,
    fontSize: responsiveFontSize(2.6),
    marginBottom: responsiveHeight(4),
  },
  inputUser: {
    marginTop: responsiveHeight(2),
    alignSelf:'center',
    width: '75%',
    height: responsiveHeight(7),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    padding: '2%',
    backgroundColor:LightBackground
  },
  SellButton: {
    width: '100%',
    borderRadius: 8,
  },
  LinearGradientSellButton: {
    marginTop: responsiveHeight(6),
    width: '60%',
    height: responsiveHeight(6),
    alignSelf: 'center',
    borderRadius: 50,
  },
});
