import React, { Component } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

class LTFInput extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { placeholder, value, passwordInput, onChangeText, placeholderTextColor, backgroundColor,borderRadius,shadowInput } = this.props;
        const baseInputStyle = {
            borderBottomWidth: backgroundColor ? 0 : 1.3,
            borderColor: "rgb(225, 225, 225)",
        }
        const shadowInputStyle = {
            backgroundColor: backgroundColor || "white",
            borderRadius: borderRadius || 5.3,
            elevation: 1,
            borderBottomWidth: 1,
            borderColor: "#bababa",
            marginVertical: 4
        }
        return (
            <View  style={[shadowInput ? shadowInputStyle : baseInputStyle, {
                flexDirection: "row",
                flex:1
            }]}>
                {/* {this.topLabelRender()} */}
                <View
                    style={[shadowInput ? shadowInputStyle : baseInputStyle, {
                        flexDirection: "row",
                        flex:1
                    }]}
                >
                    {/* {this.leftIconRender()} */}
                    <View style={{ flex: 1 }}>
                        <TextInput
                            style={styles(this.props).input}
                            value={value ? value : undefined}
                            secureTextEntry={passwordInput}
                            onChangeText={value => onChangeText(value)}
                            placeholder={placeholder || ''}
                            placeholderTextColor={placeholderTextColor || 'gray'}
                            {...this.props}
                        />
                    </View>
                    {/* {this.rightIconRender()} */}
                </View>
            </View>

        )
    }
}

LTFInput.propTypes = {
    height: PropTypes.number,
    backgroundColor: PropTypes.string,
    borderRadius: PropTypes.number,
    placeholder: PropTypes.string,
    marginVertical: PropTypes.number,
    color: PropTypes.string,
    fontSize: PropTypes.number,
    padding: PropTypes.number,
    value: PropTypes.any,
    onChangeText: PropTypes.func,
    placeholderTextColor: PropTypes.string,
    passwordInput: PropTypes.any
}
const defaultValue = {
    backgroundColor: 'white',
    borderRadius: 25,
    color: '#96969a',
    fontSize: 15,
}
const styles = (props) => StyleSheet.create({
    input: {
        backgroundColor: props.backgroundColor ? props.backgroundColor : defaultValue.backgroundColor,
        borderRadius: props.borderRadius ? props.borderRadius : defaultValue.borderRadius,
        color: props.color ? props.color : defaultValue.color,
        fontSize: props.fontSize ? props.fontSize : defaultValue.fontSize,
        padding: props.padding ? props.padding : defaultValue.padding,
        flex: 1,
        marginHorizontal:5,
        paddingHorizontal:10,
    }
})

export default LTFInput


// <View style={{ marginVertical: 10 }}>
//                 <TextInput
//                     style={styles(this.props).input}
//                     value={value ? value : undefined}
//                     secureTextEntry={password}
//                     onChangeText={value => onChangeText(value)}
//                     placeholder={placeholder || ''}
//                     placeholderTextColor={placeholderTextColor || 'gray'}
//                     {...this.props}
//                 />
//             </View>