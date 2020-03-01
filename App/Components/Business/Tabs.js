import React, { Component } from 'react';


import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { TextColor, White } from '../../Globals/colors';
import Register from './Register/Register';
import Store from './Store/Store';
import MyBusiness from './MyBusiness/MyBusiness';
export default class Login extends Component {
  state = {
    
  };
  

  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <View style={Styles.Header2}>
          <TouchableOpacity
            onPress={this.props.ShowRegister}>
            <Text
              style={[this.props.register ? Styles.pressed : Styles.HeaderText]}>
              Register
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={this.props.ShowStore}>
            <Text
              style={[this.props.store ? Styles.pressed : Styles.HeaderText]}>
              Store
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.props.MyBusiness}>
            <Text
              style={[
                this.props.myBusiness ? Styles.pressed : Styles.HeaderText,
              ]}>
              My Business
              </Text>
          </TouchableOpacity>
        </View>
        {/* <View style={Styles.TabView}>
          {this.state.register ? (
            <LinearGradient
              colors={['#ECAA0D', '#E61EB6']}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              style={Styles.LinearGradientSellButton}>
              <Button
                style={Styles.SellButton}
                uppercase={false}
                contentStyle={{ height: responsiveHeight(6) }}
                labelStyle={{
                  color: White,
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(1.3),
                }}>
                <Text style={Styles.buttonTxt}>Register</Text>
              </Button>
            </LinearGradient>
          ) : (
              <View style={Styles.ButtonView}>
                <Button
                  style={Styles.SellButton}
                  uppercase={false}
                  onPress={() => {
                    this.ShowRegister();
                  }}
                  contentStyle={{ height: responsiveHeight(6) }}
                  labelStyle={{
                    color: TextColor,
                    fontWeight: 'bold',
                    fontSize: responsiveFontSize(1.3),
                  }}>
                  <Text style={Styles.buttonTxt2}>Register</Text>
                </Button>
              </View>
            )}
          {this.state.store ? (
            <LinearGradient
              colors={['#ECAA0D', '#E61EB6']}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              style={Styles.LinearGradientSellButton}>
              <Button
                style={Styles.SellButton}
                uppercase={false}
                contentStyle={{ height: responsiveHeight(6) }}
                labelStyle={{
                  color: White,
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(1.3),
                }}>
                <Text style={Styles.buttonTxt}>Store</Text>
              </Button>
            </LinearGradient>
          ) : (
              <View style={Styles.ButtonView}>
                <Button
                  style={Styles.SellButton}
                  uppercase={false}
                  onPress={() => {
                    this.ShowStore();
                  }}
                  contentStyle={{ height: responsiveHeight(6) }}
                  labelStyle={{
                    color: TextColor,
                    fontWeight: 'bold',
                    fontSize: responsiveFontSize(1.3),
                  }}>
                  <Text style={Styles.buttonTxt2}>Store</Text>
                </Button>
              </View>
            )}

          {this.state.myBusiness ? (
            <LinearGradient
              colors={['#ECAA0D', '#E61EB6']}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              style={Styles.LinearGradientSellButton}>
              <Button
                style={Styles.SellButton}
                uppercase={false}
                contentStyle={{ height: responsiveHeight(6) }}
                labelStyle={{
                  color: White,
                  fontWeight: 'bold',
                  fontSize: responsiveFontSize(1.3),
                }}>
                <Text style={Styles.buttonTxt1}>My Business</Text>
              </Button>
            </LinearGradient>
          ) : (
              <View style={Styles.ButtonView}>
                <Button
                  style={Styles.SellButton}
                  uppercase={false}
                  onPress={() => {
                    this.MyBusiness();
                  }}
                  contentStyle={{ height: responsiveHeight(6) }}
                  labelStyle={{
                    color: TextColor,
                    fontWeight: 'bold',
                    fontSize: responsiveFontSize(1.3),
                  }}>
                  <Text style={Styles.buttonTxt3}>My Business</Text>
                </Button>
              </View>
            )}
        </View> */}
        {/* <View style={Styles.MainView}> */}
        {this.props.register ?
          <Register {...this.props} />
          : null}
        {this.props.store ? <Store StoreData={this.props.StoreData} {...this.props} /> : null}
        {this.props.myBusiness ? <MyBusiness {...this.props} /> : null}
        {/* </View> */}
      </SafeAreaView>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  Header2: {
    width: '100%',
    height: responsiveHeight(3),
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: responsiveWidth(4),
    alignItems: 'flex-end',
    marginBottom: responsiveHeight(2),
  },
  HeaderText: {
    color: White,
    fontSize: responsiveFontSize(2.5),
    // fontWeight: 'bold',
  },
  pressed: {
    color: White,
    fontSize: responsiveFontSize(2.5),
    // fontWeight: 'bold',
    borderBottomColor: '#fff',
    borderBottomWidth: 3
  },
  TabView: {
    width: '90%',
    alignSelf: 'center',
    height: responsiveHeight(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  SellButton: {
    width: '100%',
    borderRadius: 50,
  },
  LinearGradientSellButton: {
    width: '31%',
    height: responsiveHeight(6),
    borderRadius: 50,
  },
  MainView: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    elevation: 5,
  },
  ButtonView: {
    width: '32%',
    height: responsiveHeight(6),
    borderRadius: 50,
    borderColor: White,
    borderWidth: 1,
  },
  buttonTxt: {
    fontSize: responsiveFontSize(1.5),
    fontWeight: 'bold',
    color: White,
  },
  buttonTxt2: {
    fontSize: responsiveFontSize(1.5),
    fontWeight: 'bold',
    color: TextColor,
  },
  buttonTxt1: {
    fontSize: responsiveFontSize(1.3),
    fontWeight: 'bold',
    color: White,
  },
  buttonTxt3: {
    fontSize: responsiveFontSize(1.3),
    fontWeight: 'bold',
    color: TextColor,
  },
});
