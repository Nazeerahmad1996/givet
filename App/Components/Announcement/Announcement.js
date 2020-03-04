import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {
  FlatList,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Clipboard,
  StyleSheet,
  Linking,
  StatusBar,
  TextInput,
  Alert
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { TextColor, White } from '../../Globals/colors';
import { Button } from 'react-native-paper';
import Toast from 'react-native-simple-toast';
import Modal from 'react-native-modal';
import Messages from '../AlertMessages'


export default class Login extends Component {
  state = {
    DATA: [
      {
        id: 0,

      },
      {
        id: 1,

      },

    ],
    Modal: false,
    Announce: true,
    MyAds: false,
    password: '',
    ModalState: false,
    des: '',
    Mtype: false,
    Msgtitle: '',
  };

  ToggleModal = () => {
    this.setState({ Modal: !Modal });
  };

  closeModal = () => {
    this.setState({ ModalState: false, des: '', Mtype: false, Msgtitle: '' });
  };

  renderModalContent = () => (
    <View style={Styles.modalView}>
      <View style={Styles.TopView}>
        <TouchableOpacity
          onPress={() => {
            this.ToggleModal();
          }}>
          <AntDesign name={'closecircle'} color={TextColor} size={25} />
        </TouchableOpacity>
      </View>

      <View style={{ paddingLeft: 20, paddingRight: 40 }}>
        <Text style={Styles.Point1Text}>please follow the video instructions</Text>
      </View>

      <View style={{ margin: 22, height: 180, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
        <EvilIcons name={'play'} color={TextColor} size={70} />
      </View>
    </View>
  );

  render() {
    return (
      <SafeAreaView style={[Styles.container]}>
        <Messages
          ModalState={this.state.ModalState}
          remove={this.remove}
          closeModal={this.closeModal}
          des={this.state.des}
          Mtype={this.state.Mtype}
          title={this.state.Msgtitle}
        />
        <StatusBar translucent backgroundColor="transparent" />
        <Modal
          isVisible={this.state.Modal}
          backdropColor="rgba(255,255,255,1)"
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
          style={{ overflow: 'scroll' }}>
          {this.renderModalContent()}
        </Modal>
        <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={Styles.gradient}>
          <View style={Styles.Header}>
            <Text style={Styles.HeaderText}>Announce</Text>
          </View>
          <View style={Styles.Header2}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ Announce: true, MyAds: false });
              }}>
              <Text
                style={[this.state.Announce ? Styles.pressed : Styles.HeaderText]}>
                Announce
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.setState({ Announce: false, MyAds: true });
              }}>
              <Text
                style={[
                  this.state.MyAds ? Styles.pressed : Styles.HeaderText,
                ]}>
                My Ads
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={Styles.menu}
            onPress={() => this.props.navigation.openDrawer()}>
            <Feather name={'menu'} color={'white'} size={25} />
          </TouchableOpacity>
          {this.state.Announce ? (


            <ScrollView style={[Styles.MainView, { opacity: this.state.Modal ? 0.5 : 1 }]}>
              <TouchableOpacity onPress={() => this.setState({ Modal: true })}>
                <View style={Styles.readInstructionsView}>
                  <Text style={Styles.readInstructionsText}>read Instructions</Text>
                </View>
              </TouchableOpacity>
              <View style={Styles.pointsView}>
                <Text style={Styles.Point1Text}>1. Share the link :</Text>
                <TouchableOpacity onPress={() => {
                  Linking.canOpenURL('https://www.facebook.com').then(supported => {
                    if (supported) {
                      Linking.openURL('https://www.facebook.com');
                    } else {
                      console.log("Don't know how to open URI: " + this.props.url);
                    }
                  });
                }}>
                  <Text style={Styles.Point1SubText}>
                    https://www.facebook.com/givet
              </Text>
                </TouchableOpacity>
                <Text style={Styles.Point2Text}>
                  2. Copy the code and the hashtag:
              </Text>
                <View style={Styles.Point2SubView}>
                  <Text style={Styles.Point2SubText}>#2374373</Text>
                  <TouchableOpacity onPress={() => {
                    Clipboard.setString('#2374373')
                    Toast.show('Copied');
                  }}>
                    <Image
                      style={Styles.CubeImage}
                      source={require('../../Assets/Images/delete2.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={Styles.Point2SubView}>
                  <View>
                    <Text style={Styles.Point2SubText}>#givet,</Text>
                  </View>
                  <View>
                    <Text style={Styles.Point2SubText}> #mlm,</Text>
                  </View>
                  <View>
                    <Text style={Styles.Point2SubText}> #givetNetwork</Text>

                  </View>

                  <TouchableOpacity onPress={() => {
                    Clipboard.setString('#givet, #mlm, #givetNetwork')
                    Toast.show('Copied');
                  }}>
                    <Image
                      style={Styles.CubeImage}
                      source={require('../../Assets/Images/delete2.png')}
                    />
                  </TouchableOpacity>
                </View>
                <Text style={Styles.Point3Text}>
                  3. Copy the link to your publication correctly to do the
                  validation
              </Text>
                <View style={Styles.inputView}>
                  <TextInput
                    style={Styles.inputName}
                    onChangeText={text => {
                      this.setState({ password: text });
                    }}
                    value={this.state.password}
                    placeholder={'Paste Link'}
                    secureTextEntry={true}
                  />
                </View>

                <LinearGradient
                  colors={['#ECAA0D', '#E61EB6']}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                  style={Styles.LinearGradientSellButton}>
                  <Button
                    onPress={() => {
                      if (this.state.password === '#2374373') {
                        // Alert.alert(
                        //   'PUBLICATION ID',
                        //   'The publication link, sent successfully, wait for your verification.',
                        //   [
                        //     {
                        //       text: 'Ok',
                        //       onPress: () => console.log('Cancel Pressed'),
                        //       style: 'cancel',
                        //     },
                        //   ]
                        // );
                        this.setState({ ModalState: 'fancy', Mtype: true, des: 'The publication link, sent successfully, wait for your verification.', Msgtitle: 'PUBLICATION ID' });

                        // this.props.navigation.navigate('Home');
                      }
                      else {
                        // Alert.alert(
                        //   'PUBLICATION ID',
                        //   'The publication link is not correct, try again.',
                        //   [
                        //     {
                        //       text: 'Ok',
                        //       onPress: () => console.log('Cancel Pressed'),
                        //       style: 'cancel',
                        //     },
                        //   ]
                        // );
                        this.setState({ ModalState: 'fancy', Mtype: false, des: 'The publication link is not correct, try again.', Msgtitle: 'PUBLICATION ID' });
                      }
                    }}
                    style={Styles.SellButton}
                    contentStyle={{ height: responsiveHeight(6) }}
                    labelStyle={{
                      color: White,
                      fontWeight: 'bold',
                      fontSize: responsiveFontSize(2.5),
                    }}>
                    SEND
                </Button>
                </LinearGradient>
              </View>
            </ScrollView>
          ) : (
              <View style={[Styles.MainView, { opacity: this.state.Modal ? 0.5 : 1 }]}>

                <View style={Styles.pointsView2}>
                  <FlatList
                    data={this.state.DATA}
                    keyExtractor={item => item.id}
                    renderItem={item =>
                      <View style={Styles.Box}>
                        <Text style={Styles.Point1Text}>2. My Ads :</Text>
                        <TouchableOpacity onPress={() => {
                          Linking.canOpenURL('https://www.facebook.com').then(supported => {
                            if (supported) {
                              Linking.openURL('https://www.facebook.com');
                            } else {
                              console.log("Don't know how to open URI: " + this.props.url);
                            }
                          });
                        }}>
                          <Text style={Styles.Point1SubText}>
                            https://www.facebook.com/givet
                </Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                          <Text style={Styles.Point1Text}>Date: </Text>
                          <Text style={Styles.Date}>10/01/2020</Text>
                        </View>
                      </View>
                    }
                  />
                </View>
              </View>
            )}
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
  Date: {
    color: '#a6a6a6',
    fontSize: responsiveFontSize(2.4),
  },
  Box: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: '#fcd1d1',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 15
  },
  MainView: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    elevation: 5,
  },
  modalView: {
    width: responsiveWidth(90),
    height: responsiveHeight(60),
    borderRadius: 30,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  TopView: {
    alignSelf: 'flex-end',
    marginRight: responsiveWidth(2),
    marginTop: responsiveHeight(1),
  },
  inputName: {
    marginTop: responsiveHeight(3),
    width: '100%',
    height: responsiveHeight(6),
    borderRadius: 6,
    backgroundColor: White,
    alignSelf: 'center',
    textAlign: 'center',
    borderWidth: 1
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
    // fontWeight: 'bold',
  },
  menu: {
    marginLeft: '4%',
    position: 'absolute',
    top: responsiveHeight(4.75),
  },
  readInstructionsView: {
    marginTop: responsiveHeight(2),
    width: '45%',
    height: responsiveHeight(5),
    alignSelf: 'flex-end',
    marginRight: responsiveWidth(4),
    borderRadius: 50,
    backgroundColor: White,
    borderColor: 'gray',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  readInstructionsText: {
    color: TextColor,
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },

  pointsView: {
    width: '80%',
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
  },
  pointsView2: {
    width: '90%',
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
  },
  Point1Text: {
    color: 'black',
    fontSize: responsiveFontSize(2.4),
  },
  Point1SubText: {
    color: '#0000EE',
    fontSize: responsiveFontSize(2.4),
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'grey',
    // fontWeight: 'bold',
  },
  Point2Text: {
    marginTop: responsiveHeight(7),
    color: 'black',
    fontSize: responsiveFontSize(2.4),
  },
  Point2SubView: {
    marginTop: responsiveHeight(2),
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  Point2SubText: {
    color: '#a6a6a6',
    fontSize: responsiveFontSize(2.3),
  },
  CubeImage: {
    height: responsiveHeight(4),
    width: responsiveWidth(8),
    resizeMode: 'contain'
  },
  Point3Text: {
    marginTop: responsiveHeight(7),
    color: 'black',
    fontSize: responsiveFontSize(2.2),
  },
  inputView: {},
  SellButton: {
    width: '100%',
    borderRadius: 50,
  },
  LinearGradientSellButton: {
    marginTop: responsiveHeight(3),
    width: '60%',
    height: responsiveHeight(6),
    alignSelf: 'center',
    borderRadius: 50,
    marginBottom: responsiveHeight(2),
  },
});
