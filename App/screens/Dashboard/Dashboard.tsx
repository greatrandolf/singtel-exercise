import React, { useEffect, useState, useRef, MutableRefObject } from 'react'
import { ConnectedProps } from 'react-redux'
import {
  Image,
  View,
  FlatList,
} from 'react-native'
import { images, lotties } from '../../constants'
import { Container,
    Header,
    Card as CardView,
    Text,
    Button,
} from '../../components'
import { Colors } from '../../styles'
import styles from './Styles'
import { Card, } from '../../models'


type Props = {
  toggleDrawer: () => void,
  onFlipChange: (value: string) => void,
  onFlipCallBack: (card: Card, callback: Function) => void,

  steps: Number,
  cards: Card[],
}

const Dashboard = (props: Props) => {
    const header = () => (
      <Header   style={{ flex: 1, }}
                left={(
                  <Button onPress={props.toggleDrawer}
                          style={styles.hamburgerButton}   
                          icon={(
                            <Image resizeMode="contain" 
                                  source={images.hamburgerMenu} 
                                  style={styles.hamburgerImage} />
                          )} />
                )}
                title={`STEPS: ${props.steps}`}
            />
    )
    
    return (
        <Container    safeAreaViewTopStyle={styles.safeArea}
                      statusBarStyle={"dark"}
                      header={header}
                      style={styles.container} >

            <FlatList 
              data={props.cards}
              numColumns={3}
              renderItem={({item}) => (
                <CardView title={`${item?.value}`} 
                          onFlipChange={props.onFlipChange}
                          onFlipCallBack={(callback: Function) => props.onFlipCallBack(item, callback)} />
              )}
            />
            
        </Container>
    )
}

export default Dashboard
