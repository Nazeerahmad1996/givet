import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';

import {
    Clipboard,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native';
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { TextColor, White, LightBackground } from '../../Globals/colors';
import { Button } from 'react-native-paper';
// import SelModal from './SellModal';
import Toast from 'react-native-simple-toast';


import Header from './WalletHeader';
export default class WalletHistory extends Component {


    state = {
        username: '',
        hash: '',
        client: '',
        Amount: '',
        Client: true,
        Business: false,

    };



    render() {
        return (
            <View style={{flex:1}}>
                <LinearGradient
                    colors={['#ECAA0D', '#E61EB6']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}>
                    <Header tabActive={this.TabsToggle} navigation={this.props.navigation} HeaderName={'Pay business'} {...this.props} />



                    <View style={Styles.Header2}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ Client: true, Business: false });
                            }}>
                            <Text
                                style={[this.state.Client ? Styles.pressed : Styles.HeaderText]}>
                                Client
              </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ Client: false, Business: true });
                            }}>
                            <Text
                                style={[
                                    this.state.Business ? Styles.pressed : Styles.HeaderText,
                                ]}>
                                Business
              </Text>
                        </TouchableOpacity>
                    </View>



                    {this.state.Client ? (
                        <ScrollView style={{ backgroundColor: '#fff', borderTopRightRadius: 25, borderTopLeftRadius: 25, paddingHorizontal: 30,height:responsiveHeight(80),marginBottom:40 }}>

                            {/* <ScrollView> */}

                                <Text style={{ fontSize: 21, marginTop: 20 }}>When any user sending any amount to your balance will be debited</Text>
                                <View style={Styles.InputView1}>
                                    <TextInput
                                        style={Styles.inputName}
                                        onChangeText={text => {
                                            this.setState({ username: text });
                                        }}
                                        value={this.state.username}
                                        placeholder={'search owner user'}
                                    />


                                </View>

                                <View style={Styles.Section2View}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={Styles.BoldText}>Ower User: </Text>
                                        <Text style={[Styles.ThinText, { fontSize: 17 }]}>Patoloco</Text>
                                    </View>
                                </View>


                                <View style={Styles.flexView}>
                                    <View>
                                        <Text style={Styles.BoldText}>Comision:</Text>
                                        <Text style={Styles.ThinText}>Comision: client . 1GVT,  sponsor. 5GVT</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => {
                                        Clipboard.setString('Comision: client . 1GVT,  sponsor. 5GVT')
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

                                <View style={Styles.flexView}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={Styles.BoldText}>Address BTC :</Text>
                                        <Text style={Styles.ThinText}>vt6s6s6s1xrw63j4tsf64dd64d66o</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => {
                                        Clipboard.setString('vt6s6s6s1xrw63j4tsf64dd64d66o')
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

                                <View style={{ marginTop: 20 }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Amount: </Text>
                                    <TextInput
                                        style={Styles.BorderTextbox}
                                        onChangeText={text => {
                                            this.setState({ Amount: text });
                                        }}
                                        value={this.state.Amount}
                                    />

                                </View>


                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Paste hash</Text>
                                    <TextInput
                                        style={Styles.BorderTextbox}
                                        onChangeText={text => {
                                            this.setState({ hash: text });
                                        }}
                                        value={this.state.hash}
                                    />

                                </View>

                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Paste client user</Text>
                                    <TextInput
                                        style={Styles.BorderTextbox}
                                        onChangeText={text => {
                                            this.setState({ client: text });
                                        }}
                                        value={this.state.client}
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
                                            }}
                                            labelStyle={{ color: LightBackground, fontWeight: 'bold' }}>
                                            <Text style={Styles.buttonTxt}>Pay</Text>
                                        </Button>
                                    </LinearGradient>
                                </View>
                            {/* </ScrollView> */}
                        </ScrollView>
                    ) : (
                            <View style={{ backgroundColor: '#fff', borderTopRightRadius: 25, borderTopLeftRadius: 25, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 21, marginTop: 20, paddingHorizontal: 10 }}>Please make sure that you have received the payment before making the approval</Text>


                                <View style={{ borderWidth: 0.6, borderColor: 'grey', borderRadius: 10, paddingLeft: 20, paddingVertical: 5, marginTop: responsiveHeight(4) }}>
                                    <TouchableOpacity onPress={() => {
                                        // this.Remove(index)
                                    }} style={Styles.IconView}>
                                        <Entypo name={'circle-with-cross'} color={TextColor} size={25} />
                                    </TouchableOpacity>
                                    <View style={[Styles.Section2View, { marginTop: -20 }]}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={Styles.BoldText}>Use client: </Text>
                                            <Text style={[Styles.ThinText, { fontSize: 17 }]}>gatofeo</Text>
                                        </View>
                                    </View>


                                    <View style={Styles.flexView}>
                                        <View>
                                            <Text style={Styles.BoldText}>Hash:</Text>
                                            <Text style={[Styles.ThinText, { color: '#0000EE' }]}>1d737d73dgg3dgg37gd3g7dg</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={Styles.BoldText}>Amount: </Text>
                                        <Text style={[Styles.ThinText, { fontSize: 17 }]}>0.0002 BTC</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={Styles.BoldText}>Date: </Text>
                                        <Text style={[Styles.ThinText, { fontSize: 17 }]}>20/03/20 </Text>
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
                                                }}
                                                labelStyle={{ color: LightBackground, fontWeight: 'bold' }}>
                                                <Text style={Styles.buttonTxt}>approve payment</Text>
                                            </Button>
                                        </LinearGradient>
                                    </View>
                                </View>
                            </View>
                        )}


                </LinearGradient>
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
    IconView: {
        height: responsiveHeight(4),
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginHorizontal: responsiveWidth(2),
    },
    LinearGradientSellButton: {
        width: '60%',
        borderRadius: 50,
        marginLeft: 15
    },
    BoldText: {
        fontSize: responsiveFontSize(2.4),
        fontWeight: 'bold',
        color: TextColor,
    },

    Section2View: {
        marginTop: responsiveHeight(4),
    },

    LinearButton: {
        width: '100%',
        borderRadius: 50,
    },

    BorderTextbox: {
        marginTop: responsiveHeight(1),
        width: '100%',
        borderWidth: 1,
        color: '#bcbcbc',
        padding: '2%',
        borderColor: 'grey',
        borderRadius: 8
    },

    InputView: {
        marginTop: responsiveHeight(2),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: responsiveHeight(8)
    },
    ThinText: {
        fontSize: responsiveFontSize(2.1),
        color: TextColor,
    },
    flexView: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputName: {
        marginTop: responsiveHeight(2),
        width: '100%',
        height: responsiveHeight(5),
        // borderRadius: 8,
        borderWidth: 1,
        color: '#bcbcbc',
        // backgroundColor: LightBackground,
        padding: '2%',
        fontSize: 18,
        borderColor: White,
        borderBottomColor: '#000',
        // textAlign: 'center'
    },
    inputViewText: {
        marginTop: responsiveHeight(1),
        color: TextColor,
        // textAlign: 'center',
        width: '80%',
        fontSize: responsiveFontSize(1.8),
    },
    Header2: {
        marginTop: -10,
        width: '100%',
        height: responsiveHeight(3),
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: responsiveWidth(4),
        alignItems: 'flex-end',
        marginBottom: responsiveHeight(2),
    },
    pressed: {
        color: White,
        fontSize: responsiveFontSize(2.5),
        // fontWeight: 'bold',
        borderBottomColor: '#fff',
        borderBottomWidth: 3
    },
    HeaderText: {
        color: White,
        fontSize: responsiveFontSize(2.5),
        // fontWeight: 'bold',
    },

});
