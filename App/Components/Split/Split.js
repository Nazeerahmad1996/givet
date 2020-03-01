import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

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
import PieChart from '../Split/PieChart';

export default class Login extends Component {
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
            <Text style={Styles.HeaderText}>Split</Text>
          </View>
          <TouchableOpacity
            style={Styles.menu}
            onPress={() => this.props.navigation.openDrawer()}>
            <Feather name={'menu'} color={'white'} size={25} />
          </TouchableOpacity>
          <View style={Styles.MainView}>
            <ScrollView>

              <Text style={Styles.TopText}>21,000,000,000,00 GVT</Text>
              <View style={Styles.ChartView}>
                <PieChart />
              </View>
              <View style={Styles.footer}>
                <View style={Styles.Left}>
                  <View style={Styles.LeftColorView} />
                  <Text style={Styles.thinText}>your</Text>
                  <Text style={Styles.ThickText}>Split</Text>
                </View>
                <View style={Styles.Right}>
                  <View style={Styles.RightColorView} />
                  <Text style={Styles.thinText}>network</Text>
                  <Text style={Styles.ThickText}>Split</Text>
                </View>
              </View>


              <View style={Styles.footer2}>
                <View style={Styles.Left2}>
                  <Text style={Styles.thinText}>My Buy: </Text>
                  <Text style={Styles.ThickText}>12</Text>
                </View>
                <View style={Styles.Right2}>
                  <Text style={Styles.thinText}>My Sell: </Text>
                  <Text style={Styles.ThickText}>19</Text>
                </View>
              </View>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('Compensation')} style={Styles.ComBtn}>
                <Text style={Styles.Combtntxt}>➔ Read Compensation Plan</Text>
                {/* <Image
                style={Styles.rightArrow}
                source={require('../../Assets/Images/arrowright.png')}
              /> */}
              </TouchableOpacity>
            </ScrollView>
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
  TopText: {
    textAlign: 'center',
    marginTop: responsiveHeight(3),
    fontSize: responsiveFontSize(2.4),
    // fontWeight: 'bold',
    color: TextColor,
  },
  ChartView: {
    marginTop: responsiveHeight(5)
  },
  footer: {
    marginTop: responsiveHeight(10),
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  footer2: {
    marginTop: responsiveHeight(4),
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    // justifyContent: 'center',
  },
  Left: {
    flexDirection: 'row',
  },
  Right: {
    flexDirection: 'row',
  },
  Left2: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  Right2: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  LeftColorView: {
    width: responsiveWidth(7),
    top: responsiveHeight(0.5),
    height: responsiveHeight(2.5),
    backgroundColor: '#ECAA0D',
  },
  RightColorView: {
    width: responsiveWidth(7),
    top: responsiveHeight(0.5),
    height: responsiveHeight(2.5),
    backgroundColor: '#E61EB6',
  },
  thinText: {
    marginLeft: responsiveWidth(2),
    fontSize: responsiveFontSize(2.5),
    color: TextColor,
  },
  ThickText: {
    marginLeft: responsiveWidth(1),
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.5),
    color: TextColor,
  },
  ComBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: responsiveHeight(4),
  },
  Combtntxt: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold'
  },
  rightArrow: {
    height: responsiveHeight(5),
    width: responsiveWidth(6),
    resizeMode: 'contain',
    top: 2
  },
});
