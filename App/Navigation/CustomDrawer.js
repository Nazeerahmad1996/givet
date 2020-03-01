import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  Text,
  View,
  Image,
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
import { White } from '../Globals/colors';

export default class Login extends Component {
  state = {};

  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={Styles.gradient}>
          <TouchableOpacity style={Styles.LogoView}
            onPress={() => {
              this.props.navigation.navigate('Profile');
            }}>
            <Image
              style={Styles.Logo}
              source={require('../Assets/Images/Logo.png')}
            />
          </TouchableOpacity>
          <View style={Styles.LogoTextView}>
            <Text style={Styles.LogoText}>Givet network user</Text>
          </View>
          <TouchableOpacity style={Styles.HomeView}
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <View style={Styles.ImageView}>
              <Image
                style={Styles.image}
                source={require('../Assets/Images/home.png')}
              />
            </View>
            <View style={Styles.TextView}>
              <Text style={Styles.HomeText}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Announcement') }} style={Styles.HomeView}>
            <View style={Styles.ImageView}>
              <Image
                style={Styles.imageSpeaker}
                source={require('../Assets/Images/announce1.png')}
              />
            </View>
            <View style={Styles.TextView}>
              <Text style={Styles.HomeText}>Announce</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Split') }} style={Styles.HomeView}>
            <View style={Styles.ImageView}>
              <Image
                style={Styles.imageSpeaker}
                source={require('../Assets/Images/tire.png')}
              />
            </View>
            <View style={Styles.TextView}>
              <Text style={Styles.HomeText}>Split</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Business') }} style={Styles.HomeView}>
            <View style={Styles.ImageView}>
              <Image
                style={Styles.image}
                source={require('../Assets/Images/business1.png')}
              />
            </View>
            <View style={Styles.TextView}>
              <Text style={Styles.HomeText}>Business</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('InviteFriend') }} style={Styles.HomeView}>
            <View style={Styles.ImageView}>
              <Image
                style={Styles.imageSpeaker}
                source={require('../Assets/Images/share.png')}
              />
            </View>
            <View style={Styles.TextView}>
              <Text style={Styles.HomeText}>Invite friend</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('TermsAndConditions') }} style={Styles.HomeView}>
            <View style={Styles.ImageView}>
              <Image
                style={Styles.imageSpeaker}
                source={require('../Assets/Images/terms.png')}
              />
            </View>
            <View style={Styles.TextView}>
              <Text style={Styles.HomeText}>Terms and Conditions</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.HomeView}
            onPress={() => {
              this.props.navigation.navigate('SouporteChat');
            }}>
            <View style={Styles.ImageView}>
              <Image
                style={Styles.imageSpeaker}
                source={require('../Assets/Images/chat1.png')}
              />
            </View>
            <View style={Styles.TextView}>
              <Text style={Styles.HomeText}>Souporte Chat</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login') }} style={Styles.HomeView}>
            <View style={Styles.ImageView}>
              <Image
                style={Styles.imageSpeaker}
                source={require('../Assets/Images/logout.png')}
              />
            </View>
            <View style={Styles.TextView}>
              <Text style={Styles.HomeText}>Go out</Text>
            </View>
          </TouchableOpacity>
          <LinearGradient
            colors={['#E61EB6','#ECAA0D']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={Styles.LinearGradientSellButton}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={{color:White,fontSize:17,}}>Buyback: </Text>
              <Text style={{color:White,fontWeight:'700',fontSize:17}}>ACTIVE</Text>
            </View>
          </LinearGradient>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopRightRadius: 15
  },
  gradient: {
    flex: 1,
    borderTopRightRadius: 15
  },
  LinearGradientSellButton: {
    marginTop: responsiveHeight(3),
    width: '60%',
    height: responsiveHeight(6),
    alignSelf: 'center',
    borderRadius: 50,
    marginBottom: responsiveHeight(2),
    justifyContent:'center',
    alignItems:'center'
  },
  LogoView: {
    width: '100%',
    // height: responsiveHeight(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo: {
    width: responsiveWidth(17.2),
    height: responsiveHeight(10),
    resizeMode: 'contain',
    marginTop: 45
  },
  LogoTextView: {
    width: '100%',
    height: responsiveHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogoText: {
    color: White,
    fontSize: responsiveFontSize(2.2),
  },
  HomeView: {
    flexDirection: 'row',
    width: '100%',
    height: responsiveHeight(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageView: {
    width: '40%',
    alignItems: 'center',
  },

  TextView: {
    width: '60%',
  },
  image: {
    width: responsiveWidth(7.8),
    height: responsiveHeight(4.5),
  },
  HomeText: {
    color: White,
    fontSize: responsiveFontSize(2.5),
  },
  imageSpeaker: {
    width: responsiveWidth(9),
    height: responsiveHeight(4.5),
    resizeMode: "contain"
  }
});
