import React, { useState, useEffect, useRef } from 'react';
import { 
    View,
    Dimensions,
    StyleProp,
    ViewStyle,
    TextStyle,
    Animated,
  } from 'react-native'
import { Text, Button } from '../../components'
const { width, height } = Dimensions.get('window')

type Props = {
    children?: any,
    style?: StyleProp<TextStyle>,
    theme?: string,
    title?: string,
    titleStyle?: StyleProp<TextStyle>,
    icon?: any,
    iconStyle?: ViewStyle,
    onFlipCallBack?: (callback: (value: any) => void) => void,
    onFlipChange?: (value: any) => void,
    disabled?: boolean,
}

const CustomeButton = ({
    children,
    theme,
    onFlipCallBack,
    onFlipChange,
    style,
    title,
    titleStyle,
    icon,
    iconStyle,
    disabled,
}: Props) => {
    // let Icon = () => icon

    // CARD PROPS STYLE
    let propStyle: any 
    0 < (style as [any])?.length ? 
    (style as [any]).map(item => {
        propStyle = { ...propStyle, ...item }
    }) : 
    propStyle = style ?? { height: height/5 }

    const [flipValue, setFlipValue] = useState("close")
    const opacityAnimation = useRef(new Animated.Value(0)).current;
    const opacityStyle = { opacity: opacityAnimation };

    let currentValue = 0;
    const animatedValue = useRef(new Animated.Value(0)).current;
    animatedValue.addListener(({ value }) => {
      currentValue = value;
    });
    const rotateY = animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    });
    const rotateYAnimatedStyle: any = {
      transform: [{ rotateY }],
    };

    const backFlip = () => {
      setFlipValue("close")
      Animated.timing(opacityAnimation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true
      }).start(() => { })
      Animated.spring(animatedValue, {
        toValue: 0,
        tension: 10,
        friction: 8,
        useNativeDriver: true,
      }).start(() => { });
    }

    const frontFlip = () => {
      setFlipValue("open")
      Animated.timing(opacityAnimation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      }).start(() => { })
      Animated.spring(animatedValue, {
        toValue: 180,
        tension: 10,
        friction: 8,
        useNativeDriver: true,
      }).start(() => { });
    }

    const flip = () => {
      if (currentValue >= 90) {
        backFlip()
      } else {
        frontFlip()
        if (onFlipChange) onFlipChange(title)
      }
    }

    useEffect(() => {
      if (onFlipCallBack) {
        onFlipCallBack((satisfied: boolean) => {
          if (!satisfied) {
            opacityAnimation.stopAnimation()
            animatedValue.stopAnimation()
            backFlip()
          }
        })
      }
    }, [onFlipCallBack])

    return (
        <Animated.View style={[{ flex: 1, padding: 0, margin: 5, borderRadius: 0, }, propStyle, rotateYAnimatedStyle]} >
            <Button onPress={flip} 
                    disabled={flipValue === "open"}
                    style={{ flex: 1, borderColor:'white', borderWidth: 5, borderRadius: 10, padding: 0, margin: 0, backgroundColor: '#4DA0ED' }}>
                    <>
                    <View style={[{  borderRadius: 5, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', position: 'absolute', }]}>
                        <Text style={{ fontSize: 30, fontWeight:'bold', color: 'white' }}>
                        ⸮
                        </Text>
                    </View>
                    <Animated.View style={[opacityStyle, { borderRadius: 5, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', position: 'absolute', backgroundColor: 'white'}]}>
                        <Text style={{ fontSize: 20, }}>
                        {title}
                        </Text>
                    </Animated.View>
                </>
            </Button>
        </Animated.View>
    )
}

export default CustomeButton;

