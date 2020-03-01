import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
} from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {TextColor, White, LightBackground} from '../../Globals/colors';
import {Button} from 'react-native-paper';

export default class Login extends Component {
  state = {
    yam: '',
    mail: '',
    user: '',
    changePass: '',
    changePassSecurity: '',
    BTCAddress: '',
    yamcheck: false,
    mailcheck: false,
    usercheck: false,
    changePasscheck: false,
    changePassSecurityCheck: false,
    BTCcheck: false,
  };

  Gradient = data => {
    return (
      <LinearGradient
        colors={['#ECAA0D', '#E61EB6']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={Styles.BallsViewLinear}
      />
    );
  };

  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={Styles.gradient}>
          <View style={Styles.Header}>
            <Text style={Styles.HeaderText}>Profile</Text>
          </View>
          <TouchableOpacity
            style={Styles.menu}
            onPress={() => this.props.navigation.openDrawer()}>
            <Feather name={'menu'} color={'white'} size={25} />
          </TouchableOpacity>
          <View style={Styles.MainView}>
            <ScrollView>
              <Text style={Styles.TextinputText}>Yam :</Text>
              <View style={Styles.flexView}>
                <TextInput
                  style={Styles.inputUser}
                  onChangeText={text => {
                    this.setState({yam: text});
                  }}
                  value={this.state.yam}
                  placeholder={'Yam'}
                />
                {this.state.yamcheck ? (
                  this.Gradient()
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({yamcheck: !this.state.yamcheck});
                    }}
                    style={Styles.BallsView}
                  />
                )}
              </View>
              <Text style={Styles.TextinputText}>mail :</Text>
              <View style={Styles.flexView}>
                <TextInput
                  style={Styles.inputUser}
                  onChangeText={text => {
                    this.setState({mail: text});
                  }}
                  value={this.state.mail}
                  placeholder={'mail'}
                />
                {this.state.mailcheck ? (
                  this.Gradient()
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({mailcheck: !this.state.mailcheck});
                    }}
                    style={Styles.BallsView}
                  />
                )}
              </View>
              <Text style={Styles.TextinputText}>User :</Text>
              <View style={Styles.flexView}>
                <TextInput
                  style={Styles.inputUser}
                  onChangeText={text => {
                    this.setState({user: text});
                  }}
                  value={this.state.user}
                  placeholder={'user'}
                />
                {this.state.usercheck ? (
                  this.Gradient()
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({usercheck: !this.state.usercheck});
                    }}
                    style={Styles.BallsView}
                  />
                )}
              </View>
              <Text style={Styles.TextinputText}>Change Password :</Text>
              <View style={Styles.flexView}>
                <TextInput
                  style={Styles.inputUser}
                  onChangeText={text => {
                    this.setState({changePasscheck: text});
                  }}
                  value={this.state.changePasscheck}
                  placeholder={'****'}
                />
                {this.state.changePasscheck ? (
                  this.Gradient()
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        changePasscheck: !this.state.changePasscheck,
                      });
                    }}
                    style={Styles.BallsView}
                  />
                )}
              </View>
              <Text style={Styles.TextinputText}>
                Change Password Security :
              </Text>
              <View style={Styles.flexView}>
                <TextInput
                  style={Styles.inputUser}
                  onChangeText={text => {
                    this.setState({changePassSecurity: text});
                  }}
                  value={this.state.changePassSecurity}
                  placeholder={'****'}
                />
                {this.state.changePassSecurityCheck ? (
                  this.Gradient()
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        changePassSecurityCheck: !this.state
                          .changePassSecurityCheck,
                      });
                    }}
                    style={Styles.BallsView}
                  />
                )}
              </View>
              <Text style={Styles.TextinputText}>BTC Address :</Text>
              <View style={Styles.flexView}>
                <TextInput
                  style={Styles.inputUser}
                  onChangeText={text => {
                    this.setState({BTCAddress: text});
                  }}
                  value={this.state.BTCAddress}
                  placeholder={'1xD458Fscxx'}
                />
                {this.state.BTCcheck ? (
                  this.Gradient()
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({BTCcheck: !this.state.BTCcheck});
                    }}
                    style={Styles.BallsView}
                  />
                )}
              </View>

              <LinearGradient
                colors={['#ECAA0D', '#E61EB6']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                style={Styles.LinearGradientSellButton}>
                <Button
                  onPress={() => {
                    this.props.navigation.navigate('Home');
                  }}
                  style={Styles.SellButton}
                  contentStyle={{height: responsiveHeight(6)}}
                  labelStyle={{color: White, fontWeight: 'bold'}}>
                  Save Data
                </Button>
              </LinearGradient>
            </ScrollView>
          </View>
        </LinearGradient>
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
  MainView: {
    flex: 1,
    backgroundColor: LightBackground,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    elevation: 5,
    paddingVertical: responsiveHeight(2),
  },
  Header: {
    width: '100%',
    height: responsiveHeight(13),
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderText: {
    color: White,
    fontSize: responsiveFontSize(2.8),
    fontWeight: 'bold',
  },
  menu: {
    marginLeft: '4%',
    position: 'absolute',
    top: responsiveHeight(4.75),
  },
  TopText: {
    textAlign: 'center',
    marginTop: responsiveHeight(3),
    fontSize: responsiveFontSize(2.4),
    fontWeight: 'bold',
    color: TextColor,
  },

  TextinputText: {
    marginTop: responsiveHeight(1),
    width: '80%',
    alignSelf: 'center',
    color: TextColor,
    fontSize: responsiveFontSize(2.4),
  },
  inputUser: {
    marginTop: responsiveHeight(1),
    width: '75%',
    height: responsiveHeight(6),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    padding: '2%',
  },
  BallsView: {
    width: responsiveHeight(6),
    height: responsiveHeight(6),
    borderRadius: responsiveHeight(6),
    backgroundColor: 'white',
  },
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
  },
  BallsViewLinear: {
    width: responsiveHeight(6),
    height: responsiveHeight(6),
    borderRadius: responsiveHeight(6),
  },
  SellButton: {
    width: '100%',
    borderRadius: 8,
  },
  LinearGradientSellButton: {
    marginTop: responsiveHeight(3),
    width: '60%',
    height: responsiveHeight(6),
    alignSelf: 'center',
    borderRadius: 50,
  },
});
