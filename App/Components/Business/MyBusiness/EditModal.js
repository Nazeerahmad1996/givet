import React, {Component} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TextInput,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {TextColor, White, LightBackground} from '../../../Globals/colors';
import {Button} from 'react-native-paper';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import ModalDropdown from 'react-native-modal-dropdown';
import ImagePicker from 'react-native-image-picker';

export default class EditModal extends Component {
  state = {
    name: '',
    openingHours: '',
    category: '',
    index: '',
    options: ['GVT', 'PEN'],
    location: '',
  };
  componentDidMount=()=> {
    console.log('this is props', this.props);
    this.props.navigation.addListener('willFocus', () => {
      this.setProps();
    });
  }
  setProps = async() => {
   await this.setState({
      name: this.props.item.title,
      openingHours: this.props.item.time,
      category: this.props.item.Subtitle,
      location: this.props.item.details,
    });
  };
  imgpicker = () => {
    const options = {
      title: 'Select Image',

      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  };
  renderModalContent = () => (
    <View style={Styles.modalView}>
      <View style={Styles.crossView}>
        <TouchableOpacity
          onPress={() => {
            this.props.closeEditModal();
          }}>
          <Entypo name={'circle-with-cross'} color={TextColor} size={25} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={Styles.TopBarView}>
          <Text style={Styles.Text}>Business Name:</Text>
          <TextInput
            style={Styles.inputName}
            onChangeText={text => {
              this.setState({name: text});
            }}
            value={ this.state.name}
            placeholder={'Name'}
          />
        </View>
        <View style={Styles.TopBarView}>
          <Text style={Styles.Text}>Select Category:</Text>
          <View style={Styles.DropDownView}>
            <TextInput
              style={Styles.inputName}
              onChangeText={text => {
                this.setState({category: text});
              }}
              value={this.state.category}
              placeholder={'Select Category'}
            />
            <View style={Styles.DropDownView2}>
              <ModalDropdown options={['option 1', 'option 2']}>
                <Entypo
                  name={'chevron-thin-down'}
                  size={15}
                  color={TextColor}
                />
              </ModalDropdown>
            </View>
          </View>
        </View>
        <View style={Styles.TopBarView}>
          <Text style={Styles.Text}>Say the opening hours:</Text>
          <TextInput
            style={Styles.inputName}
            onChangeText={text => {
              this.setState({name: text});
            }}
            value={this.state.openingHours}
          />
        </View>
        <View style={Styles.TopBarView}>
          <Text style={Styles.Text}>Location:</Text>
          <TextInput
            style={Styles.inputName}
            onChangeText={text => {
              this.setState({location: text});
            }}
            value={this.state.location}
            placeholder={'Name'}
          />
        </View>

        <View>
          <Button
            onPress={() => {
              this.imgpicker();
            }}
            style={Styles.SellButton2}
            contentStyle={{height: responsiveHeight(6)}}
            labelStyle={{color: White}}>
            <Text style={Styles.buttonTxt}>Upload Photo business</Text>
          </Button>
        </View>
        <View style={Styles.TopBarView2}>
          <Text style={Styles.Text}>
            Say how many GVT will you pay per X amount of consumption and also
            your sponsor (enter only whole number):
          </Text>
        </View>
        <View style={Styles.SelectOptionView}>
          <TextInput
            style={Styles.TextInput1}
            placeholder={'GVT'}
            placeholderTextColor={'gray'}
            keyboardType={'numeric'}
          />
          <TextInput
            style={Styles.TextInput1}
            placeholder={'GVT'}
            placeholderTextColor={'gray'}
            keyboardType={'numeric'}
          />
          <TextInput
            style={Styles.TextInput1}
            placeholder={'USD'}
            placeholderTextColor={'gray'}
            keyboardType={'numeric'}
          />
        </View>
        <View style={Styles.SelectOptionView}>
          <Text style={Styles.textdes}>for the user</Text>
          <Text style={Styles.textdes}>for the sponsor</Text>
          <Text style={Styles.textdes}>amount of consumption</Text>
        </View>

        <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={Styles.LinearGradientSellButton}>
          <Button
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}
            style={Styles.SellButton}
            contentStyle={{height: responsiveHeight(6)}}
            labelStyle={{color: White, fontWeight: 'bold'}}>
            Send Verfication
          </Button>
        </LinearGradient>
      </ScrollView>
    </View>
  );

  render() {
    return (
      <SafeAreaView>
        <StatusBar translucent backgroundColor="transparent" />
        <Modal
          isVisible={this.props.EditModalState === 'fancy'}
          backdropColor="rgba(0,0,0,0.1)"
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
          style={{overflow: 'scroll'}}>
          {this.renderModalContent()}
        </Modal>
      </SafeAreaView>
    );
  }
}
const Styles = StyleSheet.create({
  modalView: {
    width: responsiveWidth(95),
    borderRadius: 30,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  crossView: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: responsiveHeight(7),
  },

  container: {
    flex: 1,
  },
  TopBarView: {
    marginTop: responsiveHeight(2.5),
    width: '90%',
    alignSelf: 'center',
    height: responsiveHeight(8),
    justifyContent: 'center',
  },
  TopBarView2: {
    marginTop: responsiveHeight(1),
    width: '90%',
    alignSelf: 'center',
    height: responsiveHeight(6),
    justifyContent: 'center',
  },
  Text: {
    color: TextColor,
    fontSize: responsiveFontSize(1.7),
  },
  inputName: {
    marginTop: responsiveHeight(1),
    width: '80%',
    height: responsiveHeight(5),
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: LightBackground,
    padding: '2%',
    borderColor: White,
  },
  DropDownView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  DropDownView2: {
    top: responsiveHeight(0.5),
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: White,
    borderRadius: 8,
  },
  TextInput1: {
    width: '20%',
    borderColor: White,
    borderWidth: 2,
    textAlign: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SelectOptionView: {
    marginTop: responsiveHeight(2),
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textdes: {
    fontSize: responsiveFontSize(1.2),
    color: 'black',
    width: '25%',
    textAlign: 'center',
  },
  grey: {
    color: 'gray',
  },

  SellButton2: {
    borderRadius: 15,
    backgroundColor: TextColor,
    alignSelf: 'flex-end',
    marginRight: responsiveWidth(10),
    marginTop: responsiveHeight(2),
  },
  LinearGradientSellButton: {
    marginTop: responsiveHeight(3),
    width: '60%',
    height: responsiveHeight(6),
    alignSelf: 'center',
    borderRadius: 50,
    marginBottom: responsiveHeight(5),
  },
  buttonTxt: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: 'bold',
    color: White,
  },
});
