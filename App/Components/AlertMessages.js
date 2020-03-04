import React, { Component } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    StatusBar,
} from 'react-native';
import {
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import { TextColor, White } from '../Globals/colors'
import Modal from 'react-native-modal';

export default class Wallet extends Component {
    state = {};

    renderModalContent = () => (
        <View style={Styles.modalView}>

            <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: 'bold', color: TextColor }}>{this.props.title}</Text>
            <AntDesign name={this.props.Mtype ? 'checkcircle' : 'closecircle'} size={50} color={this.props.Mtype? '#ECAA0D' : TextColor} style={{ marginVertical: 10 }} />
            <Text style={{ fontSize: 17,textAlign:'center' }}>{this.props.des}</Text>

        </View>
    );

    render() {
        return (
            <SafeAreaView>
                <StatusBar translucent backgroundColor="transparent" />
                <Modal
                    isVisible={this.props.ModalState === 'fancy'}
                    backdropColor="rgba(0,0,0,0.1)"
                    animationIn="zoomInDown"
                    animationOut="zoomOutUp"
                    animationInTiming={600}
                    animationOutTiming={600}
                    backdropTransitionInTiming={600}
                    backdropTransitionOutTiming={600}
                    onBackdropPress={() => this.props.closeModal()}
                    style={{ overflow: 'scroll' }}>
                    {this.renderModalContent()}
                </Modal>
            </SafeAreaView>
        );
    }
}
const Styles = StyleSheet.create({
    modalView: {
        width: responsiveWidth(95),
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: 'white',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    //   crossView: {
    //     width: '90%',
    //     alignSelf: 'center',
    //     justifyContent: 'center',
    //     alignItems: 'flex-end',
    //     height: responsiveHeight(7),
    //   },
    //   ParagraphView: {
    //     width: '60%',
    //     alignSelf: 'center',
    //   },
    //   paragraphText: {
    //     textAlign: 'center',
    //     fontSize: responsiveFontSize(2.5),
    //     color: TextColor,
    //   },
    //   ButtonView: {
    //     marginTop: responsiveHeight(5),
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    //     marginBottom: responsiveHeight(2),
    //   },
    //   SellButton2: {
    //     borderRadius: 8,
    //     backgroundColor: TextColor,
    //     alignSelf: 'flex-end',
    //   },
    //   LinearGradientSellButton: {
    //     alignSelf: 'center',
    //     borderRadius: 8,
    //   },
});
