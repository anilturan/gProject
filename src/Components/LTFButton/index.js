// import React, { Component } from 'react'
// import { TextInput, View, StyleSheet } from 'react-native'

// class CustomButton extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         const { props } = this.props;
//         return (
//             <View style={{ marginVertical: 10 }}>
//                 <TextInput
//                     style={styles.input}
//                     placeholder={props.placeholder && ''}
//                 />
//             </View>
//         )
//     }
// }
// const defaultValue = {
//     height: 50,
//     backgroundColor: '#ecedf1',
//     borderRadius: 30,
//     marginVertical: 5,
//     color: '#96969a',
//     fontSize: 18,
//     padding: 10
// }
// const styles = (props) => StyleSheet.create({
//     input: {
//         height: props.height ? props.height : defaultValue.height,
//         backgroundColor: props.backgroundColor ? props.backgroundColor : defaultValue.backgroundColor,
//         borderRadius: props.borderRadius ? props.borderRadius : defaultValue.borderRadius,
//         marginVertical: props.marginVertical ? props.marginVertical : defaultValue.marginVertical,
//         color: props.color ? props.color : defaultValue.color,
//         fontSize: props.fontSize ? props.fontSize : defaultValue.fontSize,
//         padding: props.padding ? props.padding : defaultValue.padding
//     }
// })

// export default CustomButton

import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

const LTFButton = (props) => {
    if (props.socialButtonFacebook) {
        return (
            <View />
        );
    } else if (props.socialButtonGoogle) {
        return (
            <View />
        );
    }
    return (
        <TouchableOpacity activeOpacity={.8} onPress={() => props.onPress ? props.onPress() : undefined}
            style={[props.shadow && {
                elevation: 2,
                shadowOffset: { width: 1, height: 1, },
                shadowColor: 'gray',
                shadowOpacity: .8,
            }, {
                backgroundColor: props.backgroundColor || 'white',
                marginVertical: 10,
                height: props.height || 30,
                marginHorizontal: props.marginHorizontal || 5,

                borderRadius: props.radius || 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                flex:1,
            },
            {...props.styles}]}>
            <Text style={{ fontWeight: props.fontWeight || '400', fontSize: props.fontSize || 15, color: props.buttonTextColor || 'white', flex: 1, textAlign: 'center' }}>{props.buttonText} </Text>

        </TouchableOpacity>);
}

LTFButton.propTypes = {
    backgroundColor: PropTypes.string,
    marginHorizontal: PropTypes.number,
    height: PropTypes.number,
    radius: PropTypes.number,
    fontSize: PropTypes.number,
    buttonTextColor: PropTypes.string,
    buttonText: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    activeOpacity: PropTypes.bool,
    styles:PropTypes.any
}

export default LTFButton