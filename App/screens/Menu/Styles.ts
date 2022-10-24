import { StyleSheet } from 'react-native'
import { Colors } from '../../styles'

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: Colors.black,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'space-around',
    },
    headerContainer: {
        backgroundColor: Colors.black, 
    },
    headerTitle: {
        fontSize: 18, 
        color: Colors.white, 
        padding: 4,
    },
    menuItemButton: {
        flex: 1,
        borderBottomColor: 'lightgray', 
        borderBottomWidth: 0.5,
    },
    menuItemText: {
        fontSize: 15, 
        paddingVertical: 18,
    },
})

export default styles