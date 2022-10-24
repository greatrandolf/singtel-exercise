import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors } from '../../styles'
import { Dimensions, PixelRatio, StyleSheet } from  'react-native'
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: Colors.red,
    },
    container: {
        flex: 1,
    },
    
})

export default styles