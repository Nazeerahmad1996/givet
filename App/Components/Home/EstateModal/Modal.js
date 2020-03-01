import React, {Component} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  Text,
  View,
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
import {TextColor, White} from '../../../Globals/colors';
import {Button} from 'react-native-paper';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';

export default class Wallet extends Component {
  state = {};

  renderModalContent = () => (
    <View style={Styles.modalView}>
      <View style={Styles.crossView}>
        <TouchableOpacity
          onPress={() => {
            this.props.closeModal();
          }}>
          <Entypo name={'circle-with-cross'} color={TextColor} size={25} />
        </TouchableOpacity>
      </View>
      <View style={Styles.ParagraphView}>
        <Text style={Styles.paragraphText}>
          are you Sure you want to delete the business?
        </Text>
      </View>

      <View style={Styles.ButtonView}>
        <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={Styles.LinearGradientSellButton}>
          <Button
            onPress={() => {
              this.props.closeModal();
            }}
            style={Styles.SellButton}
            contentStyle={{height: responsiveHeight(6)}}
            labelStyle={{color: White, fontWeight: 'bold'}}>
            No
          </Button>
        </LinearGradient>
        <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={Styles.LinearGradientSellButton}>
          <Button
            onPress={() => {
              this.props.closeModal();
              this.props.remove();
            }}
            style={Styles.SellButton}
            contentStyle={{height: responsiveHeight(6)}}
            labelStyle={{color: White, fontWeight: 'bold'}}>
            Yes
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
          isVisible={this.props.ModalState === 'fancy'}
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
  crossView: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: responsiveHeight(7),
  },
  ParagraphView: {
    width: '60%',
    alignSelf: 'center',
  },
  paragraphText: {
    textAlign: 'center',
    fontSize: responsiveFontSize(2.5),
    color: TextColor,
  },
  ButtonView: {
    marginTop: responsiveHeight(5),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: responsiveHeight(2),
  },
  SellButton2: {
    borderRadius: 8,
    backgroundColor: TextColor,
    alignSelf: 'flex-end',
  },
  LinearGradientSellButton: {
    alignSelf: 'center',
    borderRadius: 8,
  },
});
