import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {TextColor, White, LightBackground} from '../../../Globals/colors';
import {Button} from 'react-native-paper';
import Modal from 'react-native-modal';

export default class Pay extends Component {
  state = {
    password: '',
    resendModal: false,
  };
  renderModalContent = () => (
    <View style={Styles.modalView}>
      <TouchableOpacity
            onPress={() => {
              this.props.closeResendModal();
            }}
            style={Styles.closeView}>
            <Entypo name={'circle-with-cross'} color={TextColor} size={25} />
      </TouchableOpacity>
      <View style={Styles.InnerContentView}>
        <Text style={Styles.HeadingText}>Remember Password Security</Text>
        <View style={Styles.inputView}>
          <TextInput
            style={Styles.inputName}
            onChangeText={text => {
              this.setState({password: text});
            }}
            value={this.state.password}
            placeholder={'mail'}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            this.setState({resendModal: 'fancy'});
          }}></TouchableOpacity>

        <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={Styles.LinearGradientSellButton}>
          <Button
            style={Styles.LinearButton}
            contentStyle={{height: responsiveHeight(7)}}
            onPress={() => {
              this.props.closeResendModal();
            }}
            labelStyle={{color: LightBackground, fontWeight: 'bold'}}>
            <Text style={Styles.buttonTxt}>Sell</Text>
          </Button>
        </LinearGradient>
      </View>
    </View>
  );

  render() {
    return (
      <SafeAreaView>
        <StatusBar translucent backgroundColor="transparent" />
        <Modal
          isVisible={this.props.resendModalState === 'fancy'}
          backdropColor="rgba(0,0,0,0.1)"
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
          style={{overflow: 'scroll'}}>
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
  InnerContentView: {
    width: '70%',
    alignSelf: 'center',
  },
  HeadingText: {
    marginTop: responsiveHeight(4),
    fontSize: responsiveFontSize(2.5),
    color: TextColor,
    textAlign:'center'
  },

  inputName: {
    marginTop: responsiveHeight(1),
    width: '100%',
    height: responsiveHeight(8),
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: LightBackground,
    padding: '2%',
    borderColor: White,
  },

  ButtonView: {
    width: '100%',
    height: responsiveHeight(10),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  WhiteButton: {
    width: '100%',
    borderRadius: 50,
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0,0.3)',
    borderWidth: 3,
  },
  NormalButton: {
    width: '40%',
    borderRadius: 8,
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
  LinearGradientSellButton: {
    width: '70%',
    borderRadius: 50,
    marginVertical: responsiveHeight(3),
    alignSelf: 'center',
  },
  LinearButton: {
    width: '100%',
    borderRadius: 50,
  },
  inputView: {
    marginVertical: responsiveHeight(5),
  },
  closeView: {
    paddingBottom:responsiveHeight(1.7),
    paddingHorizontal: responsiveWidth(2),
    alignSelf: 'flex-end',
    top:responsiveHeight(2)
  
  },
});
