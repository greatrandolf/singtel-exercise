import React, { useState, useEffect } from 'react';
import { 
    View,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Platform,
    PixelRatio,
    StyleProp,
    ViewStyle,
    TextStyle,
    TouchableOpacityProps,
  } from 'react-native'
import Utils from '../../services/shared/utils/Utils'
import { Colors } from '../../styles'
import styles from './Styles'
import { Text } from '../../components'
const { width, height } = Dimensions.get('window')

type Props = {
    children?: any,
    style?: StyleProp<TextStyle>,
    theme?: string,
    title?: string,
    titleStyle?: StyleProp<TextStyle>,
    icon?: any,
    iconStyle?: ViewStyle,
    onPress?: () => void,
    disabled?: boolean,
}

const CustomeButton = ({
    children,
    theme,
    onPress,
    style,
    title,
    titleStyle,
    icon,
    iconStyle,
    disabled,
}: Props) => {
    let Icon = () => icon
    // BUTTON PROPS STYLE
    let propStyle: any 
    0 < (style as [any])?.length ? 
    (style as [any]).map(item => {
        propStyle = { ...propStyle, ...item }
    }) : 
    propStyle = style
    
    // TITLE PROPS STYLE
    let titlePropStyle: any
    0 < (titleStyle as [any])?.length ? 
    (titleStyle as [any]).map(item => {
        titlePropStyle = { ...titlePropStyle, ...item }
    }) : 
    titlePropStyle = titleStyle
    const flexStyle = propStyle.flex ? { flex: propStyle.flex } : { }
    //const onPressHandle = () => Utils.multipleTapHandler(() => onPress())

    return (
        <TouchableOpacity   activeOpacity={1}
                            disabled={disabled}
                            style={{...styles.container, ...propStyle}}
                            onPress={onPress ? onPress : () => {}}>
            {icon && 
                <View style={[{ left: 20, position: 'absolute' }, iconStyle]}>
                    <Icon />
                </View>
            }
            {title && !children &&
                <Text style={{...styles.textStyle, ...flexStyle, ...titlePropStyle}}>
                    {`${title}`}
                </Text>
            }
            {!title && children &&
                children
            }
        </TouchableOpacity>
    )
}

export default CustomeButton;

