import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { TextColor, LightBackground } from '../../Globals/colors';
import { Button } from 'react-native-paper';
import Modal from 'react-native-modal';
export default class ForgotPasswordModal extends Component {
  state = {
    username: '',
  };
  renderModalContent = () => (
    <View style={Styles.modalView}>
      <TouchableOpacity
        onPress={() => {
          this.props.onClose();
        }}
        style={Styles.CloseButtonView}>
        <AntDesign name={'closecircle'} color={TextColor} size={25} />
      </TouchableOpacity>
      <View style={Styles.TopHeadingView}>
        <Text style={Styles.TopText}>Remember password security</Text>
      </View>

      <View style={Styles.InputView}>
        <TextInput
          style={Styles.inputMail}
          onChangeText={text => {
            this.setState({ username: text });
          }}
          value={this.state.username}
          placeholder={'Mail'}
        />
      </View>
      <View style={Styles.ButtonView}>
        <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          style={Styles.LinearGradientButton}>
          <Button
            style={Styles.Button}
            contentStyle={{ height: responsiveHeight(7) }}
            labelStyle={{ color: LightBackground }}>
            Resend
          </Button>
        </LinearGradient>
      </View>
    </View>
  );

  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <Modal
          isVisible={this.props.visible === 'fancy'}
          backdropColor="rgba(0,0,0,0.6)"
          backdropOpacity={0.8}
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
  container: {
    flex: 1,
  },
  modalView: {
    width: responsiveWidth(95),
    height: responsiveHeight(45),
    borderRadius: 30,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  TopHeadingView: {
    width: '100%',
    height: responsiveHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  TopText: {
    color: TextColor,
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
  },
  CloseButtonView: {

    top: responsiveHeight(2),
    right: responsiveWidth(4),
    alignSelf: 'flex-end'
  },
  InputView: {
    width: '100%',
    height: responsiveHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputMail: {
    width: '80%',
    height: responsiveHeight(7),
    borderRadius: 8,
    borderWidth: 0,
    backgroundColor: LightBackground,
    padding: '2%',
  },
  ButtonView: {
    width: '100%',
    height: responsiveHeight(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: 50,
  },
  LinearGradientButton: {
    width: '80%',
    height: responsiveHeight(7),
    alignSelf: 'center',
    borderRadius: 50,
  },
});
