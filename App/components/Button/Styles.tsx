import { StyleSheet } from 'react-native'
import { Colors } from '../../styles'

const styles = StyleSheet.create({
    container: {
        marginVertical: 5, 
        padding: 15, 
        backgroundColor: Colors.darkRed, 
        borderRadius: 50,  
        justifyContent: 'center',
         alignItems: 'center',
    },
    textStyle: {
        color: Colors.white, 
        fontSize: 16, 
        textAlign: 'center' 
    }
    
    
});

export default styles;