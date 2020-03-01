import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    FlatList,
    StatusBar,
} from 'react-native';
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { TextColor, White, LightBackground } from '../../Globals/colors';
import { Button } from 'react-native-paper';

import Header from './WalletHeader';
export default class WalletHistory extends Component {
    state = {
        Data: [
            {
                id: 0,
                kind: 'BUY',
                Amount: '1 BTC',
                TotalRelease: '1.5 BTC',
                Date: '10/12/2019',
                Rest: '1.5 BTC',
                Condition: 'not Freed',
                Days: '10 days',
                Cycle: '1',
                time: '20:09:40',
                flag: false,
            },
            {
                id: 1,
                kind: 'BUY',
                Amount: '1 BTC',
                TotalRelease: '1.5 BTC',
                Date: '10/12/2019',
                Rest: '1.5 BTC',
                Condition: 'Freed',
                Days: '10 days',
                time: '00:00:00',
                flag: false,
            },
            {
                id: 2,
                kind: 'BUY',
                Amount: '1 BTC',
                TotalRelease: '1.5 BTC',
                Date: '10/12/2019',
                Rest: '1.5 BTC',
                Condition: 'Available',
                Days: '10 days',
                time: '0:00:00',
                flag: false,
            },
            {
                id: 3,
                kind: 'SELL',
                Amount: '1.5 BTC',
                Date: '10/12/2019',
                Rest: '0 BTC',
                Condition: 'in process ',
                flag: false,
            },
            {
                id: 4,
                kind: 'SELL',
                Amount: '1.5 BTC',
                Date: '10/12/2019',
                Rest: '0.5 BTC',
                Condition: 'processed ',
                flag: false,
            },
            {
                id: 5,
                kind: 'Commission From: User1',
                Amount: '1.5 BTC',
                Date: '10/12/2019',
                Rest: '0.5 BTC',
                Condition: 'Not Consumed',
                flag: false,
            },
            {
                id: 6,
                kind: 'Commission From: User1',
                Amount: '1.5 BTC',
                Date: '10/12/2019',
                Rest: '0.5 BTC',
                Condition: 'Consumed',
                flag: false,
            },
            {
                id: 7,
                kind: 'Withdrawal',
                Amount: '1.5 BTC',
                Date: '10/12/2019',
                Condition: 'Not Arrive',
                flag: false,
            },
            {
                id: 8,
                kind: 'Withdrawal',
                Amount: '1.5 BTC',
                Date: '10/12/2019',
                Condition: 'Arrive',
                flag: false,
            },
            {
                id: 9,
                kind: 'transfer to user, a1',
                Amount: '1.5 BTC',
                Date: '10/12/2019',
                flag: false,
            },
            {
                id: 10,
                kind: 'Penalty payment',
                Amount: '1.5 BTC',
                Date: '10/12/2019',
                flag: false,
            },
            {
                id: 11,
                kind: 'Add',
                Amount: '1.5 BTC',
                Date: '10/12/2019',
                flag: false,
            },
            {
                id: 12,
                kind: 'Reduce Balance',
                Amount: '1.5 BTC',
                Date: '10/12/2019',
                flag: false,
            },
        ],
    };
    PrintCards = post => {
        const item = post.item;
        const index = post.index;
        return (
            <View>
                {item.kind === 'SELL' ? (
                    <LinearGradient
                        colors={['#ECAA0D', '#E61EB6']}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={Styles.LinearGradientView}>
                        <View style={Styles.innerCardView}>
                            <View style={Styles.LeftView2}>
                                <View style={Styles.kindView}>
                                    <Text style={Styles.kindTextLinear}>Kind :</Text>
                                    <Text style={Styles.kindTextLinear2}>{item.kind}</Text>
                                </View>
                                <View style={Styles.kindView}>
                                    <Text style={Styles.kindTextLinear}>Amount :</Text>
                                    <Text style={Styles.kindTextLinear2}> {item.Amount}</Text>
                                </View>
                                {item.TotalRelease ?
                                    (<View style={Styles.kindView}>
                                        <Text style={Styles.kindTextLinear}>Total to release :</Text>
                                        <Text style={Styles.kindTextLinear2}>
                                            {' '}
                                            {item.TotalRelease}
                                        </Text>
                                    </View>) : (null)
                                }
                                <View style={Styles.kindView}>
                                    <Text style={Styles.kindTextLinear}>Date :</Text>
                                    <Text style={Styles.kindTextLinear2}> {item.Date}</Text>
                                </View>
                                <View style={Styles.kindView}>
                                    <Text style={Styles.kindTextLinear}>Rest :</Text>
                                    <Text style={Styles.kindTextLinear2}> {item.Rest}</Text>
                                </View>
                                <View style={Styles.kindView}>
                                    <Text style={Styles.kindTextLinear}>Condition :</Text>
                                    <Text style={Styles.ConditionText2}> {item.Condition}</Text>
                                </View>
                            </View>
                        </View>
                    </LinearGradient>
                ) : (
                        item.kind == 'BUY' ? (
                            <View style={Styles.MainCardView}>
                                <View style={Styles.innerCardView}>
                                    <View style={Styles.LeftView}>
                                        <View style={Styles.kindView}>
                                            <Text style={Styles.KindText}>Kind :</Text>
                                            <Text style={Styles.kindText2}> {item.kind}</Text>
                                        </View>
                                        <View style={Styles.kindView}>
                                            <Text style={Styles.KindText}>Amount :</Text>
                                            <Text style={Styles.kindText2}> {item.Amount}</Text>
                                        </View>
                                        {item.TotalRelease ?
                                            (<View style={Styles.kindView}>
                                                <Text style={Styles.KindText}>Total to release :</Text>
                                                <Text style={Styles.kindText2}>
                                                    {' '}
                                                    {item.TotalRelease}
                                                </Text>
                                            </View>) : (null)
                                        }
                                        <View style={Styles.kindView}>
                                            <Text style={Styles.KindText}>Date :</Text>
                                            <Text style={Styles.kindText2}> {item.Date}</Text>
                                        </View>
                                        <View style={Styles.kindView}>
                                            <Text style={Styles.KindText}>Rest :</Text>
                                            <Text style={Styles.kindText2}> {item.Rest}</Text>
                                        </View>
                                        <View style={Styles.kindView}>
                                            <Text style={Styles.KindText}>Condition :</Text>
                                            <Text style={Styles.ConditionText2}> {item.Condition}</Text>
                                        </View>
                                    </View>
                                    <View style={Styles.RightView}>
                                        {
                                            (item.Days && item.Condition !== 'Available') ?
                                                <View style={Styles.middleView}>
                                                    {/* <View style={Styles.DayView}>
                                                        <Text style={Styles.dayText}>{'Cycle'}</Text>
                                                        <Text style={Styles.dayText}>{item.Cycle}</Text>
                                                    </View> */}
                                                    <View style={Styles.DayView}>
                                                        <Text style={Styles.dayText}>{item.Days}</Text>
                                                        <Text style={Styles.dayText}>{item.time}</Text>
                                                    </View>
                                                </View>
                                                :
                                                null
                                        }

                                        {item.Buy ? (
                                            <LinearGradient
                                                colors={['#ECAA0D', '#E61EB6']}
                                                start={{ x: 0, y: 1 }}
                                                end={{ x: 1, y: 1 }}
                                                style={Styles.LinearGradientButtonView}>
                                                <Button
                                                    contentStyle={{ height: responsiveHeight(4) }}
                                                    labelStyle={{ color: White }}>
                                                    <Text style={Styles.buttonTxt}>Buy Back</Text>
                                                </Button>
                                            </LinearGradient>
                                        ) : null}
                                    </View>
                                </View>
                            </View>
                        ) : (item.Condition === 'Consumed' || item.Condition === 'Not Consumed' ? (
                            <View style={Styles.MainCardView}>
                                <View style={Styles.innerCardView}>
                                    <View style={Styles.LeftView2}>
                                        <View style={Styles.kindView}>
                                            <Text style={Styles.KindText}>Kind :</Text>
                                            <Text style={Styles.kindText2}> {item.kind}</Text>
                                        </View>
                                        <View style={Styles.kindView}>
                                            <Text style={Styles.KindText}>Amount :</Text>
                                            <Text style={Styles.kindText2}> {item.Amount}</Text>
                                        </View>
                                        {item.TotalRelease ?
                                            (<View style={Styles.kindView}>
                                                <Text style={Styles.kindText}>Total to release :</Text>
                                                <Text style={Styles.kindText2}>
                                                    {' '}
                                                    {item.TotalRelease}
                                                </Text>
                                            </View>) : (null)
                                        }
                                        <View style={Styles.kindView}>
                                            <Text style={Styles.KindText}>Date :</Text>
                                            <Text style={Styles.kindText}> {item.Date}</Text>
                                        </View>
                                        <View style={Styles.kindView}>
                                            <Text style={Styles.KindText}>Rest :</Text>
                                            <Text style={Styles.kindText2}> {item.Rest}</Text>
                                        </View>
                                        <View style={Styles.kindView}>
                                            <Text style={Styles.KindText}>Condition :</Text>
                                            <Text style={Styles.ConditionText2}> {item.Condition}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ) : (
                                <LinearGradient
                                    colors={['#ECAA0D', '#E61EB6']}
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 1 }}
                                    style={Styles.LinearGradientView}>
                                    <View style={Styles.innerCardView}>
                                        <View style={Styles.LeftView2}>
                                            <View style={Styles.kindView}>
                                                <Text style={Styles.kindTextLinear}>Kind :</Text>
                                                <Text style={Styles.kindTextLinear2}> {item.kind}</Text>
                                            </View>
                                            <View style={Styles.kindView}>
                                                <Text style={Styles.kindTextLinear}>Amount :</Text>
                                                <Text style={Styles.kindTextLinear2}> {item.Amount}</Text>
                                            </View>
                                            {item.TotalRelease ?
                                                (<View style={Styles.kindView}>
                                                    <Text style={Styles.kindTextLinear}>Total to release :</Text>
                                                    <Text style={Styles.kindTextLinear}>
                                                        {' '}
                                                        {item.TotalRelease}
                                                    </Text>
                                                </View>) : (null)
                                            }
                                            <View style={Styles.kindView}>
                                                <Text style={Styles.kindTextLinear}>Date :</Text>
                                                <Text style={Styles.kindTextLinear2}> {item.Date}</Text>
                                            </View>
                                            {item.balance ? (<View style={Styles.kindView}>
                                                <Text style={Styles.kindTextLinear}>Rest :</Text>
                                                <Text style={Styles.kindTextLinear2}> {item.Rest}</Text>
                                            </View>) : (null)}
                                            {item.Condition ? (
                                                <View style={Styles.kindView}>
                                                    <Text style={Styles.kindTextLinear}>Condition :</Text>
                                                    <Text style={Styles.ConditionText2}> {item.Condition}</Text>
                                                </View>
                                            ) : null
                                            }
                                        </View>
                                    </View>
                                </LinearGradient>
                            )))}
            </View>
        );
    };


    render() {
        return (
            <View>
                <StatusBar translucent backgroundColor="transparent" />
                <Header navigation={this.props.navigation} HeaderName={'History'} {...this.props} />


                <View style={Styles.modalView}>

                    <FlatList
                        data={this.state.Data}
                        keyExtractor={item => item.id}
                        renderItem={item => this.PrintCards(item)}
                        contentContainerStyle={Styles.ContainerStyle}
                        ItemSeparatorComponent={() => <View style={Styles.Seprator} />}
                    />
                </View>
            </View>
        );
    }
}
const Styles = StyleSheet.create({
    modalView: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
        borderRadius: 30,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: -20
    },
    TopView: {
        alignSelf: 'flex-end',
        marginRight: responsiveWidth(2),
        marginTop: responsiveHeight(1),
    },
    MainCardView: {
        width: '95%',
        alignSelf: 'center',
        backgroundColor: 'white',
        // borderColor: TextColor,
        borderWidth: 0.5,
        borderRadius: 15,
    },
    Seprator: {
        marginTop: responsiveHeight(2),
    },
    ContainerStyle: {
        width: '95%',
        alignSelf: 'center',
        paddingVertical: responsiveHeight(2),
    },
    flatScroll: {
        marginBottom: responsiveHeight(1),
        marginTop: responsiveHeight(2),
    },
    innerCardView: {
        width: '95%',
        alignSelf: 'center',
        marginVertical: responsiveHeight(1),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: responsiveHeight(2),
    },
    LeftView: {
        width: '60%',
    },
    LeftView2: {
        flex:1
    },
    RightView: {
        width: '45%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    kindView: {
        flexDirection: 'row',
        flex:1,
        alignItems:'center'
        // borderWidth:1,
    },
    kindText: {
        fontSize: responsiveFontSize(1.6),
        color: TextColor,
    },
    ConditionText: {
        fontSize: responsiveFontSize(1.6),
        fontWeight: 'bold',
        color: TextColor,
        top: responsiveHeight(0.25)
    },

    kindText2: {
        flex:1,
        fontSize: responsiveFontSize(1.6),
        color: TextColor,
    },
    ConditionText2: {
        flex:1,
        fontSize: responsiveFontSize(1.6),
        fontWeight: 'bold',
        color: TextColor,
        top: responsiveHeight(0.25)
    },

    middleView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 15,


    },
    LinearGradientView: {
        width: '95%',
        alignSelf: 'center',
        backgroundColor: 'white',
        // borderColor: TextColor,
        // borderWidth: 1.5,
        borderRadius: 15,
        paddingHorizontal: 15,
    },
    kindTextLinear: {
        fontSize: responsiveFontSize(1.6),
        fontWeight: 'bold',
        color: White,
    },
    kindTextLinear2: {
        flex:1,
        fontSize: responsiveFontSize(1.6),
        fontWeight: 'bold',
        color: White,
        // borderWidth:1,
    },
    DayView: {
        width: responsiveHeight(10),
        height: responsiveHeight(10),
        padding: 10,
        borderRadius: responsiveHeight(8.5),
        backgroundColor: LightBackground,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dayText: {
        fontSize: responsiveFontSize(1.3),
        fontWeight: 'bold',
        color: TextColor,
    },
    LinearGradientButtonView: {
        height: responsiveHeight(4),
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    BuyButton: {
        width: '100%',
        borderRadius: 8,
    },
    topText: {
        textAlign: 'center',
        fontSize: responsiveFontSize(2.5),
        color: TextColor,
    },
    topText2: {
        textAlign: 'center',
        fontSize: responsiveFontSize(2.2),
        fontWeight: 'bold',
        color: TextColor,
    },
    buttonTxt: {
        fontSize: responsiveFontSize(1.5),
        fontWeight: 'bold',
        color: White,
    },
    TopDataView: {
        marginTop: responsiveHeight(2),
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
    },
    head1: {
        color: TextColor,
        fontSize: responsiveFontSize(1.4),
        textAlign: 'center',
    },
    head2: {
        marginTop: responsiveHeight(0.5),
        color: TextColor,
        fontSize: responsiveFontSize(1.6),
        textAlign: 'center',
        fontWeight: 'bold',
    },
    innerTopDataView: {
        width: '20%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

});
