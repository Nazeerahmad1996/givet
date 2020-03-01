import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
    Clipboard,
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { TextColor, LightBackground } from '../../Globals/colors';
import { Button } from 'react-native-paper';
// import SelModal from './SellModal';
import Toast from 'react-native-simple-toast';


import Header from './WalletHeader';
export default class WalletHistory extends Component {




    render() {
        return (
            <View>
                <Header navigation={this.props.navigation} HeaderName={'Penality'} {...this.props} />
                <View style={{backgroundColor:'#fff',borderTopRightRadius:25,borderTopLeftRadius:25,marginTop:-20}}>
                    <View style={Styles.View1}>
                        <Text style={{ fontSize: 15 }}>Copy the following address and the amount for the payment of your penalty, after 15 to minutes That Between 72 hours wax your account unlocked.</Text>

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
                                        source={require('../../Assets/Images/delete2.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={Styles.flexView}>
                            <View>
                                <Text style={Styles.BoldText}>Amount to send:</Text>
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
                                    source={require('../../Assets/Images/delete2.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={{color:TextColor,fontSize:20}}>Pay with balance.</Text>
                        <View style={Styles.ButtonView}>
                            <Text style={Styles.BoldText}>0.0029BTC</Text>
                            <LinearGradient
                                colors={['#ECAA0D', '#E61EB6']}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 1 }}
                                style={Styles.LinearGradientSellButton}>
                                <Button
                                    style={Styles.LinearButton}
                                    contentStyle={{ height: responsiveHeight(6) }}
                                    onPress={() => {
                                        // this.check()
                                    }}
                                    labelStyle={{ color: LightBackground, fontWeight: 'bold' }}>
                                    <Text style={Styles.buttonTxt}>Pay</Text>
                                </Button>
                            </LinearGradient>
                        </View>


                        {/* <View style={Styles.BlueTextView}>
          <Text style={Styles.BlueText}>
            https://www.blockchain.com/btc/tx/c4e21acac56dd5e3c543b90a9cee380c36d669109127340e00ebd647c8ff43b9
          </Text>
        </View> */}
                    </View>
                </View>
            </View>
        );
    }
}
const Styles = StyleSheet.create({
    modalView: {
        flex: 1,
    },
    TopView: {
        alignSelf: 'flex-end',
        marginRight: responsiveWidth(2),
        marginTop: responsiveHeight(1),
    },
    View1: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 30,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        backgroundColor: '#fff'
    },
    BoldText: {
        fontSize: responsiveFontSize(2.4),
        fontWeight: 'bold',
        color: TextColor,
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
        width: '40%',
        borderRadius: 50,
        marginLeft:15
    },
    ButtonView: {
        width: '100%',
        // height: responsiveHeight(15),
        marginTop:15,
        // justifyContent: 'center',
        // alignSelf: 'center',
        alignItems: 'center',
        marginBottom: responsiveHeight(3),
        flexDirection:'row'
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
