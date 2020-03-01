import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { White, LightBackground} from '../../Globals/colors';

const {width, height} = Dimensions.get('window');
export default class Chat extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      messages: [
        {
          id: 1,
          sent: true,
          msg: 'Lorem ipsum dolor',
          image: 'https://randomuser.me/api/portraits/women/65.jpg',
        },
        {
          id: 2,
          sent: true,
          msg: 'sit amet, consectetuer',
          image: 'https://randomuser.me/api/portraits/women/65.jpg',
        },
        {
          id: 3,
          sent: false,
          msg: 'adipiscing elit. Aenean ',
          image: 'https://randomuser.me/api/portraits/men/44.jpg',
        },
        {
          id: 4,
          sent: true,
          msg: 'commodo ligula eget dolor.',
          image: 'https://randomuser.me/api/portraits/women/65.jpg',
        },
        {
          id: 5,
          sent: false,
          msg: 'Aenean massa. Cum sociis ',
          image: 'https://randomuser.me/api/portraits/men/44.jpg',
        },
        {
          id: 6,
          sent: true,
          msg:
            'nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,',
          image: 'https://randomuser.me/api/portraits/women/65.jpg',
        },
        {
          id: 7,
          sent: false,
          msg: 'rhoncus ut, imperdiet',
          image: 'https://randomuser.me/api/portraits/men/44.jpg',
        },
        {
          id: 8,
          sent: false,
          msg: 'a, venenatis vitae',
          image: 'https://randomuser.me/api/portraits/men/44.jpg',
        },
      ],

      route: '',
    };
    this.send = this.send.bind(this);
    this.reply = this.reply.bind(this);
    this.renderItem = this._renderItem.bind(this);
  }
  componentDidMount = () => {
    this.props.navigation.addListener('willFocus', () => {
      this.navigation();
    });
  };
  navigation = () => {
    if (this.props.navigation.state.params === undefined) {
      this.setState({route: ''});
    } else {
      this.setState({
        route: this.props.navigation.state.params.Check,
      });
    }
  };

  reply() {
    var messages = this.state.messages;
    messages.push({
      id: Math.floor(Math.random() * 99999999999999999 + 1),
      sent: false,
      msg: this.state.msg,
      image: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
    });
    this.setState({msg: '', messages: messages});
  }

  send() {
    if (this.state.msg.length > 0) {
      var messages = this.state.messages;
      messages.push({
        id: Math.floor(Math.random() * 99999999999999999 + 1),
        sent: true,
        msg: this.state.msg,
        image: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
      });
      this.setState({messages: messages});
      setTimeout(() => {
        this.reply();
      }, 2000);
    }
  }

  _renderItem = ({item}) => {
    if (item.sent === false) {
      return (
        <View style={styles.eachMsg}>
          <Image source={{uri: item.image}} style={styles.userPic} />
          <View style={styles.msgBlock}>
            <Text style={styles.msgTxt}>{item.msg}</Text>
            <Text style={styles.msgTime}>{'10:20 pm'}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.rightMsg}>
          <LinearGradient
            colors={['#ECAA0D', '#E61EB6']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 1.0}}
            style={styles.rightBlock}>
            <Text style={styles.rightTxt}>{item.msg}</Text>
            <Text style={styles.msgTime1}>{'10:20 pm'}</Text>
          </LinearGradient>
          <Image source={{uri: item.image}} style={styles.userPic} />
        </View>
      );
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
        <LinearGradient
          colors={['#ECAA0D', '#E61EB6']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={styles.gradient}>
          <View style={styles.Header}>
            <Text style={styles.welcome}>User Chat</Text>
          </View>
          <TouchableOpacity
            style={styles.menu}
            onPress={() => {
              this.props.navigation.navigate('Home', {
                ChatProps: 'fancy',
                ROUTE: this.state.route,
              });
            }}>
            <Entypo name={'chevron-thin-left'} color={White} size={25} />
          </TouchableOpacity>
          <View style={styles.MainView}>
            <KeyboardAvoidingView style={styles.keyboard}>
              <FlatList
                style={styles.list}
                extraData={this.state}
                data={this.state.messages}
                keyExtractor={item => {
                  return item.id;
                }}
                renderItem={this.renderItem}
              />
              <View style={styles.footer}>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputs}
                    placeholder="Write a message..."
                    underlineColorAndroid="transparent"
                    onChangeText={name_address => this.setState({name_address})}
                  />
                </View>
                <LinearGradient
                  colors={['#ECAA0D', '#E61EB6']}
                  start={{x: 0.0, y: 1.0}}
                  end={{x: 1.0, y: 1.0}}
                  style={styles.btnSend}>
                  <Ionicon
                    name={'md-send'}
                    color={'white'}
                    size={25}
                    style={styles.sendicon}
                  />
                </LinearGradient>
              </View>
            </KeyboardAvoidingView>
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  MainView: {
    flex: 1,
    backgroundColor: LightBackground,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    elevation: 5,
  },
  keyboard: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width,
    height,
  },
  header: {
    height: '10%',
    width: '100%',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
  },
  chatTitle: {
    color: '#fff',
    fontWeight: '600',
    margin: 10,
    fontSize: 15,
  },
  chatImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5,
  },
  input: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 10,
    height: 40,
    width: width - 20,
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
    borderColor: '#696969',
    borderWidth: 1,
  },
  eachMsg: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 5,
  },
  rightMsg: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    margin: 5,
    alignSelf: 'flex-end',
  },
  userPic: {
    height: 40,
    width: 40,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
  },
  msgBlock: {
    width: 220,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    padding: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
  rightBlock: {
    width: 220,
    borderRadius: 15,
    padding: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
  msgTxt: {
    fontSize: 17,
    color: '#000000',
    fontWeight: '600',
  },
  msgTime: {
    fontSize: 12,
    color: '#000000',
    fontWeight: '600',
    textAlign: 'right',
  },
  msgTime1: {
    fontSize: 12,
    color: 'white',
    fontWeight: '600',
    textAlign: 'right',
  },
  rightTxt: {
    fontSize: 17,
    color: '#ffffff',
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    padding: 5,
  },
  btnSend: {
    backgroundColor: '#2197db',
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSend: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  inputContainer: {
    borderBottomColor: '#000000',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: '#000000',
    flex: 1,
  },
  welcome: {
    fontSize: responsiveFontSize(2.8),
    fontWeight: 'bold',
    color: White,
  },
  Header: {
    justifyContent: 'center',
    height: responsiveHeight(13),
    alignItems: 'center',
  },
  menu: {
    marginLeft: '4%',
    position: 'absolute',
    top: responsiveHeight(4.75),
  },
  sendicon: {
    transform: [{rotate: '270deg'}],
  },
});
