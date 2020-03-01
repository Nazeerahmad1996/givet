import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  Text,
  View,
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
import {TextColor, White, LightBackground} from '../../../Globals/colors';
import {Button} from 'react-native-paper';
import Modal from 'react-native-modal';
import UserTab from './UserTab';
import Clipboard from '@react-native-community/clipboard';

export default class Pay extends Component {
  state = {
    user: false,
    addressBitcoin: '12xsdss215ds10xxdsfsdxcx21X',
    amount: '12xsdss215ds10xxdsfsdxcx21X',
    clipboardContent: 'The state variable which contains Clipboard Content',
  };

  writeToClipboard = async data => {
    await Clipboard.setString(data);
    alert('Copied to clipboard');
  };
  renderModalContent = () => (
    <View style={Styles.modalView}>
      <View style={Styles.TopView}>
        <TouchableOpacity
          onPress={async () => {
            const data=await Clipboard.getString()
            console.log("data",data);
            this.props.closePayModal();
          }}
          style={Styles.TopView}>
          <AntDesign name={'closecircle'} color={TextColor} size={25} />
        </TouchableOpacity>
      </View>
      {console.log('state', Clipboard.getString())}
      <View style={Styles.ButtonView}>
        {this.state.user ? (
          <Button
            style={Styles.UserButton}
            contentStyle={{height: responsiveHeight(6)}}
            onPress={() => {
              this.setState({user: false});
            }}
            labelStyle={{color: TextColor, fontWeight: 'bold'}}>
            <Text style={Styles.buttonTxt2}>Givet</Text>
          </Button>
        ) : (
          <LinearGradient
            colors={['#ECAA0D', '#E61EB6']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            style={Styles.LinearGradientSellButton}>
            <Button
              style={Styles.GivetButton}
              contentStyle={{height: responsiveHeight(6)}}
              labelStyle={{color: LightBackground, fontWeight: 'bold'}}>
              <Text style={Styles.buttonTxt}>Givet</Text>
            </Button>
          </LinearGradient>
        )}

        {this.state.user ? (
          <LinearGradient
            colors={['#ECAA0D', '#E61EB6']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            style={Styles.LinearGradientSellButton}>
            <Button
              style={Styles.GivetButton}
              contentStyle={{height: responsiveHeight(6)}}
              labelStyle={{color: LightBackground, fontWeight: 'bold'}}>
              <Text style={Styles.buttonTxt}>User</Text>
            </Button>
          </LinearGradient>
        ) : (
          <Button
            style={Styles.UserButton}
            contentStyle={{height: responsiveHeight(6)}}
            onPress={() => {
              this.setState({user: true});
            }}
            labelStyle={{color: TextColor, fontWeight: 'bold'}}>
            <Text style={Styles.buttonTxt2}>User</Text>
          </Button>
        )}
      </View>
      {this.state.user ? (
        <UserTab />
      ) : (
        <View>
          <Text style={Styles.ParagraphText}>
            Copy the following address and the amount for the payment of the
            penalty, after 15 to minutes That Between 72 hours wax your account
            unlocked.
          </Text>

          <View style={Styles.BottomView}>
            <View>
              <Text style={Styles.BitcoinBoldText}>Address Bitcoin :</Text>
              <Text style={Styles.BitcoinText}>
                {this.state.addressBitcoin}
              </Text>
            </View>
            <TouchableOpacity
              style={Styles.CubeImageView}
              onPress={() => this.writeToClipboard(this.state.addressBitcoin)}>
              <Image
                style={Styles.CubeImage}
                source={require('../../../Assets/Images/p.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={Styles.BottomView}>
            <View>
              <Text style={Styles.BitcoinBoldText}>Amount :</Text>
              <Text style={Styles.BitcoinText}>{this.state.amount}</Text>
            </View>
            <TouchableOpacity
              style={Styles.CubeImageView}
              onPress={() => this.writeToClipboard(this.state.addressBitcoin)}>
              <Image
                style={Styles.CubeImage}
                source={require('../../../Assets/Images/p.png')}
              />
            </TouchableOpacity>
          </View>
          <Text style={Styles.BottomText}>Pay with balance.</Text>
          <View style={Styles.GradientView}>
            <LinearGradient
              colors={['#ECAA0D', '#E61EB6']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={Styles.innerView}>
              <Text style={Styles.innerText}>0.029BTC</Text>
            </LinearGradient>
          </View>
        </View>
      )}
    </View>
  );

  render() {
    console.log('thsiisiiaisijsiojdoasjjd', this.state.clipboardContent);
    return (
      <SafeAreaView>
        <StatusBar translucent backgroundColor="transparent" />
        <Modal
          isVisible={this.props.payState === 'fancy'}
          backdropColor="rgba(0,0,0,0.1)"
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
          style={{overflow: 'scroll', justifyContent: 'flex-end'}}>
          {this.renderModalContent()}
        </Modal>
      </SafeAreaView>
    );
  }
}
const Styles = StyleSheet.create({
  modalView: {
    width: responsiveWidth(95),
    height: responsiveHeight(75),
    borderRadius: 30,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  TopView: {
    alignSelf: 'flex-end',
    marginRight: responsiveWidth(2),
    marginTop: responsiveHeight(1),
  },
  ButtonView: {
    width: '80%',
    height: responsiveHeight(10),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  GivetButton: {
    width: '100%',
    borderRadius: 8,
  },
  UserButton: {
    width: '35%',
    borderRadius: 50,
    backgroundColor: White,
    borderColor: TextColor,
    borderWidth: 2,
  },
  LinearGradientSellButton: {
    width: '35%',
    height: responsiveHeight(6),
    borderRadius: 50,
  },
  ParagraphText: {
    marginTop: responsiveHeight(1),
    width: '80%',
    alignSelf: 'center',
    color: TextColor,
    fontSize: responsiveFontSize(1.8),
    marginBottom: responsiveHeight(4),
  },
  QRView: {
    marginTop: responsiveHeight(1.5),
    width: '30%',
    alignSelf: 'center',
  },
  Image: {
    width: '100%',
    height: responsiveHeight(15),
  },
  BottomView: {
    width: '80%',
    height: responsiveHeight(8),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  BitcoinBoldText: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    color: TextColor,
  },
  BitcoinText: {
    fontSize: responsiveFontSize(1.7),
    color: TextColor,
  },
  CubeImageView: {
    width: responsiveWidth(5),
    height: responsiveHeight(5),
    justifyContent: 'center',
  },
  BottomText: {
    width: '80%',
    alignSelf: 'center',
    color: TextColor,
    fontSize: responsiveFontSize(2.2),
  },
  GradientView: {
    width: '80%',
    height: responsiveHeight(10),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  innerView: {
    width: '30%',
    height: responsiveHeight(6),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerText: {
    color: White,
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  buttonTxt: {
    fontSize: responsiveFontSize(2.1),
    fontWeight: 'bold',
    color: White,
  },
  buttonTxt2: {
    fontSize: responsiveFontSize(2.1),
    fontWeight: 'bold',
    color: TextColor,
  },
});
