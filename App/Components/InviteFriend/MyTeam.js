import React, {Component} from 'react';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {TextColor, White, LightBackground} from '../../Globals/colors';
import psm from "../../Globals/PersistentStorageManager";
import {getMyTeams} from "../../Services/services";

export default class Login extends Component {
  state = {
    DATA: [
      {id: 1, name: 'Alferado Zevalous', icon: 'user-follow'},
      {
        id: 2,
        name: 'MariLous Campus',
        icon: 'user-follow',
        ParentNestedList: true,
        NestedList: true,
        ParentNestedListname:'Gamela Gabilo'
      },
      {id: 3, name: 'Princess Diana', icon: 'user-follow'},
    ],
    inputName: '',
    ParentNestedList: false,
  };

  async componentDidMount() {
    let user = await psm.getUser();
    let accessToken = await psm.getAccessToken();
    let response = await getMyTeams(user.id, accessToken);
    this.setState({
      DATA: response
    });
  }
  render() {
    return (
      <View>
        <View style={Styles.inputView}>
          <TextInput
            style={Styles.inputName}
            onChangeText={text => {
              this.setState({inputName: text});
            }}
            value={this.state.inputName}
            placeholder={'Search'}
          />
        </View>
        <View style={Styles.ContactListView}>
          {this.state.DATA.map((item, index) =>
            item.ParentNestedList ? (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      ParentNestedList: !this.state.ParentNestedList,
                    });
                  }}
                  style={Styles.Touch}>
                  <SimpleLineIcon
                    name={'user-follow'}
                    color={TextColor}
                    size={40}
                  />
                  <Text style={Styles.ContactNameText}> {item.fullName} </Text>
                </TouchableOpacity>
                {this.state.ParentNestedList ? (
                <TouchableOpacity
                onPress={() => {
                  this.setState({
                    ParentNestedList: !this.state.ParentNestedList,
                  });
                }}
                style={[Styles.Touch,{marginLeft:responsiveWidth(5)}]}>
                <SimpleLineIcon
                  name={'user-follow'}
                  color={TextColor}
                  size={40}
                />
                <Text style={Styles.ContactNameText}> {item.ParentNestedListname} </Text>
              </TouchableOpacity>
                ) : null}
              </View>
            ) : (
              <TouchableOpacity style={Styles.Touch}>
                <SimpleLineIcon name={'user-follow'} color={TextColor} size={40} />
                <Text style={Styles.ContactNameText}> {item.fullName} </Text>
              </TouchableOpacity>
            ),
          )}
        </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  inputName: {
    marginTop: responsiveHeight(1),
    width: '60%',
    height: responsiveHeight(5),
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: LightBackground,
    padding: '2%',
    borderColor: White,
  },
  inputView: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(15),
  },
  ContactListView: {
    width: '60%',
    alignSelf: 'center',
  },
  ContactNameText: {
    color: TextColor,
    fontSize: responsiveFontSize(2.2),
    width: '70%',
  },
  Touch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: responsiveHeight(8),
    alignItems: 'center',
  },
});
