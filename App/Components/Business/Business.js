import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
} from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { White } from '../../Globals/colors';
import Tabs from './Tabs';

export default class Login extends Component {
  state = {
    headerName: 'BUSINESS',
    isSearch: false,
    register: false,
    store: true,
    myBusiness: false,
    StoreData: [
      {
        id: 0,
        title: 'fruti flavour',
        Subtitle: 'Cellar',
        time: '07:30hrs-19:30hrs',
        details: 'Av: preshool rd',
        price: '1.00 GVT For every $ 20.00',
        price2: '2:00 GVT for the sponsor',
        image: require('../../Assets/Images/gym.jpg'),
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
        image: require('../../Assets/Images/gym2.jpg'),
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
        image: require('../../Assets/Images/gym3.jpg'),
        type: 'Professional'
      },
    ],
    CopyData: [
      {
        id: 0,
        title: 'fruti flavour',
        Subtitle: 'Cellar',
        time: '07:30hrs-19:30hrs',
        details: 'Av: preshool rd',
        price: '1.00 GVT For every $ 20.00',
        price2: '2:00 GVT for the sponsor',
        image: require('../../Assets/Images/gym.jpg'),
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
        image: require('../../Assets/Images/gym2.jpg'),
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
        image: require('../../Assets/Images/gym3.jpg'),
        type: 'Professional'
      },
    ],
    MyBusinesData: [
      {
        id: 0,
        title: 'fruti flavour',
        Subtitle: 'Cellar',
        time: '07:30hrs-19:30hrs',
        details: 'Av: preshol rd',
        price: '4.00 GVT For  each $20.00',
        price2: '2:00 GVT for the sponsor',
        image: require('../../Assets/Images/gym.jpg'),
      },
      {
        id: 1,
        title: 'Good Taste',
        Subtitle: 'restaurant',
        time: '07:30hrs-19:30hrs',
        details: 'Av: preshol rd',
        price: '4.00 GVT For  each $20.00',
        price2: '2:00 GVT for the sponsor',
        image: require('../../Assets/Images/gym2.jpg'),
      },
    ],
    MyBusinesDataCopy: [
      {
        id: 0,
        title: 'fruti flavour',
        Subtitle: 'Cellar',
        time: '07:30hrs-19:30hrs',
        details: 'Av: preshol rd',
        price: '4.00 GVT For  each $20.00',
        price2: '2:00 GVT for the sponsor',
        image: require('../../Assets/Images/gym.jpg'),
      },
      {
        id: 1,
        title: 'Good Taste',
        Subtitle: 'restaurant',
        time: '07:30hrs-19:30hrs',
        details: 'Av: preshol rd',
        price: '4.00 GVT For  each $20.00',
        price2: '2:00 GVT for the sponsor',
        image: require('../../Assets/Images/gym2.jpg'),
      },
    ],
  };

  ShowRegister = () => {
    this.setState({ register: true, store: false, myBusiness: false });
  };
  ShowStore = () => {
    this.setState({ register: false, store: true, myBusiness: false });
  };
  MyBusiness = () => {
    this.setState({ register: false, store: false, myBusiness: true });
  };

  remove = () => {
    let newArr = [...this.state.MyBusinesData];
    newArr.splice(this.state.index, 1);
    this.setState({ MyBusinesData: newArr });
  };

  searchFilterFunction = text => {
    if (this.state.store) {
      const newData = this.state.StoreData.filter(item => {
        const itemData = `${item.title.toUpperCase()}`;

        const textData = text.toUpperCase();

        return itemData.indexOf(textData) > -1;
      });
      if (text === '') {
        this.setState({ StoreData: this.state.CopyData })
      } else {
        this.setState({ StoreData: newData });

      }
    }
    if (this.state.myBusiness) {
      const newData = this.state.MyBusinesData.filter(item => {
        const itemData = `${item.title.toUpperCase()}`;

        const textData = text.toUpperCase();

        return itemData.indexOf(textData) > -1;
      });
      if (text === '') {
        this.setState({ MyBusinesData: this.state.MyBusinesDataCopy })
      } else {
        this.setState({ MyBusinesData: newData });

      }
    }

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
          <View style={Styles.Header}>
            <Text style={Styles.HeaderText}>BUSINESS</Text>
          </View>
          <TouchableOpacity
            style={Styles.menu}
            onPress={() => this.props.navigation.openDrawer()}>
            <Feather name={'menu'} color={'white'} size={25} />
          </TouchableOpacity>
          {(this.state.isSearch && !this.state.register) && (
            <View style={{ backgroundColor: '#f6f7f9', paddingHorizontal: 10, borderColor: '#DDDDDD', borderWidth: 0.8, marginHorizontal: 25, marginBottom: 25, borderRadius: 25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TextInput
                style={{ flex: 1 }}
                placeholder="Search"
                onChangeText={text => this.searchFilterFunction(text)}
              />
            </View>
          )}
          {!this.state.register && (
            <TouchableOpacity onPress={() => this.setState({ isSearch: !this.state.isSearch })} style={{ position: 'absolute', top: 28, right: 20 }}>
              {this.state.isSearch ? (
                <Entypo name='cross' color='#fff' size={25} />
              ) : (
                  <FontAwesome name='search' color='#fff' size={20} />
                )}
            </TouchableOpacity>
          )}

          <View style={Styles.MainView}>
            <Tabs register={this.state.register} store={this.state.store} myBusiness={this.state.myBusiness} ShowRegister={this.ShowRegister} ShowStore={this.ShowStore} MyBusiness={this.MyBusiness} remove={this.remove} MyBusinesData={this.state.MyBusinesData} StoreData={this.state.StoreData}  {...this.props} />
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
    // backgroundColor: LightBackground,
    // borderTopRightRadius: 25,
    // borderTopLeftRadius: 25,
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
  menu: {
    marginLeft: '4%',
    position: 'absolute',
    top: responsiveHeight(4.75),
  },
});
