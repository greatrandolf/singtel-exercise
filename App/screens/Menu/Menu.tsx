import React from 'react'
import { ConnectedProps } from 'react-redux'
import { 
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { Container, Header, Text, LoadingDialog } from '../../components'
import { Colors } from '../../styles'
import styles from './Styles'
import Utils from '../../services/shared/utils/Utils'

type Props = {
  onNavigateMenuItem: (item: string) => void,
}

const Menu = (props: Props) => {

    const header = () => (
        <Header style={styles.headerContainer}
                title={'Menu'}
                titleStyle={styles.headerTitle} />
    )
  
    return (
      <Container    safeAreaViewTopStyle={styles.safeArea}
                    statusBarStyle={'dark'}
                    // scrollViewEnable={true}
                    header={header}
                    style={styles.container} >

              <FlatList 
                        data={["Restart"]}
                        // numColumns={5}
                        renderItem={({ item }) => (
                          <TouchableOpacity onPress={Utils.multipleTapHandler(() => props.onNavigateMenuItem(item))} 
                                            style={styles.menuItemButton}>
                              <Text numberOfLines={2} style={styles.menuItemText}> 
                                {item} 
                              </Text> 
                          </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => `flatlist-categories-${index}`}
                        />
              
        </Container>
    )
}

export default Menu