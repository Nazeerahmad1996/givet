import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';

import {
    Dimensions,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Alert,
} from 'react-native';
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
const { width } = Dimensions.get('window');
import { TextColor, White, LightBackground } from '../../../Globals/colors';
import { Button, Checkbox } from 'react-native-paper';
import psm from '../../../Globals/PersistentStorageManager';
import { buyTicket, getAllPacks } from "../../../Services/services";
import Messages from '../../AlertMessages'


export default class Login extends Component {
    state = {
        packs: [
            {
                id: 1,
                price: '0.0048',
                flag: false
            },
            { id: 2, price: '0.0096', flag: false },
            { id: 3, price: '0.02', flag: false },
            { id: 4, price: '0.03', flag: false },
            { id: 5, price: '0.04', flag: false },
            { id: 6, price: '0.05', flag: false },
            { id: 7, price: '0.072', flag: false },
            { id: 8, price: '0.1', flag: false },
            { id: 9, price: '0.14', flag: false },
            { id: 10, price: '0.24', flag: false },
            { id: 11, price: '0.3', flag: false },
            { id: 12, price: '0.48', flag: false },
            { id: 13, price: '0.5', flag: false },
            { id: 14, price: '0.6', flag: false },
            { id: 15, price: '0.8', flag: false },
            { id: 16, price: '1', flag: false },
            // {id: 0.5, Heading: 'Freed balance', subHeading: '3 BTC'},
        ],
        checked: true,
        ModalState: false,
        des: '',
        Mtype: false,
        Msgtitle: ''
    };

    closeModal = () => {
        this.setState({ ModalState: false, des: '', Mtype: false, Msgtitle: '' });
    };

    async componentDidMount() {
        let accessToken = await psm.getAccessToken();
        let response = await getAllPacks(accessToken);
        let packs = [];
        for (let i = 0; i < response.data.length; i++) {
            let pack = response.data[i];
            pack.flag = i === 0;
            packs.push(pack);
        }
        this.setState({ packs });
    }

    ButtonFlag(index) {
        let array = [...this.state.packs];
        this.setState({ packs: [] });
        array.map((item, index1) => {
            if (index1 === index) {
                item.flag = true
            } else {
                item.flag = false
            }
            // console.log('A=',array)
            this.setState({ packs: array });
        });
    }

    render() {
        return (
            <ScrollView style={Styles.TopView}>
                <Messages
                    ModalState={this.state.ModalState}
                    remove={this.remove}
                    closeModal={this.closeModal}
                    des={this.state.des}
                    Mtype={this.state.Mtype}
                    title={this.state.Msgtitle}
                />
                <View style={{ flexDirection: 'row' }}>
                    <View style={Styles.TopTextView}>
                        <Text style={Styles.headingText}>All packages have value in BTC</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.closeBuyModal();
                        }}
                        style={Styles.closeView}>
                        <Entypo name={'circle-with-cross'} color={TextColor} size={25} />
                    </TouchableOpacity>
                </View>

                <FlatList
                    // itemDimension={70}
                    numColumns={4}
                    // staticDimension={responsiveWidth(96)}
                    data={this.state.packs}
                    // items={this.state.packs}
                    style={Styles.gridView}
                    renderItem={({ item, index }) => (
                        <View style={[Styles.itemContainer, { backgroundColor: item.code }]}>
                            {item.flag ? (
                                <LinearGradient
                                    colors={['#ECAA0D', '#E61EB6']}
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 1 }}
                                    style={Styles.LinearBlock}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.ButtonFlag(index);
                                        }}>
                                        <Text style={Styles.btnTxt}>{item.price}</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            ) : (
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.ButtonFlag(index);
                                        }}
                                        style={Styles.Block}>
                                        <Text style={Styles.btnTxt}>{item.price}</Text>
                                    </TouchableOpacity>
                                )}
                        </View>
                    )}
                />


                <View style={Styles.termsView}>
                    <View style={Styles.LeftView}>
                        <Checkbox
                            status={this.state.checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                this.setState({ checked: !this.state.checked });
                            }}
                            color={TextColor}
                        />
                    </View>
                    <View style={Styles.RightView}>
                        <Text style={Styles.termsText}>
                            <Text style={Styles.termsTextbold}>1. </Text>Accept the conditions and rules.
                        </Text>
                        <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center' }}
                            onPress={() => {
                                this.props.navigation.navigate('TermsAndConditions')
                            }}>
                            {/* <Image source={require('../../../Assets/Images/arrowright.png')} /> */}
                            <Text style={Styles.headingText}>
                                ➔ Go to Read
                            </Text>
                        </TouchableOpacity>
                    </View>
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
                            onPress={async () => {
                                let { packs, checked } = this.state;
                                let pack = packs.filter(pack => {
                                    return pack.flag === true;
                                })[0];

                                console.log('---------------', packs);

                                let user = await psm.getUser();
                                let accessToken = await psm.getAccessToken();

                                if (checked && pack) {
                                    // Alert.alert(
                                    //     'BUY',
                                    //     'Your Purchase Entered The Queue Successfully',
                                    //     [
                                    //         {
                                    //             text: 'Ok',
                                    //             onPress: () => console.log('Cancel Pressed'),
                                    //             style: 'cancel',
                                    //         },
                                    //     ]
                                    // );
                                    this.setState({ ModalState: 'fancy', Mtype: true, des: 'Your Purchase Entered The Queue Successfully', Msgtitle: 'BUY' });

                                    let response = await buyTicket(user.id, pack.id, true, true, accessToken);

                                }
                                else {
                                    this.setState({ ModalState: 'fancy', Mtype: false, des: 'something went wrong, try again', Msgtitle: 'BUY' });

                                    // Alert.alert(
                                    //     'BUY',
                                    //     'something went wrong, try again',
                                    //     [
                                    //         {
                                    //             text: 'Ok',
                                    //             onPress: () => console.log('Cancel Pressed'),
                                    //             style: 'cancel',
                                    //         },
                                    //     ]
                                    // );
                                }
                            }}
                            labelStyle={{ color: LightBackground, fontWeight: 'bold' }}>
                            <Text style={Styles.buttonTxt}>Buy</Text>
                        </Button>
                    </LinearGradient>
                </View>

            </ScrollView>
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
        height: responsiveHeight(7),
        justifyContent: 'center',
        paddingLeft: responsiveWidth(2),
    },
    headingText: {
        color: TextColor,
        fontSize: responsiveFontSize(2.2),
        left: responsiveWidth(0)
    },
    MainBlockView: {
        flexDirection: 'row', margin: 1,
    },
    MainBlockView2: {
        marginTop: responsiveHeight(1),
        flexDirection: 'row',
        paddingHorizontal: responsiveWidth(2),
    },
    MainBlockView3: {
        marginTop: responsiveHeight(1),
        flexDirection: 'row',
        paddingHorizontal: responsiveWidth(2),
    },
    gridView: {
        flex: 1,
        alignSelf: 'center'
    },
    itemContainer: {
        // justifyContent:'space-between',
        //justifyContent: 'flex-end',
        borderRadius: 5,
        //padding: 10,
        //height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    Block: {
        // height: 44,
        // width: 68,
        // marginLeft: responsiveWidth(2),
        // backgroundColor: LightBackground,
        borderRadius: 8,
        borderColor: LightBackground,
        borderWidth: 3.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 3,
        margin: 5,
        overflow: 'hidden',
        // borderRadius: 3,
        width: width / 4 - 21,
        height: width / 4 - 45,
        // flexDirection: 'column',
    },
    Block1: {
        height: responsiveHeight(7),
        width: responsiveWidth(20.8),
        marginLeft: responsiveWidth(2),
        backgroundColor: LightBackground,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    LinearBlock: {
        // marginLeft: responsiveWidth(2),
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 3,
        margin: 5,
        overflow: 'hidden',
        // borderRadius: 3,
        width: width / 4 - 21,
        height: width / 4 - 45,

    },
    LinearBlock2: {
        height: responsiveHeight(7),
        width: responsiveWidth(20.8),
        marginLeft: responsiveWidth(2),
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    LinearBlock3: {
        height: responsiveHeight(7),
        width: responsiveWidth(13.2),
        marginLeft: responsiveWidth(2),
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
    termsView: {
        marginTop: responsiveHeight(2),
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    termsText: {
        fontSize: responsiveFontSize(2.2),
        color: TextColor,
    },
    LeftView: {
        width: '5%',
        right: responsiveWidth(2.2),
        bottom: responsiveHeight(1)
    },
    RightView: {
        width: '85%'
    },
    termsTextbold: {
        fontWeight: 'bold'
    },
    ButtonView: {
        width: '80%',
        height: responsiveHeight(10),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
        height: responsiveHeight(6),
        borderRadius: 50,
        alignSelf: 'center'
    },
    NormalButton: {
        width: '40%',
        height: responsiveHeight(6),
        borderRadius: 8,
    },
    buttonTxt: {
        fontSize: responsiveFontSize(1.8),
        fontWeight: 'bold',
        color: White
    },
    buttonTxt2: {
        fontSize: responsiveFontSize(1.8),
        fontWeight: 'bold',
        color: TextColor
    },
    closeView: {
        paddingBottom: responsiveHeight(1.7),
        paddingHorizontal: responsiveWidth(2),
        alignSelf: 'flex-end',
        left: responsiveWidth(15)
    },
    btnTxt: {
        fontSize: responsiveFontSize(1.6),

    }
});
