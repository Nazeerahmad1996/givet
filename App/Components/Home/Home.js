import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    StatusBar,
} from 'react-native';
import {
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { TextColor, White, LightBackground } from '../../Globals/colors';
import { Button } from 'react-native-paper';
import Header from './Header';

import GradientModal from './ModalTypes/GradientModal';
import ConfirmGradient from './ModalTypes/ConfirmWithGradient';
import CancelleGradient from './ModalTypes/CancelWithGradient';
import NotConfirmGradient from './ModalTypes/NotConfirmWithGradient';
import ConfirmedModal from './ModalTypes/ConfimedModal';
import CancelledModal from './ModalTypes/CancelledModal';
import NotConfirmedModal from './ModalTypes/NotConfirmedModal';
import H2Modal from './ModalTypes/H2Modal';
import Buy from './Tabs/Buy';
import Sell from './Tabs/Sell';

import Estate from './Estate'
import Wallet from './Wallet'


export default class Login extends Component {
    state = {
        orders: [],
        DATA: [
            {
                id: 0,
                User: 'You',
                arrowtype: 'arrow-long-right',
                date: '18/08/2019',
                details: 'H:2:30',
                UserName: 'shaly',
                quantity: '0.3BTC',
                quantity1: '1500 GVT',
            },
            {
                id: 1,
                User: 'You',
                arrowtype: 'arrow-long-left',
                date: '18/08/2019',
                details: 'H:2:30',
                UserName: 'Sebastian',
                quantity: '0.2BTC',
                quantity1: '1000 GVT',
            },
            {
                id: 2,
                User: 'You',
                arrowtype: 'arrow-long-right',
                date: '18/08/2019',
                details: '0/3 Confirmation Blockchain',
                UserName: 'Carloa sh',
                quantity: '0.1BTC',
                quantity1: '500 GVT',
            },

            {
                id: 3,
                User: 'You',
                arrowtype: 'arrow-long-left',
                date: '18/08/2019',
                details: '0/3 Confirmation Blockchain',
                UserName: 'Sebastian',
                quantity: '0.2BTC',
                quantity1: '1000 GVT',
            },
            {
                id: 4,
                User: 'You',
                arrowtype: 'arrow-long-right',
                date: '18/08/2019',
                details: 'Successfull',
                UserName: 'shaly',
                quantity: '0.3BTC',
                quantity1: '1500 GVT',
            },
            {
                id: 5,
                User: 'You',
                arrowtype: 'arrow-long-left',
                date: '18/08/2019',
                details: 'Successfull',
                UserName: 'Sebastian',
                quantity: '0.2BTC',
                quantity1: '1000 GVT',
            },
            {
                id: 6,
                User: 'You',
                arrowtype: 'arrow-long-right',
                date: '18/08/2019',
                details: 'Cancelled',
                UserName: 'Ventami',
                quantity: '0.3BTC',
                quantity1: '1500 GVT',
            },
            {
                id: 7,
                User: 'You',
                arrowtype: 'arrow-long-left',
                date: '18/08/2019',
                details: 'Cancelled',
                UserName: 'Sebastian',
                quantity: '0.2BTC',
                quantity1: '1000 GVT',
            },
        ],

        defaultData: true,
        Sell: true,
        Buy: false,
        NotConfirmedModal: false,
        GradientModal: false,
        ConfirmedModal: false,
        CancelledModal: false,
        NotConfirmGradient: false,
        ConfirmGradient: false,
        CancelledGradient: false,
        H2Gradient: false,
        Confirm: '',
        ConfirmG: '',
        Cancel: '',
        CancelG: '',
        NotConfirm: '',
        NotConfirmG: '',
        H2: '',
        H2G: '',
        isHome: true,
        isWallet: false,
        isEstate: false
    };

    componentDidMount = async () => {

        this.props.navigation.addListener('willFocus', () => {
            this.navigation();
        });
    };
    navigation = () => {
        if (this.props.navigation.state.params === undefined) {
            this.setState({
                Confirm: '',
                ConfirmG: '',
                Cancel: '',
                CancelG: '',
                NotConfirm: '',
                NotConfirmG: '',
                H2: '',
                H2G: '',
            });
        } else {
            if (this.props.navigation.state.params.ROUTE === 'confirm') {
                this.setState({
                    Confirm: this.props.navigation.state.params.ChatProps,
                });
            } else if (this.props.navigation.state.params.ROUTE === 'confirmG') {
                this.setState({
                    ConfirmG: this.props.navigation.state.params.ChatProps,
                });
            } else if (this.props.navigation.state.params.ROUTE === 'cancel') {
                this.setState({
                    Cancel: this.props.navigation.state.params.ChatProps,
                });
            } else if (this.props.navigation.state.params.ROUTE === 'cancelG') {
                this.setState({
                    CancelG: this.props.navigation.state.params.ChatProps,
                });
            } else if (this.props.navigation.state.params.ROUTE === 'H2') {
                this.setState({
                    H2: this.props.navigation.state.params.ChatProps,
                });
            } else if (this.props.navigation.state.params.ROUTE === 'H2G') {
                this.setState({
                    H2G: this.props.navigation.state.params.ChatProps,
                });
            } else if (this.props.navigation.state.params.ROUTE === 'notConfirm') {
                this.setState({
                    NotConfirm: this.props.navigation.state.params.ChatProps,
                });
            } else if (this.props.navigation.state.params.ROUTE === 'notConfirmG') {
                this.setState({
                    NotConfirmG: this.props.navigation.state.params.ChatProps,
                });
            }
        }
    };

    RestConfirm = () => {
        this.setState({ Confirm: false });
    };
    RestConfirmG = () => {
        this.setState({ ConfirmG: false });
    };
    ResetNotConfirm = () => {
        this.setState({ NotConfirm: false });
    };
    ResetNotConfirmG = () => {
        this.setState({ NotConfirmG: false });
    };
    ResetH2 = () => {
        this.setState({ H2: false });
    };
    ResetH2G = () => {
        this.setState({ H2G: false });
    };
    ResetCancel = () => {
        this.setState({ Cancel: false });
    };
    ResetCancelG = () => {
        this.setState({ CancelG: false });
    };

    closeNotConfirmedModal = () => {
        this.setState({ NotConfirmedModal: false });
    };
    closeGradientModal = () => {
        this.setState({ GradientModal: false });
    };
    closeConfirmedModal = () => {
        this.setState({ ConfirmedModal: false });
    };
    closeCancelledModal = () => {
        this.setState({ CancelledModal: false });
    };
    closeNotConfirmGradient = () => {
        this.setState({ NotConfirmGradient: false });
    };
    closeConfirmGradient = () => {
        this.setState({ ConfirmGradient: false });
    };
    closeCancelledGradient = () => {
        this.setState({ CancelledGradient: false });
    };
    closeH2Gradient = () => {
        this.setState({ H2Gradient: false });
    };
    closeBuyModal = () => {
        this.setState({ Buy: false, defaultData: true, Sell: false });
    };
    closeSellModal = () => {
        this.setState({ Sell: false, defaultData: true, Buy: false });
    };
    PrintCards = post => {
        const item = post.item;
        const index = post.index;
        return (
            <View>
                {item.arrowtype === 'arrow-long-left' ? (
                    <TouchableOpacity
                        onPress={
                            item.details === 'Successfull'
                                ? () => {
                                    this.setState({ ConfirmGradient: 'fancy' });
                                }
                                : item.details === 'Cancelled'
                                    ? () => {
                                        this.setState({ CancelledGradient: 'fancy' });
                                    }
                                    : item.details === '0/3 Confirmation Blockchain'
                                        ? () => {
                                            this.setState({ NotConfirmGradient: 'fancy' });
                                        }
                                        : item.details === 'H:2:30'
                                            ? () => {
                                                this.setState({ H2Gradient: 'fancy' });
                                            }
                                            : null
                        }>
                        <LinearGradient
                            colors={['#ECAA0D', '#E61EB6']}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }}
                            style={Styles.SuperView}>
                            <View style={Styles.NestedView1}>
                                <Text style={Styles.UserText1}>{item.User}</Text>
                                <View style={Styles.iconView}>
                                    <Image
                                        style={Styles.rightArrow}
                                        source={require('../../Assets/Images/LeftArrow.png')}
                                    />
                                </View>

                                <Text style={Styles.UserNameTextLinear}>{item.UserName}</Text>
                            </View>
                            <View style={Styles.NestedView2}>
                                <Text style={Styles.DateText1}>{item.date}</Text>
                                <Text style={Styles.detailsTextLinear}>{item.details}</Text>
                                <View style={{ width: '30%' }}>
                                    <Text style={Styles.quantityText1}>{item.quantity}</Text>
                                    <Text style={[Styles.quantityText2, { color: White }]}>
                                        {item.quantity1}
                                    </Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                ) : (
                        <TouchableOpacity
                            onPress={
                                item.details === 'Successfull'
                                    ? () => {
                                        this.setState({ ConfirmedModal: 'fancy' }, () => {
                                            console.log('Confirm');
                                        });
                                    }
                                    : item.details === 'Cancelled'
                                        ? () => {
                                            this.setState({ CancelledModal: 'fancy' });
                                        }
                                        : item.details === '0/3 Confirmation Blockchain'
                                            ? () => {
                                                this.setState({ NotConfirmedModal: 'fancy' });
                                            }
                                            : item.details === 'H:2:30'
                                                ? () => {
                                                    this.setState({ GradientModal: 'fancy' }, () => {
                                                        console.log('pressed');
                                                    });
                                                }
                                                : null
                            }>
                            <View style={Styles.SuperView}>
                                <View style={Styles.NestedView1}>
                                    <Text style={Styles.UserText}>{item.User}</Text>
                                    <View style={Styles.iconView}>
                                        <Image
                                            style={Styles.rightArrow}
                                            source={require('../../Assets/Images/arrowright.png')}
                                        />
                                    </View>

                                    <Text style={Styles.UserNameText}>{item.UserName}</Text>
                                </View>
                                <View style={Styles.NestedView2}>
                                    <Text style={Styles.DateText}>{item.date}</Text>
                                    <Text style={Styles.detailsText}>{item.details}</Text>
                                    <View style={{ width: '30%' }}>
                                        <Text style={Styles.quantityText}>{item.quantity}</Text>
                                        <Text style={Styles.quantityText2}>{item.quantity1}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
            </View>
        );
    };

    render() {
        return (
            <SafeAreaView style={Styles.container}>
                <StatusBar translucent backgroundColor="transparent" />
                <LinearGradient
                    colors={['#ECAA0D', '#E61EB6']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={Styles.gradient}>
                    <Header {...this.props} />
                    <View style={Styles.ButtonView}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ isHome: true, isEstate: false, isWallet: false });
                            }}>
                            <Text style={[this.state.isHome? Styles.pressed : Styles.ButtonText]}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ isEstate: true, isHome: false, isWallet: false });
                            }}>
                            <Text style={[this.state.isEstate? Styles.pressed : Styles.ButtonText]}>Estate</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ isWallet: true, isHome: false, isEstate: false });
                            }}>
                            <Text style={[this.state.isWallet? Styles.pressed : Styles.ButtonText]}>Wallet</Text>
                        </TouchableOpacity>
                    </View>
                    {this.state.isHome ? (

                        <View style={Styles.MainView}>
                            <View style={Styles.ButtonView}>
                                {this.state.Buy ? (
                                    <LinearGradient
                                        colors={['#ECAA0D', '#E61EB6']}
                                        start={{ x: 0, y: 1 }}
                                        end={{ x: 1, y: 1 }}
                                        style={Styles.LinearGradientSellButton}>
                                        <Button
                                            style={Styles.LinearButton}
                                            contentStyle={{ height: responsiveHeight(6) }}
                                            labelStyle={{ color: LightBackground, fontWeight: 'bold' }}
                                            onPress={() => {
                                                // this.props.navigation.navigate('Login');
                                            }}>
                                            Buy
                                    </Button>
                                    </LinearGradient>
                                ) : (
                                        <View style={Styles.NormalButton}>
                                            <Button
                                                style={Styles.WhiteButton}
                                                contentStyle={{ height: responsiveHeight(6) }}
                                                onPress={() => {
                                                    this.setState({
                                                        Sell: false,
                                                        Buy: true,
                                                        defaultData: false,
                                                    });
                                                }}
                                                labelStyle={{ color: TextColor, fontWeight: 'bold' }}>
                                                Buy
                                    </Button>
                                        </View>
                                    )}

                                {this.state.Sell ? (
                                    <LinearGradient
                                        colors={['#ECAA0D', '#E61EB6']}
                                        start={{ x: 0, y: 1 }}
                                        end={{ x: 1, y: 1 }}
                                        style={Styles.LinearGradientSellButton}>
                                        <Button
                                            style={Styles.LinearButton}
                                            contentStyle={{ height: responsiveHeight(6) }}
                                            onPress={() => {
                                                this.setState({
                                                    Sell: true,
                                                    defaultData: false,
                                                    Buy: false,
                                                });
                                            }}
                                            labelStyle={{ color: LightBackground, fontWeight: 'bold' }}>
                                            Sell
                                    </Button>
                                    </LinearGradient>
                                ) : (
                                        <View style={Styles.NormalButton}>
                                            <Button
                                                style={Styles.WhiteButton}
                                                onPress={() => {
                                                    this.setState({
                                                        Sell: true,
                                                        Buy: false,
                                                        defaultData: false,
                                                    });
                                                }}
                                                contentStyle={{ height: responsiveHeight(6) }}
                                                labelStyle={{ color: TextColor, fontWeight: 'bold' }}>
                                                Sell
                                    </Button>
                                        </View>
                                    )}
                            </View>

                            {this.state.defaultData ? (
                                <View style={Styles.container}>
                                    <FlatList
                                        data={this.state.DATA}
                                        keyExtractor={item => item.id}
                                        renderItem={item => this.PrintCards(item)}
                                        contentContainerStyle={Styles.ContainerStyle}
                                        ItemSeparatorComponent={() => (
                                            <View style={Styles.Seprator} />
                                        )}
                                    />
                                    <NotConfirmedModal
                                        closeNotConfirmedModal={this.closeNotConfirmedModal}
                                        NotConfirmedModalState={this.state.NotConfirmedModal}
                                        ResetNotConfirm={this.ResetNotConfirm}
                                        NotConfirm={this.state.NotConfirm}
                                        {...this.props}
                                    />
                                    <GradientModal
                                        closeGradientModal={this.closeGradientModal}
                                        GradientModalState={this.state.GradientModal}
                                        ResetH2={this.ResetH2}
                                        H2={this.state.H2}

                                        {...this.props}
                                    />
                                    <ConfirmedModal
                                        closeConfirmedModal={this.closeConfirmedModal}
                                        ConfirmedModalState={this.state.ConfirmedModal}
                                        RestConfirm={this.RestConfirm}
                                        Confirm={this.state.Confirm}
                                        {...this.props}
                                    />
                                    <CancelledModal
                                        closeCancelledModal={this.closeCancelledModal}
                                        CancelledModalState={this.state.CancelledModal}
                                        ResetCancel={this.ResetCancel}
                                        Cancel={this.state.Cancel}
                                        {...this.props}
                                    />
                                    <CancelleGradient
                                        closeCancelledGradient={this.closeCancelledGradient}
                                        CancelledGradient={this.state.CancelledGradient}
                                        ResetCancelG={this.ResetCancelG}
                                        CancelG={this.state.CancelG}
                                    />
                                    <ConfirmGradient
                                        closeConfirmGradient={this.closeConfirmGradient}
                                        ConfirmGradient={this.state.ConfirmGradient}
                                        RestConfirmG={this.RestConfirmG}
                                        ConfirmG={this.state.ConfirmG}
                                    />
                                    <H2Modal
                                        closeH2Gradient={this.closeH2Gradient}
                                        H2Gradient={this.state.H2Gradient}
                                        ResetH2G={this.ResetH2G}
                                        H2G={this.state.H2G}
                                    />
                                    <NotConfirmGradient
                                        closeNotConfirmGradient={this.closeNotConfirmGradient}
                                        NotConfirmGradient={this.state.NotConfirmGradient}
                                        ResetNotConfirmG={this.ResetNotConfirmG}
                                        NotConfirmG={this.state.NotConfirmG}
                                    />
                                </View>
                            ) : this.state.Buy ? (
                                <Buy {...this.props} closeBuyModal={this.closeBuyModal} />
                            ) : this.state.Sell ? (
                                <Sell {...this.props} closeSellModal={this.closeSellModal} />
                            ) : null}
                        </View>

                    ) : this.state.isEstate ?
                            (
                                <Estate navigation={this.props.navigation} />
                            ) : this.state.isWallet ? (
                                <Wallet navigation={this.props.navigation} />
                            ) : null}
                </LinearGradient>
            </SafeAreaView>
        );
    }
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
    },

    MainView: {
        flex: 1,
        backgroundColor: LightBackground,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        elevation: 5,
    },
    ButtonView: {
        width: '80%',
        height: responsiveHeight(10),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    LinearButton: {
        width: '100%',
        borderRadius: 8,
    },
    WhiteButton: {
        width: '100%',
        borderRadius: 8,
        backgroundColor: 'white',
    },
    LinearGradientSellButton: {
        width: '40%',
        borderRadius: 8,
    },
    NormalButton: {
        width: '40%',
        borderRadius: 8,
    },
    ContainerStyle: {
        width: '95%',
        alignSelf: 'center',
        paddingVertical: responsiveHeight(2),
    },
    Seprator: {
        marginTop: responsiveHeight(2),
    },
    pressed: {
        color: White,
        fontSize: responsiveFontSize(2.5),
        // fontWeight: 'bold',
        borderBottomColor:'#fff',
        borderBottomWidth:3
      },
    SuperView: {
        width: '95%',
        height: responsiveHeight(18),
        borderRadius: 15,
        elevation: 5,
        alignSelf: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    NestedView1: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
    },
    rightArrow: {
        alignSelf: 'center',
    },
    NestedView2: {
        marginTop: responsiveHeight(2),
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
    },
    ButtonText: {
        color: White,
        fontSize: responsiveFontSize(2.4),
        // fontWeight: 'bold',
    },
    UserText: {
        color: TextColor,
        fontSize: responsiveFontSize(2.4),
        fontWeight: 'bold',
        width: '30%',
        textAlign: 'center',
    },
    UserText1: {
        color: White,
        fontSize: responsiveFontSize(2.4),
        fontWeight: 'bold',
        width: '30%',
        textAlign: 'center',
    },
    DateText: {
        color: TextColor,
        fontSize: responsiveFontSize(1.8),
        fontWeight: 'bold',
        width: '30%',
        textAlign: 'center',
    },
    DateText1: {
        color: White,
        fontSize: responsiveFontSize(1.8),
        fontWeight: 'bold',
        width: '30%',
        textAlign: 'center',
    },
    detailsText: {
        color: TextColor,
        fontSize: responsiveFontSize(1.8),
        fontWeight: 'bold',
        width: '30%',
        textAlign: 'center',
    },
    detailsTextLinear: {
        color: White,
        fontSize: responsiveFontSize(1.8),
        fontWeight: 'bold',
        width: '30%',
        textAlign: 'center',
    },
    iconView: {
        width: '30%',
        bottom: responsiveHeight(0.5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    UserNameText: {
        width: '30%',
        color: TextColor,
        fontSize: responsiveFontSize(2.4),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    UserNameTextLinear: {
        width: '30%',
        color: White,
        fontSize: responsiveFontSize(2.4),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    quantityText: {
        color: TextColor,
        fontSize: responsiveFontSize(1.8),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    quantityText1: {
        color: White,
        fontSize: responsiveFontSize(1.8),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    quantityText2: {
        marginTop: responsiveHeight(0.5),
        color: TextColor,
        fontSize: responsiveFontSize(1.3),
        textAlign: 'center',
    },
});
