import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Clipboard,
  StyleSheet,
  StatusBar,
  TextInput,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Toast from 'react-native-simple-toast';

import { TextColor, White, LightBackground } from '../../Globals/colors';
import MyTeam from './MyTeam';
import AppLink from 'react-native-app-link';
export default class Login extends Component {
  state = {
    Link: true,
    MyTeam: false,
    inputName: '',
    flag: false,
    flag1: false,
  };
  openMessenger = async () => {
    this.setState({ flag: true }, () => {
      if (this.state.flag) {
        url = 'https://play.google.com/store/apps/details?id=com.facebook.orca';
        appName = 'Messenger';
        appStoreId = '454638411';
        playStoreId = 'https://play.google.com/store/apps/details?id=com.facebook.orca';
        appStoreLocale = 'us'
        AppLink.maybeOpenURL(url, { appName, appStoreId, appStoreLocale, playStoreId }).then(() => {
          // do stuff
        })
          .catch((err) => {
            alert(err)
          });
      }
    })

  }

  openWhatsapp = async () => {
    this.setState({ flag1: true }, () => {
      if (this.state.flag1) {
        url = 'https://play.google.com/store/apps/details?id=com.whatsapp';
        appName = 'WhatsApp Messenger';
        appStoreId = '310633997';
        playStoreId = 'https://play.google.com/store/apps/details?id=com.whatsapp';
        appStoreLocale = 'us'
        AppLink.maybeOpenURL(url, { appName, appStoreId, appStoreLocale, playStoreId }).then(() => {
          // do stuff
        })
          .catch((err) => {
            alert(err)
          });
      }
    })

  }


  render() {


    return (

      <SafeAreaView style={Styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={Styles.gradient}>
          <View style={Styles.Header2}>
            <Text style={Styles.HeaderText}>Invite Friend</Text>
          </View>
          <View style={Styles.Header}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ Link: true, MyTeam: false });
              }}>
              <Text
                style={[this.state.Link ? Styles.pressed : Styles.HeaderText]}>
                LINK
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ Link: false, MyTeam: true });
              }}>
              <Text
                style={[
                  this.state.MyTeam ? Styles.pressed : Styles.HeaderText,
                ]}>
                MY TEAM
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={Styles.menu}
            onPress={() => this.props.navigation.openDrawer()}>
            <Feather name={'menu'} color={'white'} size={25} />
          </TouchableOpacity>
          <View style={Styles.MainView}>
            {this.state.Link ? (
              <View>
                <View style={Styles.inputView}>
                  <TextInput
                    style={Styles.inputName}
                    onChangeText={text => {
                      this.setState({ inputName: text });
                    }}
                    value={this.state.inputName}
                    placeholder={'www.givvetnetwork.com/ggdgd'}
                    value={'www.givvetnetwork.com/ggdgd/'}
                  />
                  <TouchableOpacity onPress={() => {
                    Clipboard.setString('www.givvetnetwork.com/ggdgd')
                    Toast.show('Copied');
                  }}>
                    <Image style={{ width: responsiveWidth(13), height: responsiveHeight(7), resizeMode: 'contain' }} source={require('../../Assets/Images/delete2.png')} />
                  </TouchableOpacity>
                </View>
                <View style={Styles.flexView}>
                  <TouchableOpacity onPress={() => this.openMessenger()}>
                    <LinearGradient
                      colors={['#ECAA0D', '#E61EB6']}
                      start={{ x: 0, y: 1 }}
                      end={{ x: 1, y: 1 }}
                      style={Styles.gradientView}>
                      <Image
                        style={{ resizeMode: 'contain', width: responsiveWidth(17), height: responsiveHeight(9) }}
                        source={require('../../Assets/Images/facebook.png')}
                      />
                    </LinearGradient>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.openWhatsapp()}>
                    <LinearGradient
                      colors={['#ECAA0D', '#E61EB6']}
                      start={{ x: 0, y: 1 }}
                      end={{ x: 1, y: 1 }}
                      style={Styles.gradientView}>
                      <Image
                        style={{ resizeMode: 'contain', width: responsiveWidth(17), height: responsiveHeight(9) }}
                        source={require('../../Assets/Images/whatsapp.png')}
                      />
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            ) : this.state.MyTeam ? (
              <MyTeam />
            ) : null}
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
  },
  Header: {
    width: '100%',
    height: responsiveHeight(13),
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: responsiveWidth(4),
    alignItems: 'flex-end',
    marginBottom: responsiveHeight(2),
  },
  Header2: {
    width: '100%',
    height: responsiveHeight(3),
    top: responsiveHeight(5),
    justifyContent: 'space-around',
    paddingHorizontal: responsiveWidth(4),
    alignItems: 'center',
    marginBottom: responsiveHeight(2),
  },
  HeaderText: {
    color: White,
    fontSize: responsiveFontSize(2.5),
    // fontWeight: 'bold',
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
  pressed: {
    color: White,
    fontSize: responsiveFontSize(2.5),
    // fontWeight: 'bold',
    borderBottomColor:'#fff',
    borderBottomWidth:3
  },
  inputName: {
    marginTop: responsiveHeight(1),
    width: '70%',
    height: responsiveHeight(5),
    borderRadius: 8,
    borderWidth: 1.5,
    backgroundColor: LightBackground,
    padding: '2%',
    borderColor: White,
  },
  inputView: {
    marginTop: responsiveHeight(10),
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  flexView: {
    height: responsiveHeight(40),
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  gradientView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveHeight(15),
    height: responsiveHeight(15),
    borderRadius: responsiveHeight(15),
  },
});
