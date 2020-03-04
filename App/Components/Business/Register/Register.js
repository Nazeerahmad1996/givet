import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  Alert
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { TextColor, White, LightBackground } from '../../../Globals/colors';
import { Button } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import Modal from 'react-native-modal';
import { Textarea, Form } from "native-base";
import isEmpty from 'validator/lib/isEmpty';
import Messages from '../../AlertMessages'


export default class Register extends Component {
  state = {
    data: [
      {
        id: 1,
        category: 'teacher', Category: 'Professions'
      },
      { id: 2, category: 'programmer', Cat: 'Professions' },
      { id: 3, category: 'attorney', Cat: 'Professions' },
      { id: 4, category: 'doctor', Cat: 'Professions' },
      { id: 5, category: 'architect', Cat: 'Professions' },
      { id: 6, category: 'accountant', Cat: 'Professions' },
      { id: 13, category: 'other professions', Cat: 'Professions' },
      { id: 7, category: 'Pharmacies', Cat: 'local' },
      { id: 8, category: 'Meals (Restaurant, Polleria,...', Cat: 'local' },
      { id: 9, category: 'Winery', Cat: 'local' },
      { id: 10, category: 'Hardware store', Cat: 'local' },
      { id: 11, category: 'Hairdressing', Cat: 'local' },
      { id: 12, category: 'Car wash', Cat: 'local' },
      { id: 13, category: 'other business', Cat: 'local' },
      // {id: 0.5, Heading: 'Freed balance', subHeading: '3 BTC'},
    ],
    CopyData: [
      {
        id: 1,
        category: 'teacher', Category: 'Professions'
      },
      { id: 2, category: 'programmer', Cat: 'Professions' },
      { id: 3, category: 'attorney', Cat: 'Professions' },
      { id: 4, category: 'doctor', Cat: 'Professions' },
      { id: 5, category: 'architect', Cat: 'Professions' },
      { id: 6, category: 'accountant', Cat: 'Professions' },
      { id: 13, category: 'other business', Cat: 'Professions' },
      { id: 7, category: 'Pharmacies', Cat: 'local' },
      { id: 8, category: 'Meals (Restaurant, Polleria,...', Cat: 'local' },
      { id: 9, category: 'Winery', Cat: 'local' },
      { id: 10, category: 'Hardware store', Cat: 'local' },
      { id: 11, category: 'Hairdressing', Cat: 'local' },
      { id: 12, category: 'Car wash', Cat: 'local' },
      { id: 13, category: 'other professions', Cat: 'local' },
      // {id: 0.5, Heading: 'Freed balance', subHeading: '3 BTC'},
    ],
    name: '',
    openingHours: '',
    category: 'Local',
    category2: '',
    index: '',
    options: ['GVT', 'PEN'],
    location: '',
    isModalCategory: false,
    isModalCategory2: false,
    local: true,
    professional: false,
    Description: '',
    GVTUser: 0,
    GVTSponser: 0,
    amountOfConsumption: 0,
    ModalState: false,
    des: '',
    Mtype: false,
    Msgtitle: '',
  };

  closeModal = () => {
    this.setState({ ModalState: false, des: '', Mtype: false, Msgtitle: '' });
  };

  toggleModalCategory = () => {
    this.setState({ isModalCategory: !this.state.isModalCategory });
  };

  toggleModalCategory2 = () => {
    this.setState({ isModalCategory2: !this.state.isModalCategory2 });
  };


  searchFilterFunction = text => {
    const newData = this.state.data.filter(item => {
      const itemData = `${item.category.toUpperCase()}`;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    if (text === '') {
      this.setState({ data: this.state.CopyData })
    } else {
      this.setState({ data: newData });

    }
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
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  };
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: LightBackground, borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>

        <Messages
          ModalState={this.state.ModalState}
          remove={this.remove}
          closeModal={this.closeModal}
          des={this.state.des}
          Mtype={this.state.Mtype}
          title={this.state.Msgtitle}
        />

        <Modal
          backdropColor="rgba(0,0,0,0.1)"
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
          style={{ overflow: 'scroll' }}
          isVisible={this.state.isModalCategory}>
          <View style={Styles.modalView}>
            <View style={Styles.TopView}>
              <TouchableOpacity
                onPress={this.toggleModalCategory}>
                <AntDesign name={'closecircle'} color={TextColor} size={25} />
              </TouchableOpacity>
            </View>
            <View>
              <View style={Styles.RadioButton}>
                <Text style={{ fontSize: 18, width: 130 }}>local business</Text>
                <TouchableOpacity
                  onPress={() => this.setState({ professional: false, local: true, category: 'Local' })}
                  style={{
                    backgroundColor: this.state.local ? TextColor : null,
                    width: 30,
                    height: 30,
                    borderRadius: 32,
                    marginLeft: 15,
                    borderWidth: 1,
                    borderColor: TextColor
                  }} />
              </View>

              <View style={Styles.RadioButton}>
                <Text style={{ fontSize: 18, width: 130 }}>Professions</Text>
                <TouchableOpacity
                  onPress={() => this.setState({ professional: true, local: false, category: 'Professions' })}
                  style={{
                    backgroundColor: this.state.professional ? TextColor : null,
                    width: 30,
                    height: 30,
                    borderRadius: 32,
                    marginLeft: 15,
                    borderWidth: 1,
                    borderColor: TextColor
                  }} />
              </View>


            </View>
          </View>
        </Modal>


        <Modal
          backdropColor="rgba(0,0,0,0.1)"
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
          style={{ overflow: 'scroll' }}
          isVisible={this.state.isModalCategory2}>
          <ScrollView style={[Styles.modalView, { width: '95%' }]}>
            <View style={Styles.TopView}>
              <TouchableOpacity
                onPress={this.toggleModalCategory2}>
                <AntDesign name={'closecircle'} color={TextColor} size={25} />
              </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: '#f6f7f9', padding: 2, borderColor: '#DDDDDD', borderWidth: 0.8, margin: 10, borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TextInput
                style={{ flex: 1 }}
                placeholder="Search"
                onChangeText={text => this.searchFilterFunction(text)}
              />
              <Ionicons name="md-search" color="#6795F9" size={25} style={{ marginRight: 10 }} />
            </View>
            <FlatList
              data={this.state.data}
              keyExtractor={item => item.id}
              renderItem={({ item }) =>

                <View>
                  {this.state.local ? (
                    <View>
                      {(item.Cat === 'local' || item.Cat === 'other') && (
                        <View style={{ marginTop: 5, borderBottomWidth: 0.7, borderBottomColor: 'grey', paddingHorizontal: 10 }}>


                          <View style={Styles.RadioButton}>
                            <Text style={{ fontSize: 18, flex: 1 }}>{item.category}</Text>
                            <TouchableOpacity
                              onPress={() => this.setState({ category2: item.category })}
                              style={{
                                backgroundColor: this.state.category2 === item.category ? TextColor : null,
                                width: 30,
                                height: 30,
                                borderRadius: 32,
                                marginLeft: 15,
                                borderWidth: 1,
                                borderColor: TextColor
                              }} />
                          </View>

                        </View>
                      )}

                    </View>
                  ) : (
                      <View>
                        {(item.Cat === 'Professions' || item.Cat === 'other') ? (
                          <View style={{ marginTop: 5, borderBottomWidth: 0.7, borderBottomColor: 'grey', paddingHorizontal: 10 }}>


                            <View style={Styles.RadioButton}>
                              <Text style={{ fontSize: 18, flex: 1 }}>{item.category}</Text>
                              <TouchableOpacity
                                onPress={() => this.setState({ category2: item.category })}
                                style={{
                                  backgroundColor: this.state.category2 === item.category ? TextColor : null,
                                  width: 30,
                                  height: 30,
                                  borderRadius: 32,
                                  marginLeft: 15,
                                  borderWidth: 1,
                                  borderColor: TextColor
                                }} />
                            </View>

                          </View>
                        ) : null}

                      </View>
                    )}

                </View>
              }
            />
          </ScrollView>
        </Modal>

        <View style={Styles.TopBarView}>
          <Text style={Styles.Text}>select type of business:</Text>
          <View style={Styles.DropDownView}>
            <TextInput
              editable={false}
              style={Styles.DropDown}
              onChangeText={text => {
                this.setState({ category: text });
              }}
              value={this.state.category}
            />

            <TouchableOpacity onPress={this.toggleModalCategory}>
              <Entypo
                name={'chevron-thin-down'}
                size={15}
                color={TextColor}
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={Styles.TopBarView}>
          <Text style={Styles.Text}>Business Name:</Text>
          <TextInput
            style={Styles.inputName}
            onChangeText={text => {
              this.setState({ name: text });
            }}
            value={this.state.name}
          // placeholder={'Name'}
          />
        </View>
        <View style={Styles.TopBarView}>
          <Text style={Styles.Text}>Select Category:</Text>
          <View style={Styles.DropDownView}>
            <TextInput
              editable={false}
              style={Styles.DropDown}
              onChangeText={text => {
                this.setState({ category2: text });
              }}
              value={this.state.category2}
            />

            <TouchableOpacity onPress={this.toggleModalCategory2}>
              <Entypo
                name={'chevron-thin-down'}
                size={15}
                color={TextColor}
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={Styles.TopBarView}>
          <Text style={Styles.Text}>Cost per hours:</Text>
          <TextInput
            style={Styles.inputName}
            onChangeText={text => {
              this.setState({ openingHours: text });
            }}
            value={this.state.openingHours}
          />
        </View>
        <View style={[Styles.TopBarViewTextarea]}>
          <Text style={Styles.Text}>Description (maximum 100 words):</Text>
          <Form>
            <Textarea rowSpan={5} bordered
              onChangeText={text => {
                this.setState({ Description: text });
              }}
              value={this.state.Description} />
          </Form>

        </View>

        <View>
          <Button
            onPress={() => {
              this.imgpicker();
            }}
            style={Styles.SellButton2}
            contentStyle={{ height: responsiveHeight(6) }}
            labelStyle={{ color: White }}>
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
            onChangeText={text => {
              this.setState({ GVTUser: text });
            }}
            value={this.state.GVTUser}
          />
          <TextInput
            style={Styles.TextInput1}
            placeholder={'GVT'}
            placeholderTextColor={'gray'}
            keyboardType={'numeric'}
            onChangeText={text => {
              console.log(this.state.GVTSponser)
              this.setState({ GVTSponser: text });
            }}
            value={this.state.GVTSponser}
          />
          <TextInput
            style={Styles.TextInput1}
            placeholder={'USD'}
            placeholderTextColor={'gray'}
            keyboardType={'numeric'}
            onChangeText={text => {
              this.setState({ amountOfConsumption: text });
            }}
            value={this.state.amountOfConsumption}
          />
        </View>
        <View style={Styles.SelectOptionView}>
          <Text style={Styles.textdes}>for the user</Text>
          <Text style={Styles.textdes}>for the sponsor</Text>
          <Text style={Styles.textdes}>amount of consumption</Text>
        </View>

        <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={Styles.LinearGradientSellButton}>
          <Button
            onPress={() => {

              // console.log(isEmpty(this.state.name) + isEmpty(this.state.category2) + isEmpty(this.state.openingHours) + isNumeric(this.state.GVTUser) + isNumeric(this.state.GVTSponser) + isEmpty(this.state.Description) + isNumeric(this.state.amountOfConsumption))

              if (isEmpty(this.state.name) || isEmpty(this.state.category2) || isEmpty(this.state.openingHours) || isEmpty(this.state.Description) || this.state.GVTSponser === 0 || this.state.GVTUser === 0 || this.state.amountOfConsumption === 0) {
                // Alert.alert(
                //   'BUSINESS',
                //   'You need to fill a field, please make sure everything is well done.',
                //   [
                //     {
                //       text: 'Ok',
                //       onPress: () => console.log('Cancel Pressed'),
                //       style: 'cancel',
                //     },
                //   ]
                // );
                this.setState({ ModalState: 'fancy', Mtype: false, des: 'You need to fill a field, please make sure everything is well done.', Msgtitle: 'BUSINESS' });

              } else {
                // Alert.alert(
                //   'BUSINESS',
                //   'Your business verification was sent successfully, please wait for it to be verified.',
                //   [
                //     {
                //       text: 'Ok',
                //       onPress: () => console.log('Cancel Pressed'),
                //       style: 'cancel',
                //     },
                //   ]
                // );
                this.setState({ ModalState: 'fancy', Mtype: true, des: 'Your business verification was sent successfully, please wait for it to be verified.', Msgtitle: 'BUSINESS',name:'',openingHours:'',category2:'',GVTSponser:0,GVTUser:0,amountOfConsumption:0,Description:'' });

                // this.props.navigation.navigate('Home');
              }
            }
            }
            style={Styles.SellButton}
            contentStyle={{ height: responsiveHeight(6) }}
            labelStyle={{ color: White, fontWeight: 'bold' }}>
            Send Verfication
          </Button>
        </LinearGradient>
      </ScrollView>
    );
  }
}
const Styles = StyleSheet.create({
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
  TopBarViewTextarea: {
    marginTop: responsiveHeight(2.5),
    width: '80%',
    marginLeft: 20,
    // alignSelf: 'center',
    // height: responsiveHeight(8),
    justifyContent: 'center',
  },
  modalView: {
    width: responsiveWidth(75),
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingVertical: 5
  },
  RadioButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  TopView: {
    alignSelf: 'flex-end',
    marginRight: responsiveWidth(2),
    marginTop: responsiveHeight(1),
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
    width: '90%',
    height: responsiveHeight(5),
    borderRadius: 8,
    borderWidth: 0.6,
    backgroundColor: LightBackground,
    padding: '2%',
    borderColor: 'grey',
  },
  DropDown: {
    flex: 1
  },
  DropDownView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: responsiveHeight(1),
    width: '90%',
    height: responsiveHeight(6.2),
    borderRadius: 8,
    borderWidth: 0.6,
    backgroundColor: LightBackground,
    // padding: '2%',
    borderColor: 'grey',
  },
  DropDownView2: {
    top: responsiveHeight(0.5),
    width: responsiveWidth(10),
    height: responsiveHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: White,
    borderRadius: 8,
  },
  TextInput1: {
    width: '20%',
    borderColor: 'grey',
    borderBottomWidth: 2,
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
