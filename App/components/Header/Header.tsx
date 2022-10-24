import React from 'react';
import { 
    View,
    Text 
} from 'react-native';
import styles from './Styles'

type Props = {
    style?: any,
    title?: string,
    titleStyle?: any,
    left?: any,
    leftContainerStyle?: any,
    center?: any,
    centerContainerStyle?: any,
    right?: any,
    rightContainerStyle?: any,
}

const Header = ({
    style,
    title,
    titleStyle,
    left,
    leftContainerStyle,
    center,
    centerContainerStyle,
    right,
    rightContainerStyle,
}: Props) => {
    
    const defaultColor = title ?  { } : { color: 'transparent' }
    const flexLeftRight = title && !center ? { flex: left || right ? 0.25 : 0.75 } : { flex: left || right ? 0.8 : 0.2 }
    const flexRight = { alignItems: 'flex-end', paddingRight: 20, }
    const shouldPaddingTop = (title && !center) || (center && !title)
    return (
        <View style={[styles.container, { paddingVertical: 20, ...style, }]}>
            <View style={[ flexLeftRight, leftContainerStyle, ]}>
                {left}
            </View>
            {title && !center && 
                <Text style={[styles.title, titleStyle, defaultColor]}>
                    {title ? title : 'Title'}
                </Text> 
            }
            {center && !title && 
                <View style={[ { flex: center ? 4 : 0.5 }, centerContainerStyle, ]}>
                    {center}
                </View>
            }
            {!center && !title &&
                <View style={{ flex: 0.6, height: 40, }} />
            }
            <View style={[ flexRight, flexLeftRight, rightContainerStyle, ]}>
                {right}
            </View>
        </View>
    )
}

export default Header;

