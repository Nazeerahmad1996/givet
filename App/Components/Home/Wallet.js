import React, { Component } from 'react';
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
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { TextColor, LightBackground } from '../../Globals/colors';

export default class Login extends Component {
    state = {
        data1: [
            { id: 0.1, Heading: 'Current Pack', subHeading: '0.04BTC' },
            { id: 0.2, Heading: 'Current Percentage', subHeading: '25%' },
            { id: 0.3, Heading: 'Balance No Freed', subHeading: '0.04BTC' },
            { id: 0.4, Heading: 'Balance Freed', subHeading: '0.1BTC' },
            { id: 0.5, Heading: 'Connection No Available', subHeading: '0.3BTC' },
        ],
        isHome: true,
        isWallet: false,
        isEstate: false
    };

    componentDidMount = async () => {


    };



    render() {
        return (
            <SafeAreaView style={Styles.container}>
                <StatusBar translucent backgroundColor="transparent" />

                <View style={Styles.MainView}>

                    <View style={Styles.CenterView}>
                        <Text style={Styles.CenterHeadingText}>{'AVAILABLE BALANCE'}</Text>
                        <Text style={Styles.CenterSubHeadingText}>
                            {'0.54344 BTC  -  GVT 450  -  4000 USD'}
                        </Text>
                    </View>

                    <View style={Styles.MapView}>
                        {this.state.data1.map((item, index) => (
                            <View style={Styles.innerMapView}>
                                <Text style={Styles.innerMapTextBold}>{item.Heading}</Text>
                                <Text style={Styles.innerMapTextThin}>{item.subHeading}</Text>
                            </View>
                        ))}
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('WalletHistory');
                            }}
                            style={Styles.List}>

                            <Text style={Styles.ListText}>History</Text>
                            <Entypo name={'chevron-right'} color={'#bcbcbc'} size={30} />

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Penality');
                            }}
                            style={Styles.List}>

                            <Text style={Styles.ListText}>Penality</Text>
                            <Entypo name={'chevron-right'} color={'#bcbcbc'} size={30} />

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Transfer');
                            }}
                            style={Styles.List}>

                            <Text style={Styles.ListText}>Transfer</Text>
                            <Entypo name={'chevron-right'} color={'#bcbcbc'} size={30} />

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('PayBusiness');
                            }}
                            style={Styles.List}>

                            <Text style={Styles.ListText}>Pay business</Text>
                            <Entypo name={'chevron-right'} color={'#bcbcbc'} size={30} />

                        </TouchableOpacity>
                    </View>


                </View>
            </SafeAreaView>
        );
    }
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    List: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderBottomColor: '#bcbcbc',
        borderBottomWidth: 0.5
    },

    ListText: {
        fontSize: 18,
        flex: 1
    },


    MainView: {
        flex: 1,
        backgroundColor: LightBackground,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        elevation: 5,
    },
    MapView: {
        width: '90%',
        alignSelf: 'center',
        marginTop: responsiveHeight(4),
        flexDirection: 'row',
        justifyContent: 'center'
    },
    innerMapView: {
        flex: 1,
        // height: responsiveHeight(6),
        justifyContent: 'space-evenly',
        marginHorizontal: 5
    },
    innerMapView2: {
        flex: 1,
        marginTop: '2%',
        // marginLeft: '1%',
    },
    innerMapTextBold: {
        fontSize: responsiveFontSize(1.3),
        fontWeight: 'bold',
        color: TextColor,
    },
    innerMapTextThin: {
        marginTop: 10,
        fontSize: responsiveFontSize(1.8),
        color: TextColor,
        fontWeight: 'bold',
    },
    innerMapTextThin2: {
        fontSize: responsiveFontSize(1.6),
        color: TextColor,
    },
    CenterView: {
        marginTop: responsiveHeight(3),
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
        fontWeight: '200',
    },

});
