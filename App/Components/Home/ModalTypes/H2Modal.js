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
import { TextColor } from '../../../Globals/colors';
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
            this.props.closeH2Gradient();
            this.props.ResetH2G();
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
            <View style={Styles.TxtView}>
              <Text style={Styles.BoldText}>Address Bitcoin :</Text>
              <Text style={Styles.ThinText}>schdvv1xe6cd5cd53scx24x4z24zw</Text>
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
            <Text style={Styles.BoldText}>Amount To Send :</Text>
            <Text style={Styles.ThinText}>0.00048BTC</Text>
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
            Please wait patiently until the buyer sends the payment: a hash will
            appear below for you to check and verify
          </Text>
        </View>
        <View style={Styles.TextView}>
          <Text style={Styles.PinkText}>Waiting For The Hash</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.props.closeH2Gradient();
            this.props.navigation.navigate('Chat', { Check: 'H2G' });
          }}
          style={Styles.CommentView}>
          <Image
            style={Styles.Image}
            source={require('../../../Assets/Images/chat2.png')}
          />
          <Text style={Styles.NotConfirmedText}>2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  render() {
    return (
      <SafeAreaView>
        <StatusBar translucent backgroundColor="transparent" />
        <Modal
          isVisible={(this.props.H2Gradient || this.props.H2G) === 'fancy'}
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

  TextView: {
    marginTop: responsiveHeight(4),
    width: '85%',
  },
  DarkText: {
    color: 'rgba(0,0,0,0.8)',
    fontSize: responsiveFontSize(2),
  },

  BlueText: {
    color: 'blue',
    fontSize: responsiveFontSize(1.6),
  },

  NotConfirmedText: {
    color: 'red',
    fontSize: responsiveFontSize(2.2),
  },

  CommentView: {
    marginTop: responsiveHeight(5),
    marginBottom: responsiveHeight(10),
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
  },
  Image: {
    width: responsiveWidth(12),
    height: responsiveHeight(6.5),
    resizeMode: 'contain',
  },
  PinkText: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: 'bold',
    color: 'pink',
  },
  flexView: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TxtView: {
    width: '80%'
  }
});
