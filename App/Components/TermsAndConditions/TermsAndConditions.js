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
import { Button } from 'react-native-paper';
export default class Login extends Component {
  state = {
    Terms: true,
    Rules: false,
    visible: true
  };

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
            <Text style={Styles.HeaderText}>Terms And Conditions</Text>
          </View>
          <TouchableOpacity
            style={Styles.menu}
            onPress={() => this.props.navigation.openDrawer()}>
            <Feather name={'menu'} color={'white'} size={25} />
          </TouchableOpacity>
          <View style={Styles.MainView}>
            <View style={Styles.ButtonView}>
              <LinearGradient
                colors={
                  this.state.Terms ? ['#ECAA0D', '#E61EB6'] : ['#ffffff', '#ffffff']
                }
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={[
                  this.state.Terms
                    ? Styles.LinearGradientSellButton
                    : Styles.SimpleButton,
                ]}>
                <Button
                  onPress={() => {
                    this.setState({ Terms: true, Rules: false, visible: true });
                  }}

                  contentStyle={{ height: responsiveHeight(6) }}
                  labelStyle={[
                    this.state.Terms
                      ? Styles.GradienttextStyles
                      : Styles.SimpleTextStyles,
                  ]}>
                  Terms
          </Button>
              </LinearGradient>
              <LinearGradient
                colors={
                  this.state.Rules ? ['#ECAA0D', '#E61EB6'] : ['#ffffff', '#ffffff']
                }
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={[
                  this.state.Rules
                    ? Styles.LinearGradientSellButton
                    : Styles.SimpleButton,
                ]}>
                <Button
                  onPress={() => {
                    this.setState({ Terms: false, Rules: true, visible: false });
                  }}


                  contentStyle={{ height: responsiveHeight(6) }}
                  labelStyle={[
                    this.state.Rules
                      ? Styles.GradienttextStyles
                      : Styles.SimpleTextStyles,
                  ]}>
                  Rules
          </Button>
              </LinearGradient>
            </View>
            <ScrollView style={Styles.InnerView}>
              {this.state.visible ? 
              ( <ScrollView style={Styles.TermsView}>
                  <Text style={Styles.TermsTitle}>TERMS AND CONDITIONS</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>1. </Text>Acepto, I understand and affirm that I am of legal age (18 or older), to accept my responsibilities. </Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>2. </Text>I agree that the register data'm giving my name, email, phone, etc. and Givet not share my data with outside companies, will only be used for the purpose of verifying my identity any more. At any time I send an email <Text style={Styles.boldNo}>tosupport@givetnetwork.com</Text> requesting deletion of my data and therefore removing my account Givet.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>3. </Text>I accept, understand and affirm that the vision and mission of Givet is to unite business and customers medium and long term, and I register freely and voluntarily, without pressure or obligations to anyone.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>4. </Text>I accept, understand and affirm that I am exchanging my criptomonedas or national currency (fiat money) for GVT, under my own responsibility, I consider it an investment in the near future, and no one forced me to do an involuntary purchase.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>5. </Text>I accept, understand and affirm, if someone who is part of Givet is distorting the vision and concept (perhaps giving false promises of guarantee on the purchase of GVT or other ways to win) my responsibility is to inform givet network through the mail <Text style={Styles.boldNo}>electronicsupport@givetnetwork.com</Text> And the various media with the system, and this just after the competent authorities, but not vice versa.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>6. </Text>Acepto, I understand and affirm that cryptomonedas are conciderado digital money and also as a personal right, to the purchase'm getting a digital money I ride considering as a personal right.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>7. </Text>I accept, understand and affirm that the funds you have chosen to use for the purchase of GVT come from own funds as savings and definitely I can spend without risking my capital or financial assets, also understand that I can not borrow money from institutions financial (banks, banks, etc.) or outsiders, for my peace and security with the Givet project.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>8. </Text>I accept, understand and affirm that the distribution of GVT is for a while <Text style={Styles.boldNo}>LIMITED</Text> until the total amount is depleted of <Text style={Styles.boldNo}>21,000,000,000 GVT</Text>.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>9. </Text>I accept, understand and affirm that the percentages will receive semanalemnte is like gift tokens GVT. <Text style={Styles.boldNo}>But it is not an interest that my make money</Text>.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>10. </Text>I accept, understand and affirm that <Text style={Styles.boldNo}>I DO NOT SELL DIRECTLY GIVET Tokens</Text> If not the man purchase of another user who is selling on the net.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>11. </Text>Accept, understand and affirm that if givet distributes tokens intelligently by the application.<Text style={Styles.boldNo}>I'LL BE LIABLE TO GOOD USE AND / OR SALE OF MY FREE TOKENS AND VOLUNTARILY.</Text></Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>12. </Text>I accept, understand, affirm, that if I decide to withdraw or transfer my tokens to another wallet, this under my responsibility for the proper use and security to be given to the token.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>13. </Text>I accept, understand and affirm that my exchange or purchase is final and not reversible. After sending the bitcoin or tokens I can no longer recover.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>14. </Text>I accept, understand and affirm that I am not participating in any scheme guaranteed investment or Ponzi scheme and that my purchase is for personal property or cryptocurrency that I can use on the platform of Givet, when the project begins to march publicly by cashback .</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>15. </Text>I accept, understand and affirm, that I can share my GVT Tokens in exchanges in the process of distribution of the Token, if esque estubiera listed on these exchanges, otherwise no. Meanwhile it is given an internal value of $ 1 for sale through the distribution system and referenced in the application itself.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>16. </Text>I accept, understand and affirm that I will see my provisional balance of GVT, in my application Givet once my payment has been confirmed.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>17. </Text>Accept, understand and affirm that I am participating in a cast or "pre" and therefore receive my support GVT in my wallet (givetwallet, Myetherwallet.com, trustwallet or Metamask) once the project starts. O exchange within the system to change bitcoins.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>18. </Text>I accept, understand and affirm, that I can not make any claim should provide wrong address wallet (external transfer), or if not take the necessary security measures. or in case any event outside the control of Givet. Example, as attacks by hackers or computer viruses. (We recommend not provide passwords to anyone outside in your browser to use incognito mode and not save passwords in your browser or internal pc, etc.)</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>19. </Text>Accept, understand and affirm that during the deal, the tokens can be purchased directly from another member affiliated to the system, or businesses that are giving away tokens for purchases of its products,<Text style={Styles.boldNo}>NO MORE DIRECTLY Givet.</Text></Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>20. </Text>I accept, understand and affirm, that the purchase of another Member tokens gives me the opportunity to participate in the affiliate program in which I earn as a gift percentages of GVT.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>21. </Text>Accept, understand and affirm that givet can change the percentages gift as sharing (25%, 6% and comiciones network) remains a free criterion of Givet. But I'll anticipated later.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>22. </Text>I accept, understand and affirm that my account will be activated within 24 business hours, but for some situation or just in case you needed more time is needed.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>23. </Text>I accept, understand and affirm that if I'm selling my tokens within the system and the system nome asigana buyers must be patient and understand that the delays are due to lack of buyers and not by givet.<Text style={Styles.boldNo}> GIVET SYSTEM IS ONLY TO THE IMPLEMENTATION BROKERAGE AND NOT RESPONSIBLE FOR MY SALES</Text>.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>24. </Text>Accept, understand and affirm that once filled out the form, and / or record me show me an email to verify my account and then enter newly wing Podre application.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>25. </Text>These terms and conditions will be posted on the website of Givet and withinthe application for free viewing public.</Text>
                  <Text style={Styles.AfterTerms}>ALL GIVET WHICH ARE PART SHOULD HAVE READ THESE TERMS AND CONDITIONS, FOR NOT FIND ANY ILL UNDERSTOOD AND AVOID FUTURE</Text>
                  <Text style={Styles.AfterTerms2}>SINCERELY GIVET NETWORK.</Text>
                </ScrollView>
              ) 
              :
              (
                <ScrollView style={Styles.TermsView}>
                  <Text style={Styles.TermsTitle}>RULES GIVET</Text>
                  <Text style={Styles.TermsTitle2}>These rules are for the participants of the Deal Tokens, not for purchases and sales outside the App Givet.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>1.</Text>To make a purchase profile must be fully completed and verified.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>2.</Text>You can not lose status of the package, but you can choose the same package or higher.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>3.</Text>The maximum time to complete a purchase (up Hash) and confirm receipt of funds is 12 hours. If the voucher is not up within 12 hours, the compar and sell buttons are locked and have to pay a penalty.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>4.</Text>Must upload hash all orders to avoid blocking your account, the tikect should finalizarce, to start the countdown has 7 days. Otherwise, NO begins the regressive account. you can not buy during that time, until the previous is completed.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>5.</Text>If you already earn a percentage by equity + network, then the charging limit ran out, in order to continue charging again need to buy the same package or higher.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>6.</Text>Disposals (sale) is not allowed to enter more than 4 digits, eg 0.0001.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>7.</Text>In order to free the profits available, you need to buy back the same package or higher and have done at least one ad ala week.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>8.</Text>Payment penalty (unlocking or dispute settlement) is 0.00048BTC Manual and Automatic 0.0029.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>9.</Text>The commissions will rise up, direct and indirect referrals. Always when these purchases ticket is ten to finished state, ie with Hash sent to all orders.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>10.</Text>After retirement 4th win only 6% weekly and 25%.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>11.</Text>If withdrawal (sold) 15 times, entonce you need to live with minimum ticket charge 1 finished (at the least the minimum package). So every 15 sales sucecivamente diretco completed a referral is required.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>12.</Text>If you request received by GVT token, there is no way to return the token to the app, and the reception time is 1-72 hours. (Ie during our first stage of growth to reach the 50 thousand members) after that our interacted app with token.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>13.</Text>Is only one account per person, is totally forbidden to have more than one account if it reaches stay discovering the user out of the system without appeal or refunds.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>14.</Text>To receive or earn commission for each level, you must have a direct refirido for each decendente level: for example receiving up to level 10, with only have 10 direct referrals and you unlocked everything.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>15.</Text>The value of packages will always be in bitcoin with a minimum of 0.0048btc- 1btc maximum.Whenever the volor of the bitcoin does not exceed 20 thousand dollars, if that happens the values ​​of the packets are changed to make it accessible to the public.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>16.</Text>Each BTC amount you have in your wallet Givet, you will then have an equivalent in dollars and said equivalent equals same amount in Givet wing. Example you have 1btc and bitcoin is worth 10 thousand dollars, then you own 10mil Givet. Miebros alos can sell them in exchange for btc or externally request them to another wallet.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>17.</Text>The givet are externally saved for security up to 50 thousand members, but can solicitarce freely by each member.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>18.</Text>Business owners and new members, if you want to buy GVT made only other participant.</Text>
                  <Text style={Styles.Terms}><Text style={Styles.boldNo}>19.</Text>Business owners have the obligation to regulate GVT asus buyers, otherwise these businesses will be eliminated from the system.{'\n'}Gifts are 2 types one for the same person who buys and one for the sponsor of the buyer and the amounts are volunteers for x amount of purchase.</Text>
                  <Text style={Styles.AfterTerms}>ALL GIVET WHICH ARE PART SHOULD HAVE READTHESE RULES, TO FIND NOT UNDERSTOOD AND AVOID BAD SITUATION IN THE FUTURE.</Text>
                  <Text style={Styles.AfterTerms2}>SINCERELY GIVET NETWORK.</Text>
                </ScrollView>
              )
              }
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
  InnerView: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: White,
    borderRadius: 25,
    marginTop: responsiveHeight(2),
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: responsiveHeight(5),
  },
  ButtonView: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  SellButton: {
    width: '100%',
    borderRadius: 50,
  },
  LinearGradientSellButton: {
    marginTop: responsiveHeight(2),
    width: '30%',
    height: responsiveHeight(6),
    borderRadius: 50,
    marginBottom: responsiveHeight(2),
  },
  SimpleButton: {
    marginTop: responsiveHeight(2),
    width: '30%',
    height: responsiveHeight(6),

    borderRadius: 50,

    marginBottom: responsiveHeight(2),
  },
  GradienttextStyles: {
    color: 'white',
    fontSize: responsiveFontSize(1.8),
  },
  SimpleTextStyles: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: responsiveFontSize(1.8),
  },
  TermsTitle:{
    color:TextColor,
    fontSize:responsiveFontSize(3.2),
    alignSelf:'center',
    fontWeight:'bold'
  },
  TermsTitle2:{
    color:TextColor,
    fontSize:responsiveFontSize(1.75),
    textAlign:'center',
    marginBottom:responsiveHeight(2),
    marginHorizontal:responsiveWidth(0.8)
  },
  Terms:{
    color:TextColor,
    fontSize:responsiveFontSize(1.75),
    marginHorizontal:responsiveWidth(1.5),
    marginBottom:responsiveHeight(1),
    textAlign:'justify'
  },
  boldNo:{
    fontWeight:'bold'
  },
  TermsView:{
    padding:responsiveHeight(3)
  },
  AfterTerms:{
    marginTop:responsiveHeight(1),
    color:TextColor,
    fontSize:responsiveFontSize(1.75),
    marginHorizontal:responsiveWidth(1.5),
    marginBottom:responsiveHeight(0.5),
    textAlign:'justify'
  },
  AfterTerms2:{
    marginTop:responsiveHeight(1),
    color:TextColor,
    fontSize:responsiveFontSize(1.75),
    marginHorizontal:responsiveWidth(1.5),
    marginBottom:responsiveHeight(0.5),
    textAlign:'justify',
    fontWeight:'bold'
  }
});
