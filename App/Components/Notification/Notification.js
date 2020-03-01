import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  Text,
  View,
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
import { TextColor, White, LightBackground } from '../../Globals/colors';

export default class Login extends Component {
  state = {
    DATA: [
      {
        id: 0,
        notification: 'Your account has been unlocked successfully.',
        date: '10/23/2019',
      },
      {
        id: 1,
        notification: 'Your account has been unlocked successfully.',
        date: '10/23/2019',
      },
      {
        id: 2,
        notification: 'Your account has been unlocked successfully.',
        date: '10/23/2019',
      },
    ],
  };
  PrintCards = post => {
    const item = post.item;
    const index = post.index;
    return (
      <View style={Styles.MainCard}>
        <TouchableOpacity onPress={() => {
          this.Remove(index)
        }} style={Styles.IconView}>
          <Entypo name={'circle-with-cross'} color={TextColor} size={25} />
        </TouchableOpacity>
        <View style={Styles.notificationView}>
          <Text style={Styles.notificationText}>{item.notification}</Text>
        </View>
        <View style={Styles.DateView}>
          <Text style={Styles.DateText}>{item.date}</Text>
        </View>
      </View>
    );
  };

  Remove = (i) => {
    let newArr = [...this.state.DATA];
    newArr.splice(this.state.index, 1);
    this.setState({ DATA: newArr });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={Styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={Styles.gradient}>
          <View style={Styles.Header}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack()
              }}>
              <Entypo name={'chevron-thin-left'} color={White} size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Fontisto name={'bell'} color={'white'} size={25} />
            </TouchableOpacity>
          </View>
          <View style={Styles.MainView}>
            <FlatList
              data={this.state.DATA}
              keyExtractor={item => item.id}
              renderItem={item => this.PrintCards(item)}
              contentContainerStyle={Styles.ContainerStyle}
              ItemSeparatorComponent={() => <View style={Styles.Seprator} />}
            />
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
  Header: {
    height: responsiveHeight(13),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(4),
    alignItems: 'center',
  },
  Seprator: {
    marginTop: responsiveHeight(1),
  },
  ContainerStyle: {
    width: '95%',
    alignSelf: 'center',
    paddingVertical: responsiveHeight(2),
  },
  MainCard: {
    width: '95%',
    backgroundColor: White,
    height: responsiveHeight(15),
    alignSelf: 'center',
    elevation: 5,
    borderRadius: 15,
  },
  IconView: {
    height: responsiveHeight(4),
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginHorizontal: responsiveWidth(2),
  },
  notificationView: {
    width: '90%',
    alignSelf: 'center',
    height: responsiveHeight(7),
  },
  notificationText: {
    color: TextColor,
    fontSize: responsiveFontSize(2),
  },
  DateView: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  DateText: {
    color: TextColor,
    fontSize: responsiveFontSize(1.7),
    fontWeight: 'bold'
  },
});
