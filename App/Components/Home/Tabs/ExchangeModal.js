import React, { Component } from 'react';
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
    Alert
} from 'react-native';
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { TextColor, White, LightBackground } from '../../../Globals/colors';
import { Button } from 'react-native-paper';
import Modal from 'react-native-modal';
import ResendModal from './ResendModal';
import psm from "../../../Globals/PersistentStorageManager";
import { sellTicket } from "../../../Services/services";
import isEmpty from 'validator/lib/isEmpty';
import Messages from '../../AlertMessages'

export default class Pay extends Component {
    state = {
        password: '',
        resendModal: false,
        ModalState: false,
        des: '',
        Mtype: false,
        Msgtitle: '',
    };

    closeModal = () => {
        this.setState({ ModalState: false, des: '', Mtype: false, Msgtitle: '' });
    };
    closeResendModal = () => {
        this.setState({ resendModal: false })
    }
    renderModalContent = () => (
        <View style={Styles.modalView}>
            <TouchableOpacity
                onPress={() => {
                    this.props.closeExchangeModal();
                }}
                style={Styles.closeView}>
                <Entypo name={'circle-with-cross'} color={TextColor} size={25} />
            </TouchableOpacity>
            <View style={Styles.InnerContentView}>

                <Text style={Styles.HeadingText}>
                    Enter secondary password to ask for help.
        </Text>
                <View style={Styles.inputView}>
                    <Text style={Styles.inputText}>Password Security.</Text>
                    <TextInput
                        style={Styles.inputName}
                        onChangeText={text => {
                            this.props.password(text)
                            // this.setState({ this.props.password: text });
                        }}
                        value={this.props.password}
                        placeholder={'****'}
                        secureTextEntry={true}
                    />
                </View>

                {/* <Text style={Styles.rememberPassText}>Remember password 2</Text> */}
                <TouchableOpacity
                    onPress={() => {
                        this.setState({ resendModal: 'fancy' });
                    }}>
                    <Text style={Styles.rememberPassText}>Remember password 2</Text>
                </TouchableOpacity>

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
                                const { passState } = this.props;
                                if (!isEmpty(this.props.passState)) {
                                    // Alert.alert(
                                    //     'SELL',
                                    //     'Your sale entered the queue successfully',
                                    //     [
                                    //         {
                                    //             text: 'Ok',
                                    //             onPress: () => console.log('Cancel Pressed'),
                                    //             style: 'cancel',
                                    //         },
                                    //     ]
                                    // );
                                    this.setState({ ModalState: 'fancy', Mtype: true, des: 'Your sale entered the queue successfully', Msgtitle: 'SELL' });

                                    const { amount, receiveEffective } = this.props;
                                    let user = psm.getUser();
                                    let accessToken = psm.getAccessToken();
                                    let response = sellTicket(user.id, amount, receiveEffective, !receiveEffective, passState, accessToken);
                                    this.props.closeExchangeModal();
                                } else {
                                    this.props.closeExchangeModal();
                                    // Alert.alert(
                                    //     'PASSWORD 2',
                                    //     'something went wrong, try again',
                                    //     [
                                    //         {
                                    //             text: 'Ok',
                                    //             onPress: () => console.log('Cancel Pressed'),
                                    //             style: 'cancel',
                                    //         },
                                    //     ]
                                    // );
                                    this.setState({ ModalState: 'fancy', Mtype: false, des: 'something went wrong, try again', Msgtitle: 'PASSWORD 2' });

                                }

                            }}
                            labelStyle={{ color: LightBackground, fontWeight: 'bold' }}>
                            <Text style={Styles.buttonTxt}>Sell</Text>
                        </Button>
                    </LinearGradient>
                </View>
            </View>
            <ResendModal
                closeResendModal={this.closeResendModal}
                resendModalState={this.state.resendModal}
            />
        </View>
    );

    render() {
        return (
            <SafeAreaView>
                <Messages
                    ModalState={this.state.ModalState}
                    remove={this.remove}
                    closeModal={this.closeModal}
                    des={this.state.des}
                    Mtype={this.state.Mtype}
                    title={this.state.Msgtitle}
                />
                <StatusBar translucent backgroundColor="transparent" />
                <Modal
                    isVisible={this.props.stateExchangeModal === 'fancy'}
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
    InnerContentView: {
        width: '70%',
        alignSelf: 'center',
    },
    HeadingText: {
        marginTop: responsiveHeight(4),
        fontSize: responsiveFontSize(2.5),
        color: TextColor,
    },
    inputText: {
        marginTop: responsiveHeight(2),
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.2),
        color: TextColor,
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
    rememberPassText: {
        marginTop: responsiveHeight(4),
        fontSize: responsiveFontSize(1.8),
        color: TextColor,
    },
    ButtonView: {
        width: '80%',
        height: responsiveHeight(10),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
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
        width: '80%',
        height: responsiveHeight(6),
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
        paddingVertical: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(2),
        alignSelf: 'flex-end',
    },
});
