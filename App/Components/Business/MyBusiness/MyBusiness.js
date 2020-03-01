import React, {Component} from 'react';

import {
  Text,
  View,
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
import {TextColor, White, LightBackground} from '../../../Globals/colors';
import ConfirmationModal from './ConfirmationModal';
import EditModal from './EditModal';

export default class Register extends Component {
  state = {
    Data: [
      {
        id: 0,
        title: 'fruti flavour',
        Subtitle: 'Cellar',
        time: '07:30hrs-19:30hrs',
        details: 'Av: preshol rd',
        price: '4.00 GVT For  each $20.00',
        price2: '2:00 GVT for the sponsor',
        image: require('../../../Assets/Images/gym.jpg'),
      },
      {
        id: 1,
        title: 'Good Taste',
        Subtitle: 'restaurant',
        time: '07:30hrs-19:30hrs',
        details: 'Av: preshol rd',
        price: '4.00 GVT For  each $20.00',
        price2: '2:00 GVT for the sponsor',
        image: require('../../../Assets/Images/gym2.jpg'),
      },
    ],
    ModalState: false,
    EditModalState: false,
    index: '',
    item:{}
  };
  closeEditModal = () => {
    this.setState({EditModalState: false});
  };
  remove = () => {
    let newArr = [...this.state.Data];
    newArr.splice(this.state.index, 1);
    this.setState({Data: newArr});
  };
  closeModal = () => {
    this.setState({ModalState: false});
  };
  PrintCards = post => {
    const item = post.item;
    const index = post.index;
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('Details', {item: item});
        }}
        style={Styles.SuperView}>
        <View style={Styles.NestedView}>
          <View style={Styles.LeftView}>
            <Image style={Styles.image} source={item.image} />
          </View>
          <View style={Styles.RightView}>
            <View style={Styles.TitleView}>
              <Text style={Styles.TextTitle}>{item.title}</Text>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  marginLeft: responsiveWidth(43),
                  borderRadius:40,
                  width:32,
                  height:32,
                 borderWidth:2,
                 borderColor:TextColor,
                 justifyContent: 'center',
                 alignItems:'center',
                 top:responsiveHeight(1)
  
                }}
                onPress={() => {
                  this.setState({ModalState: 'fancy', index: index});
                }}>
                <Image
                  style={Styles.imageSpeaker}
                  source={require('../../../Assets/Images/trash.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  marginLeft: responsiveWidth(43),
                  marginTop: responsiveHeight(7),
                  borderRadius:40,
                   width:32,
                   height:32,
                  borderWidth:2,
                  borderColor:TextColor,
                  justifyContent: 'center',
                  alignItems:'center',
                  
                }}
                onPress={() => {
                  this.setState({EditModalState: 'fancy',item:item},()=>{
                    console.log('thi is item ', this.state.item)
                  });
                }}>
                <Image
                  style={[Styles.imageSpeaker,{marginTop:responsiveHeight(0.5)}]}
                  source={require('../../../Assets/Images/pencil.png')}
                />
              </TouchableOpacity>
            </View>

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
                <Text style={[Styles.Textprice]}>{item.price2}</Text>
              </View>
            </View>
          </View>
        </View>
        <ConfirmationModal
          ModalState={this.state.ModalState}
          remove={this.props.remove}
          closeModal={this.closeModal}
        />
        <EditModal
          EditModalState={this.state.EditModalState}
          closeEditModal={this.closeEditModal}
          item ={this.state.item}
          {...this.props}
        />
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={{flex:1, backgroundColor: LightBackground,borderTopLeftRadius:25,borderTopRightRadius:25}}>
        {/* <View style={Styles.TopBarView}>
          <Searchbar
            placeholder="Search by Category"
            style={Styles.Searchbar}
            inputStyle={Styles.SearchbarInputStyle}
          />
        </View> */}
        <FlatList
          data={this.props.MyBusinesData}
          keyExtractor={item => item.id}
          renderItem={item => this.PrintCards(item)}
          contentContainerStyle={Styles.ContainerStyle}
          ItemSeparatorComponent={() => <View style={Styles.Seprator} />}
        />
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
  imageStyle: {
    width: responsiveWidth(7),
    height: responsiveHeight(8),
    resizeMode: 'contain',
  },
  Searchbar: {
    borderRadius: 15,
    backgroundColor: LightBackground,
    borderColor: White,
    height: responsiveHeight(6),
    width: '75%',
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
    paddingVertical: responsiveHeight(2),
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
    marginVertical: responsiveHeight(1),
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
  TextSubTitle: {
    color: 'gray',
    fontSize: responsiveFontSize(1.8),
  },
  Textprice: {
    marginLeft: responsiveWidth(2),
    color: TextColor,
    fontSize: responsiveFontSize(1.6),
  },
  TitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coinText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageView: {
    width: '40%',
    alignItems: 'center',
    left: responsiveWidth(4),
  },
  imageSpeaker: {
    width: responsiveWidth(4),
    height: responsiveHeight(2),
    resizeMode: 'contain',
  },
});
