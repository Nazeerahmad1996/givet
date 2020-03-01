import React from "react"
import PropTypes from "prop-types"
import {
    Animated,
    Easing,
    TouchableOpacity,
    Text,
    View
} from "react-native"
import { TextColor, White } from "../../../Globals/colors"

const knobOffset = 138

export class Toggle extends React.Component {
    static propTypes = {
        isOn: PropTypes.bool,
        onToggle: PropTypes.func.isRequired,
    }

    static defaultProps = {
        isOn: false,
    }

    state = {
        isOn: this.props.isOn,
        animatedValue: new Animated.Value(this.props.isOn ? knobOffset : 0),
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.isOn !== this.props.isOn) {
            this.setState(
                { isOn: this.props.isOn },
                () => {
                    Animated.timing(
                        this.state.animatedValue,
                        {
                            toValue: this.state.isOn ? knobOffset : 0,
                            easing: Easing.elastic(0.7),
                            duration: 100,
                        }
                    ).start()
                }
            )
        }
    }

    handlePress() {
        this.setState(
            { isOn: !this.state.isOn },
            () => this.props.onToggle(this.state.isOn)
        )
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                style={{
                    backgroundColor: this.state.isOn ? White : White,
                    width: 180,
                    height: 40,
                    borderRadius: 32,
                    padding: 2,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    borderWidth: 0.7
                }}
                onPress={() => this.handlePress()}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {this.state.isOn ? (
                        <Text style={{ marginLeft: 10, fontSize: 16 }}>local business</Text>
                    ) : (
                            <Text style={{ marginRight: 10, fontSize: 16, textAlign: 'right', flex: 1 }}>Professional</Text>
                        )}

                    <Animated.View style={{
                        position: 'absolute',
                        backgroundColor: TextColor,
                        width: 35,
                        height: 35,
                        borderRadius: 32,
                        transform: [{
                            translateX: this.state.animatedValue,
                        }]
                    }} />
                   
                </View>

            </TouchableOpacity>
        )
    }
}