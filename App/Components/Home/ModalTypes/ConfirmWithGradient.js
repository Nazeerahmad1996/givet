import React, { Component } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';


import {
  Text,
  View,
  Clipboard,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { TextColor, LightBackground } from '../../../Globals/colors';
import Modal from 'react-native-modal';
import Toast from 'react-native-simple-toast';

export default class Wallet extends Component {
  state = {
    Data: [],
    TrasnactionCode: '',
  };

  renderModalContent = () => (
    <View style={Styles.modalView}>
      <View style={Styles.TopView}>
        <TouchableOpacity
          onPress={() => {
            this.props.closeConfirmGradient();
            this.props.RestConfirmG();
          }}>
          <AntDesign name={'closecircle'} color={TextColor} size={25} />
        </TouchableOpacity>
      </View>

      <View style={Styles.View1}>
        <Text style={Styles.BoldText}>ID transition : 2345</Text>
        <View style={Styles.UserView}>
          <Text style={Styles.BoldText}>User :</Text>
          <Text style={Styles.ThinTextUnderlined}> loco1</Text>
        </View>
        <View style={Styles.UserView}>
          <Text style={Styles.BoldText}>User sponsor :</Text>
          <Text style={Styles.ThinTextUnderlined}> patoloco</Text>
        </View>
        <View style={Styles.UserView}>
          <Text style={Styles.BoldText}>Country :</Text>
          <Text style={Styles.ThinText}> indu</Text>
        </View>
        <View style={Styles.Section2View}>
          <View style={Styles.flexView}>
            <View>
              <Text style={Styles.BoldText}>Address Bitcoin :</Text>
              <Text style={Styles.ThinText}>1xe6cd5cd53scx24x4z24zw</Text>
            </View>
            <TouchableOpacity onPress={() => {
              Clipboard.setString('1xe6cd5cd53scx24x4z24zw')
              Toast.show('Copied');
            }}>
              <Image
                style={{
                  width: responsiveWidth(10),
                  height: responsiveHeight(10),
                  resizeMode: 'contain',
                }}
                source={require('../../../Assets/Images/delete2.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={Styles.flexView}>
          <View>
            <Text style={Styles.BoldText}>Amount Received :</Text>
            <Text style={Styles.ThinText}>0.0048BTC</Text>
          </View>
          <TouchableOpacity onPress={() => {
            Clipboard.setString('0.00048BTC')
            Toast.show('Copied');
          }}>
            <Image
              style={{
                width: responsiveWidth(10),
                height: responsiveHeight(10),
                resizeMode: 'contain',
              }}
              source={require('../../../Assets/Images/delete2.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={Styles.TextView}>
          <Text style={Styles.DarkText}>
            You have correctly received the bitcoin, and below is a hash to
            verify its existence at any time
          </Text>
        </View>

        <View style={Styles.BlueTextView}>
          <Text style={Styles.BlueText}>
            https://www.blockchain.com/btc/tx/c4e21acac56dd5e3c543b90a9cee380c36d669109127340e00ebd647c8ff43b9
          </Text>
        </View>
        <View style={Styles.FooterView}>
          <TouchableOpacity
            onPress={() => {
              this.props.closeConfirmGradient();
              this.props.navigation.navigate('Chat', { Check: 'confirmG' });
            }}
            style={Styles.CommentView}>
            <Image
              style={Styles.Image}
              source={require('../../../Assets/Images/chat2.png')}
            />
            <Text style={Styles.NotConfirmedText}>2</Text>
          </TouchableOpacity>

          <View style={Styles.UserView}>
            <AntDesign name={'check'} color={TextColor} size={25} />
            <Text style={Styles.ThinText}>confirmed</Text>
          </View>
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <SafeAreaView>
        <StatusBar translucent backgroundColor="transparent" />
        <Modal
          isVisible={(this.props.ConfirmGradient || this.props.ConfirmG) === 'fancy'}
          backdropColor="rgba(0,0,0,0.1)"
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
          style={{ overflow: 'scroll' }}>
          {this.renderModalContent()}
        </Modal>
      </SafeAreaView>
    );
  }
}
const Styles = StyleSheet.create({
  modalView: {
    width: responsiveWidth(95),
    borderRadius: 30,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  TopView: {
    alignSelf: 'flex-end',
    marginRight: responsiveWidth(2),
    marginTop: responsiveHeight(1),
  },
  View1: {
    width: '90%',
    alignSelf: 'center',
  },
  BoldText: {
    fontSize: responsiveFontSize(2.4),
    fontWeight: 'bold',
    color: TextColor,
  },
  UserView: {
    flexDirection: 'row',
  },
  ThinTextUnderlined: {
    fontSize: responsiveFontSize(2.1),
    color: TextColor,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: TextColor,
  },
  ThinText: {
    fontSize: responsiveFontSize(2.1),
    color: TextColor,
  },
  Section2View: {
    marginTop: responsiveHeight(4),
  },
  flexView: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextView: {
    marginTop: responsiveHeight(4),
    width: '85%',
  },
  DarkText: {
    color: 'rgba(0,0,0,0.8)',
    fontSize: responsiveFontSize(1.8),
    textAlign: 'center',
  },
  BlueTextView: {
    marginTop: responsiveHeight(2),
    width: '85%',
  },
  BlueText: {
    color: 'blue',
    fontSize: responsiveFontSize(1.6),
    textAlign: 'center',
  },
  NotConfirmedView: {
    marginTop: responsiveHeight(2),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  NotConfirmedText: {
    color: 'red',
    fontSize: responsiveFontSize(2.2),
  },
  NotConfirmedTouch: {
    right: responsiveWidth(2),
  },
  inputView: {
    marginTop: responsiveHeight(2),
    width: '85%',
  },
  inputUser: {
    width: '100%',
    height: responsiveHeight(7),
    borderRadius: 8,
    borderWidth: 0,
    backgroundColor: LightBackground,
    alignSelf: 'center',
    padding: '2%',
  },
  CommentView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  Image: {
    width: responsiveWidth(12),
    height: responsiveHeight(6.5),
    resizeMode: 'contain',
  },
  FooterView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    alignItems: 'center',
    marginBottom: responsiveHeight(10),
    height: responsiveHeight(15),
  },
});
