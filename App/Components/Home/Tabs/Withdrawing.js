import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {TextColor, White, LightBackground} from '../../../Globals/colors';
import {Button} from 'react-native-paper';
import SelModal from './SellModal';

export default class Login extends Component {
  state = {
    data1: [
      {id: 0.1, Heading: 'min Sell', subHeading: 'BTC 0.0048'},
      {id: 0.2, Heading: 'Max Sell', subHeading: '0.72 BTC'},
      {id: 0.3, Heading: 'Current Pack', subHeading: '0.4 BTC'},
      {id: 0.4, Heading: 'No Balance Freed', subHeading: '3 BTC'},
    ],

    checked1: true,
    checked2: false,
    amount: '',
    visible: false,
  };
  closeSellModal = () => {
    this.setState({visible: false});
  };
  render() {
    return (
      <View style={Styles.TopView}>
        <View style={Styles.topViewcross}>
        <View style={Styles.WithDrawView}>
          <Text style={Styles.inputViewText}>{'Withdrawing : '}</Text>
        </View>
        <TouchableOpacity
            onPress={() => {
              this.props.closeWithdraw();
            }}
            style={Styles.closeView}>
            <Entypo name={'circle-with-cross'} color={TextColor} size={25} />
        </TouchableOpacity>
        </View>
        <View style={Styles.CenterView}>
          <Text style={Styles.CenterHeadingText}>{'AVAILABLE BALANCE'}</Text>
          <Text style={Styles.CenterSubHeadingText}>
            {'0.54344 BTC - GVT 450-4000 USD'}
          </Text>
        </View>
        <View style={Styles.InputView}>
          <TextInput
            style={Styles.inputName}
            onChangeText={text => {
              this.setState({amount: text});
            }}
            value={this.state.amount}
            placeholder={'Paste Address of GVT Erc20'}
          />
        </View>

        <View style={Styles.ButtonView}>
          <LinearGradient
            colors={['#ECAA0D', '#E61EB6']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            style={Styles.LinearGradientSellButton}>
            <Button
              style={Styles.LinearButton}
              contentStyle={{height: responsiveHeight(6)}}
              onPress={() => {
                this.setState({visible: 'fancy'});
              }}
              labelStyle={{color: LightBackground, fontWeight: 'bold'}}>
              <Text style={Styles.buttonTxt}>Continue</Text>
            </Button>
          </LinearGradient>
        </View>
        <SelModal
          {...this.props}
          closeSellModal={this.closeSellModal}
          SellModalState={this.state.visible}
        />
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  TopView: {
    marginTop: responsiveHeight(4),
    width: '95%',
    backgroundColor: White,
    alignSelf: 'center',
    borderRadius: 8,
  },
  TopTextView: {
    width: '90%',
    alignSelf: 'center',
    height: responsiveHeight(7),
    justifyContent: 'center',
  },
  headingText: {
    color: TextColor,
    fontSize: responsiveFontSize(2.2),
  },
  MapView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
    flexDirection: 'row',
  },
  innerMapView: {
    flex: 1,

    height: responsiveHeight(6),
    justifyContent: 'space-evenly',
  },
  innerMapView2: {
    flex: 1,
    marginTop: '2%',
    marginLeft: '1%',
  },
  innerMapTextBold: {
    fontSize: responsiveFontSize(1.4),
    fontWeight: 'bold',
    color: TextColor,
  },
  innerMapTextThin: {
    fontSize: responsiveFontSize(1.4),
    color: TextColor,
  },
  innerMapTextThin2: {
    fontSize: responsiveFontSize(1.6),
    color: TextColor,
  },
  CenterView: {
    marginTop: responsiveHeight(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  CenterHeadingText: {
    color: TextColor,
    fontSize: responsiveFontSize(2.2),
  },
  CenterSubHeadingText: {
    color: TextColor,
    fontSize: responsiveFontSize(2.4),
    fontWeight: 'bold',
  },
  InputView: {
    marginTop: responsiveHeight(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputName: {
    marginTop: responsiveHeight(1),
    width: '80%',
    height: responsiveHeight(5),
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: LightBackground,
    padding: '2%',
    borderColor: White,
  },
  inputViewText: {
    color: TextColor,
    fontSize: responsiveFontSize(2),
    left:responsiveWidth(9),

  },
  CheckboxView: {
    marginTop: responsiveHeight(1),
    width: '75%',
    alignSelf: 'center',
  },
  CheckboxInnerView: {
    width: '90%',
  },
  Checkbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Block: {
    height: responsiveHeight(7),
    flex: 1,
    marginLeft: responsiveWidth(2),
    backgroundColor: LightBackground,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Block3: {
    height: responsiveHeight(7),
    width: responsiveWidth(13.2),
    marginLeft: responsiveWidth(2),
    backgroundColor: LightBackground,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ButtonView: {
    width: '100%',
    height: responsiveHeight(30),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    alignItems: 'flex-end',
    paddingBottom:responsiveHeight(2)
  },
  LinearButton: {
    width: '100%',
    borderRadius: 50,
  },
  WhiteButton: {
    width: '100%',
    borderRadius: 50,
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0,0.3)',
    borderWidth: 3,
  },
  LinearGradientSellButton: {
    width: '60%',
    borderRadius: 50,
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
  closeView: {
    paddingBottom:responsiveHeight(1.7),
    paddingHorizontal: responsiveWidth(2),
    alignSelf: 'flex-end',
    left:responsiveWidth(19)
    
  },
  WithDrawView:{
      width:'70%',
      alignSelf:'center',
     
      justifyContent: 'center',
      
  },
  topViewcross:{
    flexDirection:'row',
    marginTop:responsiveHeight(1)
  }
  
});
