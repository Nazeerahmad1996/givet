import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';

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
import { TextColor, LightBackground } from '../../../Globals/colors';

export default class Login extends Component {
  state = {
    headerName: 'BUSINESS',
    item: this.props.navigation.state.params.item
  };
  componentDidMount() {
    this.props.navigation.addListener('willFocus', () => {
      this.setState({
        item: this.props.navigation.state.params.item,
      });
    });
  }

  render() {
    let { item } = this.state
    console.log(this.state.item)
    return (
      <SafeAreaView style={Styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={Styles.gradient}>
          <View style={Styles.Header}>
            {/* <Text style={Styles.HeaderText}>BUSINESS</Text> */}
          </View>
          {/* <TouchableOpacity
            style={Styles.menu}
            onPress={() => this.props.navigation.navigate('Business')}>
            <Entypo name={'chevron-thin-left'} color={White} size={25} />
          </TouchableOpacity> */}
          <View style={Styles.MainView}>
            <View style={Styles.imageView}>
              <TouchableOpacity
                style={{ flexDirection: 'row-reverse',marginBottom:5 }}
                onPress={() => {
                  this.props.navigation.navigate('Business')
                }}>
                <Entypo name={'circle-with-cross'} color={TextColor} size={25} />
              </TouchableOpacity>
              <Image
                style={Styles.image}
                source={item.image}
              />
            </View>
            <View style={Styles.TextView}>
              <View style={Styles.flexView}>
                {/* <Text style={Styles.TextTitle}>{'Name Business'}</Text> */}
                <Text style={Styles.TextTitle}>{item.title}</Text>
              </View>
              <View style={Styles.flexView}>
                {/* <Text style={Styles.TextTitle}>{'Category'}</Text> */}
                <Text style={Styles.TextSubTitle}>{item.Subtitle}</Text>
              </View>
              <View style={Styles.flexView}>
                {/* <Text style={Styles.TextTitle}>{'Time of Attention'}</Text> */}
                <Text style={Styles.TextSubTitle}>{item.time}</Text>
              </View>

              <View style={Styles.flexView}>
                {/* <Text style={Styles.TextTitle}>{'Location'}</Text> */}
                <Text style={Styles.TextSubTitle}>{item.details}</Text>
              </View>

              <View style={Styles.flexRow} >
                <View>
                  <Image
                    style={{
                      width: responsiveWidth(10),
                      height: responsiveHeight(5),
                    }}
                    source={require('../../../Assets/Images/gvt.png')}
                  />
                </View>
                <View>
                  <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={Styles.Textprice}>
                      {item.price}
                    </Text>
                  </View>
                  <View style={Styles.coinText}>
                    <Text style={Styles.Textprice}>
                      {item.price2}
                    </Text>
                  </View>
                </View>
              </View>


            </View>
            <View style={Styles.IconsView}>
              <View style={Styles.flex}>
                <LinearGradient
                  colors={['#ECAA0D', '#E61EB6']}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                  style={Styles.iconsGradient}>
                  <Image style={Styles.imageStyle} source={require('../../../Assets/Images/right.png')} />
                </LinearGradient>
                <Text style={Styles.iconText}>Map</Text>
              </View>
              <View style={Styles.flex}>
                <LinearGradient
                  colors={['#ECAA0D', '#E61EB6']}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                  style={Styles.iconsGradient}>
                  <Image style={{ resizeMode: 'contain', width: responsiveWidth(12), height: responsiveHeight(6.5) }} source={require('../../../Assets/Images/call1.png')} />
                </LinearGradient>
                <Text style={Styles.iconText}>Call</Text>
              </View>
              <View style={Styles.flex}>
                <LinearGradient
                  colors={['#ECAA0D', '#E61EB6']}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 1, y: 1 }}
                  style={Styles.iconsGradient}>
                  <Image style={{ resizeMode: 'contain', width: responsiveWidth(12), height: responsiveHeight(6.5) }} source={require('../../../Assets/Images/share.png')} />
                </LinearGradient>
                <Text style={Styles.iconText}>Share</Text>
              </View>
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
    width: '95%',
    alignSelf: 'center',
    backgroundColor: LightBackground,
    borderRadius: 25,
    elevation: 5,
  },
  Header: {
    width: '100%',
    height: responsiveHeight(13),
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderText: {
    color: LightBackground,
    fontSize: responsiveFontSize(2.8),
    fontWeight: 'bold',
  },
  menu: {
    marginLeft: '4%',
    position: 'absolute',
    top: responsiveHeight(4.75),
  },
  imageView: {
    width: '95%',
    alignSelf: 'center',
    marginVertical: responsiveHeight(3),
    height: responsiveHeight(30),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  TextTitle: {
    color: TextColor,
    fontSize: responsiveFontSize(2.2),
    marginLeft: responsiveWidth(2),
  },
  TextSubTitle: {
    color: 'grey',
    fontSize: responsiveFontSize(1.9),
    marginLeft: responsiveWidth(2),
  },
  Textprice: {
    color: TextColor,
    fontSize: responsiveFontSize(1.8),
  },
  TextView: {
    marginTop: responsiveHeight(2),
    height: responsiveHeight(20),
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  coinText: {
    flexDirection: 'row',
  },
  IconsView: {
    width: '70%',
    alignSelf: 'center',
    height: responsiveHeight(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconsGradient: {
    width: responsiveHeight(10),
    height: responsiveHeight(10),
    borderRadius: responsiveHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: TextColor,
    fontSize: responsiveFontSize(2.3),
  },
  flex: {
    alignItems: 'center',
  },
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    width: responsiveWidth(11),
    height: responsiveHeight(11),
    resizeMode: 'contain'
  },
  flexRow: {
    marginTop: responsiveHeight(2),
    flexDirection: 'row',
    alignItems: 'center'
  }
});
