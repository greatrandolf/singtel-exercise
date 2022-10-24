import React, { useState, useEffect } from 'react';
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Platform,
    PixelRatio,
    TextProps,
    StyleProp,
    TextStyle,
  } from 'react-native'
import { Colors } from '../../styles'
import styles from './Styles'
const { width, height } = Dimensions.get('window')

interface Props extends TextProps {
    children?: any,
    style?: StyleProp<TextStyle>,
    value?: string,
    fontWeight?: string,
} 

const CustomeText = (props: Props) => {
    let propStyle: any 
    0 < (props?.style as [any])?.length ? 
    (props?.style as [any]).map(item => {
        propStyle = { ...propStyle, ...item }
    }) : 
    propStyle = props?.style

    const fontStyle = () => {
        if (propStyle && propStyle.fontWeight) {
            let fontWeight: any = 400 < Number(propStyle.fontWeight) && Platform.OS === 'android' ? 'bold' : propStyle.fontWeight
            return ({ fontWeight }) //({ fontFamily: 'Raleway-Bold' })
        }
        else if (propStyle && propStyle.fontFamily)
            return ({ fontFamily: propStyle.fontFamily })
        else 
            return ({})
    }
    // <Text { ...props } style={[{ color: Colors.black, fontFamily: props.fontWeight === 'bold' ? 'Raleway-Bold' : 'Raleway-Regular' }, props.style, fontStyle()]}>
    return (
        <Text { ...props } style={[{ color: Colors.black }, props.style, fontStyle()]}>
            {props.value && !props.children && 
                props.value 
            }
            {!props.value && props.children && 
                props.children 
            }
        </Text>
    )
}

export default CustomeText;

