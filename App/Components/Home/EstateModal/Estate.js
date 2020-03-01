import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

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
import {TextColor, White} from '../../../Globals/colors';
import Modal from 'react-native-modal';

import ConfirmationModal from './Modal';

export default class Wallet extends Component {
  state = {
    tickets: [],
    ModalState:false,
    index:''
  };
  PrintCards = post => {
    const item = post.item;
    const index = post.index;
    return (
      <View>
        {item.type === 'SELL' ? (
          <View style={Styles.SuperView}>
            <LinearGradient
              colors={['#ECAA0D', '#E61EB6']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={Styles.LinearGradientView}>
              <View style={Styles.IDView}>
                <Text style={Styles.idNameTextGradient}>ID Transaction</Text>
                <Text style={Styles.idNoTextGradient}>{item.id}</Text>
              </View>
              <View style={Styles.kindView}>
                <Text style={Styles.kindTextLinear}>User :</Text>
                <Text style={Styles.kindTextLinear}> {item.hUser}</Text>
              </View>
              <View style={Styles.kindView}>
                <Text style={Styles.kindTextLinear}>Kind :</Text>
                <Text style={Styles.kindTextLinear}> {item.type}</Text>
              </View>
              <View style={Styles.kindView}>
                <Text style={Styles.kindTextLinear}>Amount :</Text>
                <Text style={Styles.kindTextLinear}> {item.amount}</Text>
              </View>
              <View style={Styles.kindView}>
                <Text style={Styles.kindTextLinear}>Rest :</Text>
                <Text style={Styles.kindTextLinear}> {item.balance}</Text>
              </View>
              <View style={Styles.kindView}>
                <Text style={Styles.kindTextLinear}>Date :</Text>
                <Text style={Styles.kindTextLinear}> {item.createdAt}</Text>
              </View>
              <View style={Styles.EstateView}>
                <Text style={Styles.idNameTextGradient}>Estate{' : '}</Text>
                <Text style={Styles.EstateTextGradient}>{item.status}</Text>
              </View>
            </LinearGradient>
            {item.status === 'Pending' ? (
              <TouchableOpacity
                onPress={() => {
                  this.setState({ModalState: 'fancy', index: index});
                }}
                style={Styles.TrashView}>
                <EvilIcon
                  name={'trash'}
                  color={TextColor}
                  size={responsiveFontSize(7)}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        ) : (
          <View style={Styles.SuperView}>
            <View style={Styles.MainCardView}>
              <View style={Styles.IDView}>
                <Text style={Styles.idNameText}>ID Transaction</Text>
                <Text style={Styles.idNoText}>{item.id}</Text>
              </View>
              <View style={Styles.kindView}>
                <Text style={Styles.kindText}>User :</Text>
                <Text style={Styles.kindText}> {item.hUser}</Text>
              </View>
              <View style={Styles.kindView}>
                <Text style={Styles.kindText}>Kind :</Text>
                <Text style={Styles.kindText}> {item.type}</Text>
              </View>
              <View style={Styles.kindView}>
                <Text style={Styles.kindText}>Amount :</Text>
                <Text style={Styles.kindText}> {item.amount}</Text>
              </View>
              <View style={Styles.kindView}>
                <Text style={Styles.kindText}>Rest :</Text>
                <Text style={Styles.kindText}> {item.balance}</Text>
              </View>
              <View style={Styles.kindView}>
                <Text style={Styles.kindText}>Date :</Text>
                <Text style={Styles.kindText}> {item.createdAt}</Text>
              </View>
              <View style={Styles.EstateView}>
                <Text style={Styles.idNameText}>Estate{' : '}</Text>
                <Text style={Styles.EstateTextGradient}>{item.status}</Text>
              </View>
            </View>
            {item.status === 'Pending' ? (
              <TouchableOpacity
                onPress={() => {
                  this.setState({ModalState: 'fancy', index: index});
                }}
                style={Styles.TrashView}>
                <EvilIcon
                  name={'trash'}
                  color={TextColor}
                  size={responsiveFontSize(7)}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        )}
      </View>
    );
  };


  remove = () => {
    let newArr = [...this.state.tickets];
    newArr.splice(this.state.index, 1);
    this.setState({tickets: newArr});
  };
  closeModal = () => {
    this.setState({ModalState: false});
  };
  renderModalContent = () => (
    <View style={Styles.modalView}>
      <View style={Styles.TopView}>
        <TouchableOpacity
          onPress={() => {
            this.props.closeEstateModal();
          }}
          style={Styles.TopView}>
          <AntDesign name={'closecircle'} color={TextColor} size={25} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={this.state.tickets}
        keyExtractor={item => item.id}
        renderItem={item => this.PrintCards(item)}
        contentContainerStyle={Styles.ContainerStyle}
        ItemSeparatorComponent={() => <View style={Styles.Seprator} />}
      />
    </View>
  );

  render() {
    return (
      <SafeAreaView>
        <StatusBar translucent backgroundColor="transparent" />
        <Modal
          isVisible={this.props.EstateModal === 'fancy'}
          // onShow={async () => {
          //     let user = await psm.getUser();
          //     let accessToken = await psm.getAccessToken();
          //     let response = await getAllTickets(user.id, accessToken);
          //     this.setState({
          //         tickets: response.data.data
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
        <ConfirmationModal
          ModalState={this.state.ModalState}
          remove={this.remove}
          closeModal={this.closeModal}
        />
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
    width: '80%',
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

  kindView: {
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
  },
  kindText: {
    fontSize: responsiveFontSize(2),
    color: TextColor,
  },

  SuperView: {
    flexDirection: 'row',


    alignSelf: 'center',
    alignItems: 'center',

  },
  LinearGradientView: {
    width: '80%',
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 15,
  },
  TrashView: {
    position:'absolute',
    zIndex:1,
    alignSelf:'center',
    left:responsiveWidth(70)

  },
  IDView: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: responsiveHeight(5),
    alignItems: 'center',
  },
  EstateView: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: responsiveHeight(5),
    alignItems: 'center',
  },
  idNameTextGradient: {
    fontSize: responsiveFontSize(2.2),
    color: White,
  },
  idNameText: {
    fontSize: responsiveFontSize(2.2),
    color: TextColor,
  },
  idNoText: {
    fontSize: responsiveFontSize(2.2),
    color: TextColor,
    fontWeight: 'bold',
  },
  idNoTextGradient: {
    fontSize: responsiveFontSize(2.2),
    color: White,
    fontWeight: 'bold',
  },
  EstateTextGradient: {
    fontSize: responsiveFontSize(2.2),
    color: TextColor,
    fontWeight: 'bold',
  },

  kindTextLinear: {
    fontSize: responsiveFontSize(2),
    color: White,
  },
});
