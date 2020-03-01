import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    StatusBar,
    Alert
} from 'react-native';
import {
    responsiveHeight,
} from 'react-native-responsive-dimensions';
import { TextColor, LightBackground } from '../../Globals/colors';


export default class Login extends Component {
    state = {
        orders: [],
        DATA: [
            {
                id: 0,
                User: 'You',
                Kind: 'Buy',
                date: '18/08/2019',
                Amount: '10BTC',
                Rest: '0.3BTC',
                estate: 'Pending'
            },
            {
                id: 1,
                User: 'You',
                Kind: 'Sell',
                date: '18/08/2019',
                Amount: '10BTC',
                Rest: '0.5 BTC',
                estate: 'Pending'
            },
            {
                id: 2,
                User: 'You',
                Kind: 'Buy',
                date: '18/08/2019',
                Amount: '10BTC',
                Rest: '0.5 BTC',
                estate: 'Pre Complet'
            },

            {
                id: 3,
                User: 'You',
                Kind: 'Sell',
                date: '18/08/2019',
                Amount: '10BTC',
                Rest: '0.5 BTC',
                estate: 'Pre Complete'
            },
            {
                id: 4,
                User: 'You',
                Kind: 'Buy',
                date: '18/08/2019',
                Amount: '10BTC',
                Rest: '0.5 BTC',
                estate: 'Complete'
            },
            {
                id: 5,
                User: 'You',
                Kind: '‘Sell’',
                date: '18/08/2019',
                Amount: '10BTC',
                Rest: '0.5 BTC',
                estate: '‘Complet'
            },
            {
                id: 6,
                User: 'You',
                Kind: 'Buy',
                date: '18/08/2019',
                Amount: '10BTC',
                Rest: '0.3BTC',
                estate: 'Pre Finish'
            },
            {
                id: 7,
                User: 'You',
                Kind: '‘Sell’',
                date: '18/08/2019',
                Amount: '10BTC',
                Rest: '0.5 BTC',
                estate: 'Pre Finish'
            },
            {
                id: 8,
                User: 'You',
                Kind: 'Buy',
                date: '18/08/2019',
                Amount: '10BTC',
                Rest: '0.3BTC',
                estate: 'Finish'
            },
            {
                id: 9,
                User: 'You',
                Kind: 'Sell',
                date: '18/08/2019',
                Amount: '10BTC',
                UserName: 'shaly',
                Rest: '0.3BTC',
                estate: 'Finish'
            },
            {
                id: 10,
                User: 'You',
                Kind: 'Buy',
                date: '18/08/2019',
                Amount: '10BTC',
                Rest: '0.3BTC',
                estate: 'cancelled'
            },
            {
                id: 11,
                User: 'You',
                Kind: 'Sell',
                date: '18/08/2019',
                Amount: '10BTC',
                Rest: '0.3BTC',
                estate: 'cancelled'
            },
        ],
        isHome: true,
        isWallet: false,
        isEstate: false
    };

    componentDidMount = async () => {

    };

    PrintCards = post => {
        const item = post.item;
        const index = post.index;
        return (
            <View>
                {index % 2 !== 0 ? (

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity

                            style={{ flex: 1 }}
                        >
                            <LinearGradient
                                colors={['#ECAA0D', '#E61EB6']}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 1 }}
                                style={Styles.SuperView}>

                                <View style={{ marginBottom: 12, flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 18 }}>ID Transation</Text>
                                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 18, fontWeight: 'bold' }}>456</Text>
                                </View>

                                <View>
                                    <Text style={Styles.DetailText}>User: {item.User}</Text>
                                    <Text style={Styles.DetailText}>Kind: {item.Kind}</Text>
                                    <Text style={Styles.DetailText}>Amount: {item.Amount}</Text>
                                    <Text style={Styles.DetailText}>Rest: {item.Rest}</Text>
                                    <Text style={Styles.DetailText}>Data: {item.date}</Text>

                                </View>

                                <View style={{ marginTop: 18, flexDirection: 'row', alignSelf: 'center', marginBottom: 5 }}>
                                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 18 }}>Estate: </Text>
                                    <Text style={{ textAlign: 'center', color: TextColor, fontSize: 18, fontWeight: 'bold' }}>{item.estate}</Text>
                                </View>

                            </LinearGradient>
                        </TouchableOpacity>
                        {item.estate === 'Pending' || item.estate === 'pending' ? (
                            <TouchableOpacity
                                // onPress={() => {
                                //     this.setState({ ModalState: 'fancy', index: index });
                                // }}
                                onPress={() =>this.Confirmation(index)}
                                style={{ marginHorizontal: 2 }}>
                                <FontAwesome name={'trash-o'} size={35} />
                            </TouchableOpacity>
                        ) : null}
                    </View>


                ) : (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                style={{ flex: 1 }}
                            >
                                <View
                                    style={Styles.SuperView}>

                                    <View style={{ marginBottom: 12, flexDirection: 'row', alignSelf: 'center' }}>
                                        <Text style={{ textAlign: 'center', color: '#000', fontSize: 18 }}>ID Transation</Text>
                                        <Text style={{ textAlign: 'center', color: '#000', fontSize: 18, fontWeight: 'bold' }}>456</Text>
                                    </View>

                                    <View>
                                        <Text style={Styles.DetailTextWhite}>User: {item.User}</Text>
                                        <Text style={Styles.DetailTextWhite}>Kind: {item.Kind}</Text>
                                        <Text style={Styles.DetailTextWhite}>Amount: {item.Amount}</Text>
                                        <Text style={Styles.DetailTextWhite}>Rest: {item.Rest}</Text>
                                        <Text style={Styles.DetailTextWhite}>Data: {item.date}</Text>

                                    </View>

                                    <View style={{ marginTop: 18, flexDirection: 'row', alignSelf: 'center', marginBottom: 5 }}>
                                        <Text style={{ textAlign: 'center', color: '#000', fontSize: 18 }}>Estate: </Text>
                                        <Text style={{ textAlign: 'center', color: TextColor, fontSize: 18, fontWeight: 'bold' }}>{item.estate}</Text>
                                    </View>

                                </View>
                            </TouchableOpacity>
                            {item.estate === 'Pending' || item.estate === 'pending' ? (
                                <TouchableOpacity
                                    // onPress={() => {
                                    //     this.setState({ ModalState: 'fancy', index: index });
                                    // }}
                                    onPress={() =>this.Confirmation(index)}
                                    style={{ marginHorizontal: 2 }}>
                                    <FontAwesome name={'trash-o'} size={35} />
                                </TouchableOpacity>
                            ) : null}

                        </View>
                    )
                }
            </View>
        );
    };


    Confirmation = (index) => {
        Alert.alert(
            'Delete',
            'Do you want to remove this item',
            [
                {
                    text: 'No',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Yes', onPress: () => {
                        let newArr = [...this.state.DATA];
                        newArr.splice(index, 1);
                        this.setState({ DATA: newArr });
                    }
                },
            ]
        );
    }

    remove = () => {
        let newArr = [...this.state.DATA];
        newArr.splice(this.state.index, 1);
        this.setState({ DATA: newArr });
    };

    closeModal = () => {
        this.setState({ ModalState: false });
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
                    <View style={Styles.MainView}>
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
                        </View>
                    </View>
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

    DetailText: {
        color: '#fff',
        marginTop: 2,
        fontSize: 15,
        marginLeft: 5
    },
    SuperView: {
        // flex: 1,
        width: '92%',
        borderRadius: 15,
        elevation: 5,
        alignSelf: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 6,
        marginHorizontal: 10
    },

    DetailTextWhite: {
        // color: '#fff',
        marginTop: 2,
        fontSize: 15,
        marginLeft: 5
    }
});
