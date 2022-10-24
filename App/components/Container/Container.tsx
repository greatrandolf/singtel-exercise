import * as React from 'react'
import { 
    StatusBar,
    SafeAreaView, 
    ScrollView, 
    View, 
    Text,
    ImageBackground,
    Platform,
} from 'react-native';
import { Colors } from '../../styles'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Styles'
let statusBarTop: any = null

type Props = {
    children?: any,
    header?: () => void,
    backgroundImage?: any,
    statusBarStyle?: string,
    safeAreaViewTopStyle?: any,
    safeAreaViewBottomStyle?: any,
    scrollViewEnable?: boolean,
    keyboardShouldPersistTaps?: any,
    style?: any,
}


const CustomStatusBar = ({  backgroundColor, barStyle = "light-content",  } : { backgroundColor: any, barStyle: string }
) => {
    const safeAreaTop = Platform.OS === 'ios' ? useSafeAreaInsets().top : useSafeAreaInsets().top*.80
    statusBarTop = statusBarTop ?? safeAreaTop
    return (
        <SafeAreaView style={{ height: Platform.OS === 'ios' ? statusBarTop : safeAreaTop , backgroundColor: backgroundColor }}>
            <StatusBar
                animated={true}
                backgroundColor={backgroundColor}
                barStyle={barStyle as any} />
        </SafeAreaView>
    );
}



const Container = ({
    children, 
    header, 
    backgroundImage,
    statusBarStyle = '',
    safeAreaViewTopStyle,
    safeAreaViewBottomStyle,
    scrollViewEnable,
    keyboardShouldPersistTaps = 'handled',
    style, 
}: Props) => {

    const { backgroundColor } = style
    const Content = scrollViewEnable ? ScrollView : View
    const statusBarColor = safeAreaViewTopStyle && safeAreaViewTopStyle.backgroundColor ? safeAreaViewTopStyle.backgroundColor : null

    return safeAreaViewTopStyle || safeAreaViewBottomStyle ? (
        <>
            <SafeAreaProvider style={[{ backgroundColor }, safeAreaViewTopStyle, styles.safeAreaViewTop]} >
                <>
                    {statusBarStyle === "notice-light" && <CustomStatusBar backgroundColor={Colors.noticeColor} barStyle="light-content" /> }
                    {statusBarStyle === "notice-dark" && <CustomStatusBar backgroundColor={statusBarColor ? statusBarColor :Colors.noticeColor} barStyle="dark-content" /> }
                    {statusBarStyle === "dark" && <CustomStatusBar backgroundColor={Colors.white} barStyle="dark-content" /> }
                    {statusBarStyle === "light" && <CustomStatusBar backgroundColor={statusBarColor ? statusBarColor :Colors.red} barStyle="light-content" /> }
                    
                    { header && header() }
                </>
            </SafeAreaProvider>
            <View style={[{ backgroundColor }, safeAreaViewBottomStyle, styles.safeAreaViewBottom]}  >
                <ImageBackground
                        style={style} resizeMode="cover"
                        source={backgroundImage ? { uri: backgroundImage } : require('../../assets/BG.png')} >

                        <LinearGradient style={style} colors={['#B43235', '#7B2224']}>
                            <Content  style={[{ }, style]} keyboardShouldPersistTaps={keyboardShouldPersistTaps} keyboardDismissMode="interactive">
                                { children }
                            </Content>
                        </LinearGradient>
                        
                </ImageBackground>
            </View>
        </>
    ) : (
        <ImageBackground
                style={backgroundImage ? [style, { left: 1.5, top: -10, height: '118%', }] : style} resizeMode="cover"
                source={backgroundImage ? { uri: backgroundImage } : require('../../assets/BG.png')} >
            <>
                {statusBarStyle === "dark" && <CustomStatusBar backgroundColor={Colors.white} barStyle="dark-content" /> }
                {statusBarStyle === "light" && <CustomStatusBar backgroundColor={statusBarColor ? statusBarColor :Colors.red} barStyle="light-content" /> }
                {statusBarStyle === "notice-light" && <CustomStatusBar backgroundColor={Colors.noticeColor} barStyle="light-content" /> }
                {statusBarStyle === "notice-dark" && <CustomStatusBar backgroundColor={Colors.noticeColor} barStyle="dark-content" /> }
                {header && header()}
            
                <LinearGradient style={style} colors={['#B43235', '#7B2224']}>
                    <Content style={[{ },style]} keyboardShouldPersistTaps={keyboardShouldPersistTaps} keyboardDismissMode="interactive">
                        { children }
                    </Content>
                </LinearGradient>
            </>
        </ImageBackground>
    )
};

export default Container;