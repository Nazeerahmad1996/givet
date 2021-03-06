import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Clipboard,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { TextColor, LightBackground } from '../../../Globals/colors';
import { Button } from 'react-native-paper';
import Modal from 'react-native-modal';
import Toast from 'react-native-simple-toast';

export default class Wallet extends Component {
  state = {
    Data: [],
    TrasnactionCode: '',
  };

  renderModalContent = () => (
    <ScrollView style={Styles.modalView}>
      <View style={Styles.TopView}>
        <TouchableOpacity
          onPress={() => {
            this.props.closeNotConfirmGradient();
            this.props.ResetNotConfirmG();
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
          <Text style={Styles.ThinText}> Indu</Text>
        </View>
        <View style={Styles.Section2View}>
          <View style={Styles.flexView}>
            <View>
              <Text style={Styles.BoldText}>Address Bitcoin :</Text>
              <Text style={Styles.ThinText}>1xe6cd5cd53scx24x4z24zw</Text>
            </View>
            <TouchableOpacity onPress={() => {
              Clipboard.setString('1xe6cd5cd53scx24x4z24zwhd6dfdf6')
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
            Clipboard.setString('0.0048BTC')
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
            please check if you received the bitcoin before confirming
          </Text>
        </View>

        <View style={Styles.BlueTextView}>
          <Text style={Styles.BlueText}>
            https://www.blockchain.com/btc/tx/c4e21acac56dd5e3c543b90a9cee380c36d669109127340e00ebd647c8ff43b9
          </Text>
        </View>
        <View style={Styles.NotConfirmedView}>
          <TouchableOpacity style={Styles.NotConfirmedTouch}>
            <Text style={Styles.NotConfirmedText}>not confirmed</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name={'closecircle'} color={'red'} size={25} />
          </TouchableOpacity>
        </View>
        {/* <View style={Styles.inputView}>
          <TextInput
            style={Styles.inputUser}
            onChangeText={text => {
              this.setState({ TrasnactionCode: text });
            }}
            value={this.state.TrasnactionCode}
            placeholder={'Paste the hash transaction'}
          />
        </View> */}
        <TouchableOpacity
          onPress={() => {
            this.props.closeNotConfirmGradient();
            this.props.navigation.navigate('Chat', { Check: 'notConfirmG' });
          }}
          style={Styles.CommentView}>
          <Image
            style={Styles.Image}
            source={require('../../../Assets/Images/chat2.png')}
          />
          <Text style={Styles.NotConfirmedText}>2</Text>
        </TouchableOpacity>
        <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={Styles.LinearGradientButtonView}>
          <Button
            style={Styles.GivetButton}
            uppercase={false}
            contentStyle={{ height: responsiveHeight(7) }}
            labelStyle={{ color: LightBackground }}>
            Confirmed
          </Button>
        </LinearGradient>
      </View>
    </ScrollView>
  );

  render() {
    return (
      <SafeAreaView>
        <StatusBar translucent backgroundColor="transparent" />
        <Modal
          isVisible={
            (this.props.NotConfirmGradient || this.props.NotConfirmG) === 'fancy'
            // this.props.NotConfirmModalpropsFromChat) === 'fancy'
          }
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
    fontSize: responsiveFontSize(2),
  },
  BlueTextView: {
    marginTop: responsiveHeight(2),
    width: '85%',
  },
  BlueText: {
    color: 'blue',
    fontSize: responsiveFontSize(1.6),
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
    marginTop: responsiveHeight(3),
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
  },
  Image: {
    width: responsiveWidth(12),
    height: responsiveHeight(6),
    resizeMode: 'contain',
  },
  LinearGradientButtonView: {
    marginBottom: responsiveHeight(2),
    marginTop: responsiveHeight(4),
    alignSelf: 'center',
    width: responsiveWidth(60),
    height: responsiveHeight(7),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BuyButton: {
    width: '100%',
    borderRadius: 8,
  },
});
