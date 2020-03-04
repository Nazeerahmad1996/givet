import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Alert
} from 'react-native';
import {
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { TextColor, White, LightBackground } from '../../Globals/colors';
import { Button } from 'react-native-paper';
// import SelModal from './SellModal';
import isEmpty from 'validator/lib/isEmpty';
import Messages from '../AlertMessages'


import Header from './WalletHeader';
export default class WalletHistory extends Component {


    state = {
        username: '',
        amount: 0,
        user: [
            { id: 0.1, user: 'Mike', balance: 10 },
        ],
        ModalState: false,
        des: '',
        Mtype: false,
        Msgtitle: '',

    };

    closeModal = () => {
        this.setState({ ModalState: false, des: '', Mtype: false, Msgtitle: '' });
    };



    render() {
        return (
            <View>
                <Messages
                    ModalState={this.state.ModalState}
                    remove={this.remove}
                    closeModal={this.closeModal}
                    des={this.state.des}
                    Mtype={this.state.Mtype}
                    title={this.state.Msgtitle}
                />
                <Header navigation={this.props.navigation} HeaderName={'Transfer'} {...this.props} />
                <View style={{ backgroundColor: '#fff', borderTopRightRadius: 25, borderTopLeftRadius: 25, marginTop: -20, paddingHorizontal: 30 }}>
                    <Text style={{ fontSize: 21, marginTop: 20 }}>When any user sending any amount to your balance will be debited</Text>


                    <View style={Styles.InputView1}>
                        <TextInput
                            style={Styles.inputName}
                            onChangeText={text => {
                                this.setState({ username: text });
                            }}
                            value={this.state.username}
                            placeholder={'Username'}
                        />


                    </View>



                    <View style={Styles.InputView}>
                        <TextInput
                            style={Styles.inputName}
                            onChangeText={text => {
                                this.setState({ amount: text });
                            }}
                            value={this.state.amount}
                            placeholder={'Amount'}
                            keyboardType={'numeric'}
                        />


                    </View>

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
                                    // this.check()
                                    if (!isEmpty(this.state.username) && this.state.amount !== 0) {
                                        if (this.state.user[0].balance >= this.state.amount) {
                                            // Alert.alert(
                                            //     'TRANSFER',
                                            //     'His transfer was successful',
                                            //     [
                                            //         {
                                            //             text: 'Ok',
                                            //             onPress: () => console.log('Cancel Pressed'),
                                            //             style: 'cancel',
                                            //         },
                                            //     ]
                                            // );
                                            this.setState({ ModalState: 'fancy', Mtype: true, des: 'His transfer was successful', Msgtitle: 'TRANSFER' });

                                        } else {
                                            // Alert.alert(
                                            //     'TRANSFER',
                                            //     'insufficient balance try again later',
                                            //     [
                                            //         {
                                            //             text: 'Ok',
                                            //             onPress: () => console.log('Cancel Pressed'),
                                            //             style: 'cancel',
                                            //         },
                                            //     ]
                                            // );
                                            this.setState({ ModalState: 'fancy', Mtype: false, des: 'insufficient balance try again later', Msgtitle: 'TRANSFER' });
                                        }
                                    }
                                    else {
                                        // Alert.alert(
                                        //     'TRANSFER',
                                        //     'Please fill form properly',
                                        //     [
                                        //         {
                                        //             text: 'Ok',
                                        //             onPress: () => console.log('Cancel Pressed'),
                                        //             style: 'cancel',
                                        //         },
                                        //     ]
                                        // );
                                        this.setState({ ModalState: 'fancy', Mtype: false, des: 'Please fill form properly', Msgtitle: 'TRANSFER' });
                                    }

                                }}
                                labelStyle={{ color: LightBackground, fontWeight: 'bold' }}>
                                <Text style={Styles.buttonTxt}>Transfer</Text>
                            </Button>
                        </LinearGradient>
                    </View>
                </View>
            </View>
        );
    }
}
const Styles = StyleSheet.create({

    ButtonView: {
        width: '100%',
        // height: responsiveHeight(15),
        marginTop: 15,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: responsiveHeight(3),
        // flexDirection:'row'
    },
    LinearGradientSellButton: {
        width: '60%',
        borderRadius: 50,
        marginLeft: 15
    },

    LinearButton: {
        width: '100%',
        borderRadius: 50,
    },

    InputView: {
        marginTop: responsiveHeight(2),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: responsiveHeight(8)
    },
    inputName: {
        marginTop: responsiveHeight(6),
        width: '100%',
        height: responsiveHeight(5),
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

});
