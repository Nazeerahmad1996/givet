import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';

import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Alert
} from 'react-native';
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { TextColor, White, LightBackground } from '../../../Globals/colors';
import { Button } from 'react-native-paper';
// import SelModal from './SellModal';
import Withdraw from './Withdrawing';
import ExchangeModal from './ExchangeModal';
import { Toggle } from "./Toggle"
import isEmpty from 'validator/lib/isEmpty';
import Messages from '../../AlertMessages'


export default class Login extends Component {
    state = {
        data1: [
            { id: 0.1, Heading: 'min Sell', subHeading: 'BTC 0.0048' },
            { id: 0.2, Heading: 'Max Sell', subHeading: '0.72 BTC' },
            { id: 0.3, Heading: 'Current Pack', subHeading: '0.4 BTC' },
            { id: 0.4, Heading: 'No Balance Freed', subHeading: '3 BTC' },
            // {id: 0.5, Heading: 'Freed balance', subHeading: '3 BTC'},
        ],

        isReceiveEffectiveChecked: true,
        amount: '',
        visible: false,
        visible2: false,
        isExchange: true,
        newsletterIsOn: false,
        trackingIsOn: true,
        address: '',
        password: '',
        ModalState: false,
        des: '',
        Mtype: false,
        Msgtitle: '',
    };

    closeModal = () => {
        this.setState({ ModalState: false, des: '', Mtype: false, Msgtitle: '' });
    };

    alertsToggleHandle(state) {
        this.setState({ isExchange: state })
    }

    closeWithdraw = () => {
        this.setState({ visible: false });
    };
    closeExchangeModal = () => {
        this.setState({ visible2: false,password:'' });
    }
    check = () => {
        if (isEmpty(this.state.amount)) {
            // Alert.alert(
            //     'SELL',
            //     'something went wrong, try again',
            //     [
            //         {
            //             text: 'Ok',
            //             onPress: () => console.log('Cancel Pressed'),
            //             style: 'cancel',
            //         },
            //     ]
            // );
            this.setState({ ModalState: 'fancy', Mtype: false, des: 'something went wrong, try again', Msgtitle: 'SELL' });

        }
        else if (isEmpty(this.state.address) && !this.state.isExchange) {
            // Alert.alert(
            //     'SELL',
            //     'something went wrong, try again',
            //     [
            //         {
            //             text: 'Ok',
            //             onPress: () => console.log('Cancel Pressed'),
            //             style: 'cancel',
            //         },
            //     ]
            // );
            this.setState({ ModalState: 'fancy', Mtype: false, des: 'something went wrong, try again', Msgtitle: 'SELL' });

        }
        else {
            if (this.state.isReceiveEffectiveChecked) {
                this.setState({ visible2: 'fancy' });
            } else if (!this.state.isReceiveEffectiveChecked) {
                this.setState({ visible: true });
            }
        }
    }

    render() {
        return this.state.visible ? (
            <Withdraw closeWithdraw={this.closeWithdraw} />
        )

            : (
                <View style={Styles.TopView}>
                    <Messages
                        ModalState={this.state.ModalState}
                        remove={this.remove}
                        closeModal={this.closeModal}
                        des={this.state.des}
                        Mtype={this.state.Mtype}
                        title={this.state.Msgtitle}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            this.props.closeSellModal();
                        }}
                        style={Styles.closeView}>
                        <Entypo name={'circle-with-cross'} color={TextColor} size={25} />
                    </TouchableOpacity>
                    <ScrollView style={{ height: responsiveHeight(70) }}>
                        {/* <View style={Styles.MapView}>
                            {this.state.data1.map((item, index) => (
                                <View style={Styles.innerMapView}>
                                    <Text style={Styles.innerMapTextBold}>{item.Heading}</Text>
                                    <Text style={Styles.innerMapTextThin}>{item.subHeading}</Text>
                                </View>
                            ))}
                        </View> */}

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
                                    this.setState({ amount: text });
                                }}
                                value={this.state.amount}
                                placeholder={'Amount'}
                            />
                            <Text style={Styles.inputViewText}>
                                {'Please Enter Maximum four decimals The minimum withdraw is 0.0085 btc'}
                            </Text>

                        </View>

                        {!this.state.isExchange && (
                            <View>
                                <Text style={{ textAlign: 'left', color: TextColor, fontSize: 18, marginLeft: '10%', marginTop: 30 }}>Paste Address ERC20:</Text>

                                <View style={Styles.InputView2}>
                                    <TextInput
                                        style={Styles.inputName2}
                                        onChangeText={text => {
                                            this.setState({ address: text });
                                        }}
                                        value={this.state.address}
                                        placeholder={'1d6683f266fs7dg8dg83d8ggg3'}
                                    />
                                </View>
                            </View>
                        )}

                        {/* <View style={Styles.CheckboxView}>
                            <View style={Styles.Checkbox}>
                                <Checkbox
                                    status={this.state.isReceiveEffectiveChecked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        this.setState({ isReceiveEffectiveChecked: !this.state.isReceiveEffectiveChecked });
                                    }}
                                    color={TextColor}
                                />

                                <View style={Styles.CheckboxInnerView}>
                                    <Text style={Styles.innerMapTextThin2}>
                                        {'Exchange With User'}
                                    </Text>
                                </View>
                            </View>
                            <View style={Styles.Checkbox}>
                                <Checkbox
                                    status={!this.state.isReceiveEffectiveChecked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        this.setState({ isReceiveEffectiveChecked: !this.state.isReceiveEffectiveChecked, });
                                    }}
                                    color={TextColor}
                                />
                                <View style={Styles.CheckboxInnerView}>
                                    <Text style={Styles.innerMapTextThin2}>
                                        {'Withdrawals.'}
                                    </Text>
                                </View>
                            </View>


                        </View> */}

                        <View style={{ marginTop: 30 }} />

                        <Toggle
                            isOn={this.state.isExchange}
                            onToggle={state => this.alertsToggleHandle(state)}
                        />

                        <View style={Styles.ButtonView}>
                            <LinearGradient
                                colors={['#ECAA0D', '#E61EB6']}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 1 }}
                                style={Styles.LinearGradientSellButton}>
                                <Button
                                    style={Styles.LinearButton}
                                    contentStyle={{ height: responsiveHeight(6) }}
                                    onPress={() => {
                                        this.check()
                                    }}
                                    labelStyle={{ color: LightBackground, fontWeight: 'bold' }}>
                                    <Text style={Styles.buttonTxt}>Continue</Text>
                                </Button>
                            </LinearGradient>
                        </View>
                    </ScrollView>
                    <ExchangeModal
                        amount={this.state.amount}
                        password={this.password}
                        passState={this.state.password}
                        receiveEffective={this.state.isReceiveEffectiveChecked}
                        stateExchangeModal={this.state.visible2}
                        closeExchangeModal={this.closeExchangeModal} />
                </View>
            );
    }
    password = (text) => {
        this.setState({ password: text });
    }
}
const Styles = StyleSheet.create({
    TopView: {
        marginTop: responsiveHeight(4),
        backgroundColor: White,
        alignSelf: 'center',
        borderRadius: 8,
        flex: 1,
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
        // marginTop: responsiveHeight(1),
        justifyContent: 'center',
        alignItems: 'center',
    },
    CenterHeadingText: {
        color: TextColor,
        fontSize: responsiveFontSize(3),
        fontWeight: '700'
    },
    CenterSubHeadingText: {
        marginTop: responsiveHeight(0.3),
        color: TextColor,
        fontSize: responsiveFontSize(2.2),
        // fontWeight: 'bold',
    },
    InputView: {
        marginTop: responsiveHeight(2),
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: responsiveHeight(5)
    },
    InputView2: {
        // marginTop: responsiveHeight(2),
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: responsiveHeight(5)
    },
    inputName: {
        marginTop: responsiveHeight(6),
        width: '80%',
        // height: responsiveHeight(4),
        // borderRadius: 8,
        borderWidth: 1,
        // backgroundColor: LightBackground,
        padding: '2%',
        borderColor: White,
        borderBottomColor: '#000',
        textAlign: 'center'
    },
    inputName2: {
        // marginTop: responsiveHeight(6),
        width: '80%',
        // height: responsiveHeight(4),
        // borderRadius: 8,
        borderWidth: 1,
        // backgroundColor: LightBackground,
        padding: '2%',
        borderColor: White,
        borderBottomColor: '#000',
        textAlign: 'center'
    },
    inputViewText: {
        marginTop: responsiveHeight(1),
        color: TextColor,
        // textAlign: 'center',
        width: '80%',
        fontSize: responsiveFontSize(1.8),
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
        height: responsiveHeight(15),
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: responsiveHeight(3),
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
        width: '55%',
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
        padding: responsiveWidth(2),
        alignSelf: 'flex-end',
    },
});
