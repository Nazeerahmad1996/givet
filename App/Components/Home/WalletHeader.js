import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { NavigationActions } from 'react-navigation';

import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
} from 'react-native';
import {
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { White, LightBackground } from '../../Globals/colors';
export default class Header extends Component {
    state = {
        PayModal: false,
        WalletModal: false,
        EstateModal: false,
    };
    closePayModal = () => {
        this.setState({ PayModal: false });
    };
    closeWalletModal = () => {
        this.setState({ WalletModal: false });
    };
    closeEstateModal = () => {
        this.setState({ EstateModal: false });
    };
    render() {
        // console.log(this.props.navigation.goBack())
        const backAction = NavigationActions.back({
            key: null
        })
        return (
            <SafeAreaView>
                <StatusBar translucent backgroundColor="transparent" />
                <LinearGradient
                    colors={['#ECAA0D', '#E61EB6']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}>
                    <View style={Styles.HeaderView}>
                        <View>
                            <TouchableOpacity

                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Ionicons name={'md-arrow-back'} color={'white'} size={25} />
                            </TouchableOpacity>
                            {/* <TouchableOpacity
                style={{marginTop: responsiveHeight(1)}}
                onPress={() => this.props.navigation.navigate('AppAdmin')}>
                <Entypo name={'chevron-thin-left'} color={'white'} size={25} />
              </TouchableOpacity> */}
                        </View>

                        <View>
                            <Text style={Styles.headerText1}>{this.props.HeaderName}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Notification');
                            }}>
                            <Fontisto name={'bell'} color={'white'} size={25} />
                        </TouchableOpacity>
                    </View>


                </LinearGradient>
            </SafeAreaView>
        );
    }
}
const Styles = StyleSheet.create({
    HeaderView: {
        width: '90%',
        height: responsiveHeight(17),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText1: {
        color: White,
        fontSize: responsiveFontSize(2.4),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerText2: {
        marginTop: responsiveHeight(1),
        color: LightBackground,
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
    },
    ButtonView: {
        width: '80%',
        height: responsiveHeight(8),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ButtonText: {
        color: White,
        fontSize: responsiveFontSize(2.2),
        fontWeight: 'bold',
    },
});
