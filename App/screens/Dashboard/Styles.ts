import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Dimensions, PixelRatio, Platform, StyleSheet } from 'react-native'
import { Colors } from '../../styles'
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: Colors.white,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.black,
    },
    hamburgerButton: {
        flex: 1, 
        backgroundColor: Colors.transparent, 
    },
    hamburgerImage: {
        height: 30, 
        width: 30,
    },
})

export default styles