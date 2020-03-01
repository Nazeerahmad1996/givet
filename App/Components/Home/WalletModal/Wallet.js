import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
    Text,
    View,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    StatusBar,
} from 'react-native';
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {TextColor, White, LightBackground} from '../../../Globals/colors';
import {Button} from 'react-native-paper';
import Modal from 'react-native-modal';


export default class Wallet extends Component {
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
                Days: '0 days',
                Cycle: '2',
                time: '00:00:00',
                flag: false,
                Buy: true
            },
            {
                id: 2,
                kind: 'SELL',
                Amount: '1.5 BTC',
                Date: '10/12/2019',
                Rest: '0.5 BTC',
                Condition: 'In Process',
                flag: false,
            },
            {
                id: 3,
                kind: 'SELL',
                Amount: '1.5 BTC',
                Date: '10/12/2019',
                Rest: '0 BTC',
                Condition: 'Process',
                flag: false,
            },
            {
                id: 4,
                kind: 'Commission Fron',
                Amount: '1 BTC',
                Date: '10/12/2019',
                Rest: '1.5 BTC',
                Condition: 'Not Available',
                flag: false,
            },
            {
                id: 5,
                kind: 'Commission Fron',
                Amount: '1 BTC',
                Date: '10/12/2019',
                Rest: '1.5 BTC',
                Condition: 'Available',
                flag: false,
            },
            {
                id: 6,
                kind: 'withdrawals',
                Amount: '1.5 BTC',
                Date: '10/12/2019',
                Condition: 'No arrive',
                flag: false,
            },
            {
                id: 7,
                kind: 'withdrawals',
                Amount: '1.5 BTC',
                Date: '10/12/2019',
                Condition: 'Arrive',
                flag: false,
            },
        ],
        TopData: [
            {id: 1, head1: 'Current Pack', head2: '0.4 BTC'},
            {id: 2, head1: 'Current percentage', head2: '50%'},
            {id: 3, head1: 'Balance No Freed', head2: '3 BTC'},
            {id: 4, head1: 'Balance Freed', head2: '3 BTC'},
            {id: 5, head1: 'Commission not Available', head2: '3 BTC'},
        ],
    };
    PrintCards = post => {
        const item = post.item;
        const index = post.index;
        return (
            <View>
                {item.description === 'SELL' ? (
                    <LinearGradient
                        colors={['#ECAA0D', '#E61EB6']}
                        start={{x: 0, y: 1}}
                        end={{x: 1, y: 1}}
                        style={Styles.LinearGradientView}>
                        <View style={Styles.innerCardView}>
                            <View style={Styles.LeftView}>
                                <View style={Styles.kindView}>
                                    <Text style={Styles.kindTextLinear}>Kind :</Text>
                                    <Text style={Styles.kindTextLinear}> {item.description}</Text>
                                </View>
                                <View style={Styles.kindView}>
                                    <Text style={Styles.kindTextLinear}>Amount :</Text>
                                    <Text style={Styles.kindTextLinear}> {item.amount}</Text>
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
                                    <Text style={Styles.kindTextLinear}> {item.createdAt}</Text>
                                </View>
                                <View style={Styles.kindView}>
                                    <Text style={Styles.kindTextLinear}>Rest :</Text>
                                    <Text style={Styles.kindTextLinear}> {item.balance}</Text>
                                </View>
                                <View style={Styles.kindView}>
                                    <Text style={Styles.kindTextLinear}>Condition :</Text>
                                    <Text style={Styles.ConditionText}> {item.status}</Text>
                                </View>
                            </View>
                        </View>
                    </LinearGradient>
                ) : (
                    item.description == 'BUY' ? (
                        <View style={Styles.MainCardView}>
                            <View style={Styles.innerCardView}>
                                <View style={Styles.LeftView}>
                                    <View style={Styles.kindView}>
                                        <Text style={Styles.KindText}>Kind :</Text>
                                        <Text style={Styles.kindText}> {item.description}</Text>
                                    </View>
                                    <View style={Styles.kindView}>
                                        <Text style={Styles.KindText}>Amount :</Text>
                                        <Text style={Styles.kindText}> {item.amount}</Text>
                                    </View>
                                    {item.TotalRelease ?
                                        (<View style={Styles.kindView}>
                                            <Text style={Styles.kindText}>Total to release :</Text>
                                            <Text style={Styles.kindText}>
                                                {' '}
                                                {item.TotalRelease}
                                            </Text>
                                        </View>) : (null)
                                    }
                                    <View style={Styles.kindView}>
                                        <Text style={Styles.KindText}>Date :</Text>
                                        <Text style={Styles.kindText}> {item.createdAt}</Text>
                                    </View>
                                    <View style={Styles.kindView}>
                                        <Text style={Styles.KindText}>Rest :</Text>
                                        <Text style={Styles.kindText}> {item.balance}</Text>
                                    </View>
                                    <View style={Styles.kindView}>
                                        <Text style={Styles.KindText}>Condition :</Text>
                                        <Text style={Styles.ConditionText}> {item.status}</Text>
                                    </View>
                                </View>
                                <View style={Styles.RightView}>
                                    {
                                        (item.Cycle && item.Days) ?
                                            <View style={Styles.middleView}>
                                                <View style={Styles.DayView}>
                                                    <Text style={Styles.dayText}>{'Cycle'}</Text>
                                                    <Text style={Styles.dayText}>{item.Cycle}</Text>
                                                </View>
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
                                            start={{x: 0, y: 1}}
                                            end={{x: 1, y: 1}}
                                            style={Styles.LinearGradientButtonView}>
                                            <Button
                                                contentStyle={{height: responsiveHeight(4)}}
                                                labelStyle={{color: White}}>
                                                <Text style={Styles.buttonTxt}>Buy Back</Text>
                                            </Button>
                                        </LinearGradient>
                                    ) : null}
                                </View>
                            </View>
                        </View>
                    ) : (item.description == 'Commission Fron' ? (
                        <View style={Styles.MainCardView}>
                            <View style={Styles.innerCardView}>
                                <View style={Styles.LeftView}>
                                    <View style={Styles.kindView}>
                                        <Text style={Styles.KindText}>Kind :</Text>
                                        <Text style={Styles.kindText}> {item.description}</Text>
                                    </View>
                                    <View style={Styles.kindView}>
                                        <Text style={Styles.KindText}>Amount :</Text>
                                        <Text style={Styles.kindText}> {item.amount}</Text>
                                    </View>
                                    {item.TotalRelease ?
                                        (<View style={Styles.kindView}>
                                            <Text style={Styles.kindText}>Total to release :</Text>
                                            <Text style={Styles.kindText}>
                                                {' '}
                                                {item.TotalRelease}
                                            </Text>
                                        </View>) : (null)
                                    }
                                    <View style={Styles.kindView}>
                                        <Text style={Styles.KindText}>Date :</Text>
                                        <Text style={Styles.kindText}> {item.createdAt}</Text>
                                    </View>
                                    <View style={Styles.kindView}>
                                        <Text style={Styles.KindText}>Rest :</Text>
                                        <Text style={Styles.kindText}> {item.balance}</Text>
                                    </View>
                                    <View style={Styles.kindView}>
                                        <Text style={Styles.KindText}>Condition :</Text>
                                        <Text style={Styles.ConditionText}> {item.status}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ) : (
                        <LinearGradient
                            colors={['#ECAA0D', '#E61EB6']}
                            start={{x: 0, y: 1}}
                            end={{x: 1, y: 1}}
                            style={Styles.LinearGradientView}>
                            <View style={Styles.innerCardView}>
                                <View style={Styles.LeftView}>
                                    <View style={Styles.kindView}>
                                        <Text style={Styles.kindTextLinear}>Kind :</Text>
                                        <Text style={Styles.kindTextLinear}> {item.description}</Text>
                                    </View>
                                    <View style={Styles.kindView}>
                                        <Text style={Styles.kindTextLinear}>Amount :</Text>
                                        <Text style={Styles.kindTextLinear}> {item.amount}</Text>
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
                                        <Text style={Styles.kindTextLinear}> {item.createdAt}</Text>
                                    </View>
                                    {item.balance ? (<View style={Styles.kindView}>
                                        <Text style={Styles.kindTextLinear}>Rest :</Text>
                                        <Text style={Styles.kindTextLinear}> {item.balance}</Text>
                                    </View>) : (null)}
                                    <View style={Styles.kindView}>
                                        <Text style={Styles.kindTextLinear}>Condition :</Text>
                                        <Text style={Styles.ConditionText}> {item.status}</Text>
                                    </View>
                                </View>
                            </View>
                        </LinearGradient>
                    )))}
            </View>
        );
    };
    renderModalContent = () => (
        <View style={Styles.modalView}>
            <View style={Styles.TopView}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.closeWalletModal();
                    }}
                    style={Styles.TopView}>
                    <AntDesign name={'closecircle'} color={TextColor} size={25}/>
                </TouchableOpacity>
            </View>
            <Text style={Styles.topText}>Available Balance</Text>
            <Text style={Styles.topText2}>0.544 BTC, GVT 450, 450 USD</Text>
            <View style={Styles.TopDataView}>
                {this.state.TopData.map(item => (
                    <View style={Styles.innerTopDataView}>
                        <View>
                            <Text style={Styles.head1}>{item.head1}</Text>
                        </View>
                        <View>
                            <Text style={Styles.head2}>{item.head2}</Text>
                        </View>
                    </View>
                ))}
            </View>
            <ScrollView style={Styles.flatScroll}>
                <FlatList
                    data={this.state.Data}
                    keyExtractor={item => item.id}
                    renderItem={item => this.PrintCards(item)}
                    contentContainerStyle={Styles.ContainerStyle}
                    ItemSeparatorComponent={() => <View style={Styles.Seprator}/>}
                />
            </ScrollView>
        </View>
    );

    render() {
        return (
            <SafeAreaView>
                <StatusBar translucent backgroundColor="transparent"/>
                <Modal
                    isVisible={this.props.WalletState === 'fancy'}
                    // onShow={async () => {
                    //     let user = await psm.getUser();
                    //     let accessToken = await psm.getAccessToken();
                    //     let response = await getWallet(user.id, accessToken);
                    //     this.setState({
                    //         Data: response.data
                    //     });
                    // }}
                    backdropColor="rgba(0,0,0,0.1)"
                    animationIn="zoomInDown"
                    animationOut="zoomOutUp"
                    animationInTiming={600}
                    animationOutTiming={600}
                    backdropTransitionInTiming={600}
                    backdropTransitionOutTiming={600}
                    style={{overflow: 'scroll', justifyContent: 'flex-end'}}>
                    {this.renderModalContent()}
                </Modal>
            </SafeAreaView>
        );
    }
}
const Styles = StyleSheet.create({
    modalView: {
        width: responsiveWidth(95),
        height: responsiveHeight(75),
        borderRadius: 30,
        alignSelf: 'center',
        backgroundColor: 'white',
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
        borderColor: TextColor,
        borderWidth: 1.5,
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
        width: '50%',
    },
    RightView: {
        width: '45%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    kindView: {
        flexDirection: 'row',
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

    middleView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',


    },
    LinearGradientView: {
        width: '95%',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderColor: TextColor,
        borderWidth: 1.5,
        borderRadius: 15,
    },
    kindTextLinear: {
        fontSize: responsiveFontSize(1.6),
        fontWeight: 'bold',
        color: White,
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
