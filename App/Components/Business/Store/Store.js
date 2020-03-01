import React, { Component } from 'react';


import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { TextColor, White, LightBackground } from '../../../Globals/colors';
import { Toggle } from "./Toggle"
import CountryPicker from './CountryPicker';

export default class Register extends Component {
  state = {
    Data: [
      {
        id: 0,
        title: 'fruti flavour',
        Subtitle: 'Cellar',
        time: '07:30hrs-19:30hrs',
        details: 'Av: preshool rd',
        price: '1.00 GVT For every $ 20.00',
        price2: '2:00 GVT for the sponsor',
        image: require('../../../Assets/Images/gym.jpg'),
        type: 'local'
      },
      {
        id: 1,
        title: 'Good Taste',
        Subtitle: 'restaurant',
        time: '07:30hrs-19:30hrs',
        details: 'Av: preshool rd',
        price: '4.00 GVT for every $ 20.00',
        price2: '2:00 GVT for the sponsor',
        image: require('../../../Assets/Images/gym2.jpg'),
        type: 'Professional'
      },
      {
        id: 2,
        title: 'Fix Everything',
        Subtitle: 'automotive',
        time: '07:30hrs-19:30hrs',
        details: 'Av: preshool rd',
        price: '5.00 GVT For  each $ 20.00',
        price2: '1:00 GVT for the sponsor',
        image: require('../../../Assets/Images/gym3.jpg'),
        type: 'Professional'
      },
    ],
    alertsIsOn: true,
  };
  PrintCards = post => {
    const item = post.item;
    const index = post.index;
    if (this.state.alertsIsOn) {
      return (
        <View>
          {
            item.type !== 'local' ? (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Details', { item: post.item });
                }}
                style={Styles.SuperView}>
                <View style={Styles.NestedView}>
                  <View style={Styles.LeftView}>
                    <Image style={Styles.image} source={item.image} />
                  </View>
                  <View style={Styles.RightView}>
                    <Text style={Styles.TextTitle}>{item.title}</Text>
                    <Text style={Styles.TextSubTitle}>{item.Subtitle}</Text>
                    <Text style={Styles.TextSubTitle}>{item.time}</Text>
                    <Text style={Styles.TextSubTitle}>{item.details}</Text>
                    <View style={Styles.coinText}>
                      <Image
                        style={Styles.imageStyle}
                        source={require('../../../Assets/Images/gvt.png')}
                      />
                      <View>
                        <Text style={Styles.Textprice}>{item.price}</Text>
                        <Text style={Styles.Textprice}>{item.price2}</Text>
                      </View>

                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ) : (
                null
              )
          }
        </View>
      )
    }
    else {
      return (
        <View>
          {
            item.type !== 'Professional' ? (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Details', { item: post.item });
                }}
                style={Styles.SuperView}>
                <View style={Styles.NestedView}>
                  <View style={Styles.LeftView}>
                    <Image style={Styles.image} source={item.image} />
                  </View>
                  <View style={Styles.RightView}>
                    <Text style={Styles.TextTitle}>{item.title}</Text>
                    <Text style={Styles.TextSubTitle}>{item.Subtitle}</Text>
                    <Text style={Styles.TextSubTitle}>{item.time}</Text>
                    <Text style={Styles.TextSubTitle}>{item.details}</Text>
                    <View style={Styles.coinText}>
                      <Image
                        style={Styles.imageStyle}
                        source={require('../../../Assets/Images/gvt.png')}
                      />
                      <View>
                        <Text style={Styles.Textprice}>{item.price}</Text>
                        <Text style={Styles.Textprice}>{item.price2}</Text>
                      </View>

                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ) : (
                null
              )
          }
        </View>
      )
    }
  };
  alertsToggleHandle(state) {
    this.setState({ alertsIsOn: state })
  }
  render() {
    return (
      <View style={{flex:1, backgroundColor: LightBackground,borderTopLeftRadius:25,borderTopRightRadius:25}}>
        <View style={Styles.TopBarView}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            {/* <Searchbar
              placeholder="Search by Category"
              style={Styles.Searchbar}
              inputStyle={Styles.SearchbarInputStyle}
            /> */}
            <Toggle
              isOn={this.state.alertsIsOn}
              onToggle={state => this.alertsToggleHandle(state)}
            />
            <CountryPicker style={{ alignSelf: 'flex-end' }} {...this.props} />
          </View>
        </View>
        <ScrollView style={{ height: '80%' }} >
          <FlatList
            data={this.props.StoreData}
            keyExtractor={item => item.id}
            renderItem={item => this.PrintCards(item)}
            contentContainerStyle={Styles.ContainerStyle}
            ItemSeparatorComponent={() => <View style={Styles.Seprator} />}
          />
        </ScrollView>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TopBarView: {
    width: '85%',
    alignSelf: 'center',
    height: responsiveHeight(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Searchbar: {
    borderRadius: 15,
    backgroundColor: LightBackground,
    borderColor: White,
    height: responsiveHeight(6),
    flex: 1,
  },
  SearchbarInputStyle: {
    fontSize: responsiveFontSize(1.8),
  },
  Seprator: {
    marginTop: responsiveHeight(1),
  },
  ContainerStyle: {
    width: '95%',
    alignSelf: 'center',
    paddingBottom: responsiveHeight(5)
  },
  SuperView: {
    width: '95%',
    alignSelf: 'center',
    elevation: 5,
    backgroundColor: White,
    borderRadius: 15,
  },
  NestedView: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  LeftView: {
    width: '30%',
  },
  RightView: {
    width: '60%',
  },
  image: {
    height: responsiveHeight(15),
    width: '100%',
  },
  TextTitle: {
    color: TextColor,
    fontSize: responsiveFontSize(2.2),
  },
  coinText: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  TextSubTitle: {
    color: 'gray',
    fontSize: responsiveFontSize(1.8),
  },
  Textprice: {
    color: TextColor,
    fontSize: responsiveFontSize(1.8),
  },
  imageStyle: {
    width: responsiveWidth(7),
    height: responsiveHeight(8),
    resizeMode: 'contain'
  }
});
