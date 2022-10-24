import React from 'react'
import {
    View,
} from  'react-native'
import { env } from '../../config'
import { Container, Header, Text } from '../../components'
import styles from './Styles'

type Props = {
    route: any,
}

const Login = (props: Props) =>{

    return(
        <Container  safeAreaViewTopStyle={styles.safeArea}
                    statusBarStyle={'dark'}
                    scrollViewEnable={true}
                    // header={header}
                    style={{ flex: 1, backgroundColor: 'blue' }} >
                        
        </Container>
    )
}

export default Login