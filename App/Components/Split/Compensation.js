import React, { Component } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

import {
    Text,
    View,
    ScrollView,
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
import { TextColor, White, LightBackground } from '../../Globals/colors';


export default class Compensation extends Component {
    state = {
        Terms: true,
        Rules: false,
        visible: true
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" barStyle='dark-content' />
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}
                    style={styles.closeView}>
                    <Entypo name={'circle-with-cross'} color={TextColor} size={25} />
                </TouchableOpacity>
                <ScrollView style={styles.InnerView}>
                    <ScrollView style={styles.TermsView}>
                        <Text style={styles.welcome}>WHAT IS GIVET ?</Text>
                        <Text>We are a cashback network also known as bonus points, but based on blockchain technology. Before you accumulate points for your purchases now you will accumulate Cryptomoneda for your purchases in the businesses affiliated with the system.</Text>
                        <View style={{ marginTop: responsiveHeight(1) }}>
                            <Text>Business: They buy GVT token from
                            users that are selling within the givet network
                            (Givet will not sell directly to any business or customer).
                            </Text>
                            <Text>Customers: They buy products and services from
                            Businesses in exchange for getting GVT for them and for their
                            Ascending line.
          </Text>
                            <Text>Users: Buy and sell GVT to customers and businesses</Text>
                        </View>
                        <View style={{ marginTop: responsiveHeight(1) }}>
                            <Text style={styles.welcome}>GIVET STAGES ?</Text>
                            <Text style={styles.title}>1. Estages: </Text>
                            <Text>In this stage all the GVT will be distributed
                            Among all participants (businesses, users and customers).
                            The total available is 21,000,000,000 GVT, each token has an initial value of $ 1 until the second stage.
          </Text>
                            <Text style={styles.title1}>2. Estages: </Text>
                            <Text>It's the stage, where all the tokens are Distributed among all. It is there that we create the true shortages, because businesses will seek to buy tokens to give away to their customers, and since there are no more tokens, users will sell a price that they want $ 1, $ 2, etc.</Text>
                            <Text>NOTE: we share by delivery the gifts that are received in token weekly, for a purchase of a fourth amount of GVT.
          </Text>
                        </View>
                        <View>
                            <Text style={styles.welcome}>HOW TO WIN WITH GIVET ?</Text>
                            <Text style={styles.title}>1. Weekly earnings per cast C +%.</Text>
                            <Text>The first 4 weeks you will earn 25% as a gift on your purchase, for example you buy 1000usd in GVT weekly you will receive 250GVT gift up to 4 times. Then you will only receive 6%. What does it mean that only 60GVT will receive weekly.
                            Obviously to earn these amounts as a gift you have to comply with six rules.
            </Text>
                            <Text style={styles.title1}>2. Earnings per referral system.</Text>
                            <Text>You will earn a certain amount of token as a gift for
                            The purchase of your direct and indirect referrals to a tenth level
            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',marginTop:responsiveHeight(1) }}>
          <Text style={styles.boldtxt}>1N</Text>
          <Text style={styles.boldtxt}>2N</Text>
          <Text style={styles.boldtxt}>3N</Text>
          <Text style={styles.boldtxt}>4N</Text>
          <Text style={styles.boldtxt}>5N</Text>
          <Text style={styles.boldtxt}>6N</Text>
          <Text style={styles.boldtxt}>7N</Text>
          <Text style={styles.boldtxt}>8N</Text>
          <Text style={styles.boldtxt}>9N</Text>
          <Text style={styles.boldtxt}>10N</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Text style={styles.boldtxt}>10%</Text>
          <Text style={styles.boldtxt}>4%</Text>
          <Text style={styles.boldtxt}>2%</Text>
          <Text style={styles.boldtxt}>2%</Text>
          <Text style={styles.boldtxt}>2%</Text>
          <Text style={styles.boldtxt}>2%</Text>
          <Text style={styles.boldtxt}>2%</Text>
          <Text style={styles.boldtxt}>2%</Text>
          <Text style={styles.boldtxt}>2%</Text>
          <Text style={styles.boldtxt}>2%</Text>
        </View>
                        <View>
                            <Text style={styles.welcome}>HOW TO BE PART OF GIVET?</Text>
                            <Text>1. Download application and register.</Text>
                            <Text>2. Buy a package.</Text>
                            <Text>3. Enjoy the profits.</Text>
                        </View>
                    </ScrollView>


                </ScrollView>

            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
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
    Header: {
        width: '100%',
        height: responsiveHeight(13),
        justifyContent: 'center',
        alignItems: 'center',
    },
    HeaderText: {
        color: White,
        fontSize: responsiveFontSize(2.8),
        fontWeight: 'bold',
    },
    boldtxt:{
        fontWeight:'bold'
    },
    menu: {
        marginLeft: '4%',
        position: 'absolute',
        top: responsiveHeight(4.75),
    },
    InnerView: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: White,
        borderRadius: 25,
        marginTop: responsiveHeight(2),
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: responsiveHeight(5),
    },
    ButtonView: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    SellButton: {
        width: '100%',
        borderRadius: 50,
    },
    LinearGradientSellButton: {
        marginTop: responsiveHeight(2),
        width: '30%',
        height: responsiveHeight(6),
        borderRadius: 50,
        marginBottom: responsiveHeight(2),
    },
    SimpleButton: {
        marginTop: responsiveHeight(2),
        width: '30%',
        height: responsiveHeight(6),

        borderRadius: 50,

        marginBottom: responsiveHeight(2),
    },
    GradienttextStyles: {
        color: 'white',
        fontSize: responsiveFontSize(1.8),
    },
    SimpleTextStyles: {
        color: 'rgba(0,0,0,0.5)',
        fontSize: responsiveFontSize(1.8),
    },
    TermsTitle: {
        color: TextColor,
        fontSize: responsiveFontSize(3.2),
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    TermsTitle2: {
        color: TextColor,
        fontSize: responsiveFontSize(1.75),
        textAlign: 'center',
        marginBottom: responsiveHeight(2),
        marginHorizontal: responsiveWidth(0.8)
    },
    Terms: {
        color: TextColor,
        fontSize: responsiveFontSize(1.75),
        marginHorizontal: responsiveWidth(1.5),
        marginBottom: responsiveHeight(1),
        textAlign: 'justify'
    },
    boldNo: {
        fontWeight: 'bold'
    },
    TermsView: {
        padding: responsiveHeight(3)
    },
    AfterTerms: {
        marginTop: responsiveHeight(1),
        color: TextColor,
        fontSize: responsiveFontSize(1.75),
        marginHorizontal: responsiveWidth(1.5),
        marginBottom: responsiveHeight(0.5),
        textAlign: 'justify'
    },
    AfterTerms2: {
        marginTop: responsiveHeight(1),
        color: TextColor,
        fontSize: responsiveFontSize(1.75),
        marginHorizontal: responsiveWidth(1.5),
        marginBottom: responsiveHeight(0.5),
        textAlign: 'justify',
        fontWeight: 'bold'
    },
    closeView: {
        paddingBottom: responsiveHeight(1.7),
        paddingHorizontal: responsiveWidth(2),
        alignSelf: 'flex-end',
        top: responsiveHeight(2.5)

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        //margin: 10,
        fontWeight: 'bold',
        marginTop: responsiveHeight(2),
        marginBottom: responsiveHeight(2)
    },
    instructions: {
        //textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    title: {
        fontSize: responsiveFontSize(2.2),
        fontWeight: 'bold',
        marginBottom: responsiveHeight(0.5)
    },
    title1: {
        fontSize: responsiveFontSize(2.2),
        fontWeight: 'bold',
        marginBottom: responsiveHeight(0.5),
        marginTop: responsiveHeight(0.5)
    }
});
