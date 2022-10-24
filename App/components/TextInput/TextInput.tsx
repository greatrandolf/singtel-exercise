import React, { useState, useEffect } from 'react';
import {
    TextInput,
    StyleProp,
    TextStyle,
    TextInputProps,
  } from 'react-native'

interface Props extends TextInputProps {
    children?: any,
    style?: StyleProp<TextStyle>,
    fontWeight?: string,
} 

const CustomeTextInput = (props: Props) => {
    return (
        <TextInput { ...props }
                    returnKeyType="done"
                    style={[props.style, { fontFamily: props.fontWeight === 'bold' ? 'Raleway-Bold' : 'Raleway-Regular' }]}>
            { props.children }
        </TextInput>
    )
}

export default CustomeTextInput;

