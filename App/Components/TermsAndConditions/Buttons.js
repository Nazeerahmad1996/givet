import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  View,
  StyleSheet,
} from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Button} from 'react-native-paper';

export default class Login extends Component {
  state = {
    Terms: true,
    Rules: false,
  };

  render() {
    return (
      <View style={Styles.ButtonView}>
        <LinearGradient
          colors={
            this.state.Terms ? ['#ECAA0D', '#E61EB6'] : ['#ffffff', '#ffffff']
          }
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={[
            this.state.Terms
              ? Styles.LinearGradientSellButton
              : Styles.SimpleButton,
          ]}>
          <Button
            onPress={() => {
              this.setState({Terms: true, Rules: false});
            }}
       
            contentStyle={{height: responsiveHeight(6)}}
            labelStyle={[
              this.state.Terms
                ? Styles.GradienttextStyles
                : Styles.SimpleTextStyles,
            ]}>
            Terms
          </Button>
        </LinearGradient>
        <LinearGradient
          colors={
            this.state.Rules ? ['#ECAA0D', '#E61EB6'] : ['#ffffff', '#ffffff']
          }
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={[
            this.state.Rules
              ? Styles.LinearGradientSellButton
              : Styles.SimpleButton,
          ]}>
          <Button
            onPress={() => {
              this.setState({Terms: false, Rules: true});
            }}
     
            
            contentStyle={{height: responsiveHeight(6)}}
            labelStyle={[
              this.state.Rules
                ? Styles.GradienttextStyles
                : Styles.SimpleTextStyles,
            ]}>
            Rules
          </Button>
        </LinearGradient>
      </View>
    );
  }
}
const Styles = StyleSheet.create({

  ButtonView: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  SellButton: {
    width: '100%',
    borderRadius: 50,
  },
  LinearGradientSellButton: {
    marginTop: responsiveHeight(2),
    width: '30%',
    height: responsiveHeight(6),
    borderRadius: 50,
    marginBottom: responsiveHeight(2),
  },
  SimpleButton: {
    marginTop: responsiveHeight(2),
    width: '30%',
    height: responsiveHeight(6),
    
     borderRadius: 50,
     
    marginBottom: responsiveHeight(2),
  },
  GradienttextStyles: {
    color: 'white',
    fontSize: responsiveFontSize(1.8),
  },
  SimpleTextStyles: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: responsiveFontSize(1.8),
  },
});
