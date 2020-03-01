import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  createDrawerNavigator,
} from 'react-navigation-drawer';
import {
  Dimensions,
} from 'react-native';
import AuthLoadingScreen from '../Components/AuthLoading/AuthLoading';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import Home from '../Components/Home/Home';
import Penality from '../Components/Home/Penality';
import Transfer from '../Components/Home/Transfer';
import PayBusiness from '../Components/Home/PayBusiness';

import WalletHistory from '../Components/Home/WalletHistory';
import Wallet from '../Components/Home/Wallet';
import Notification from '../Components/Notification/Notification';
import Chat from '../Components/Chat/Chat';
import SouporteChat from '../Components/SouporteChat/SouporteChat';
import CustomDrawer from './CustomDrawer';
import Announcement from '../Components/Announcement/Announcement';
import Business from '../Components/Business/Business';
import Details from '../Components/Business/Store/Details';
import Store from '../Components/Business/Store/Store';
import Tabs from '../Components/Business/Tabs';
import Split from '../Components/Split/Split';
import InviteFriend from '../Components/InviteFriend/InviteFriend';
import Profile from '../Components/Profile/Profile';
import TermsAndConditions from '../Components/TermsAndConditions/TermsAndConditions';
var width = Dimensions.get('window').width / 1.2;
console.disableYellowBox = true;

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Register: Register,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const HomeNavigator = createStackNavigator(
  {
    Home: Home,
    Notification: Notification,
    Chat: Chat,
    Announcement: Announcement,
    Business: Business,
    Details: Details,
    Tabs: Tabs,
    Store: Store,
    Split: Split,
    InviteFriend: InviteFriend,
    Profile: Profile,
    SouporteChat,
    SouporteChat,
    TermsAndConditions: TermsAndConditions,
    WalletHistory,
    Wallet,
    Penality,
    Transfer,
    PayBusiness
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);





const Drawer = createDrawerNavigator(
  {
    HomeNavigator:HomeNavigator
  },
  {
    initialRouteName: 'HomeNavigator',
    contentComponent: CustomDrawer,
    defaultNavigationOptions: {
      header: null,
    },
    drawerWidth: '90%',
    drawerBackgroundColor: 'transparent',
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoadingScreen: AuthLoadingScreen,
      Auth: AuthStack,
      App: Drawer,
    },
    {
      initialRouteName: 'AuthLoadingScreen',
    },
  )
);
