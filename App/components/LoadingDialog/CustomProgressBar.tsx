import React, { useEffect, useState} from 'react';
import { 
  Modal, 
  View, 
  Text,
  ActivityIndicator, 
  Button,
  Platform,
} from 'react-native';
import styles from './Styles'

type Props = {
  visible: boolean
  title?: string
  subtitle?: string
}
  
const LoadingDialog = (props: Props) => {

    const isIOS = (Platform.OS === 'ios')
    const modelColor = isIOS ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.5)'
    const backgroundColor = isIOS ? 'rgba(0, 0, 0, 0.5)' : 'white'
    const contentColor = isIOS ? 'white' : 'rgba(0, 0, 0, 0.5)'

    const CustomProgressBar = ({ visible }: {visible: boolean}) => (
      <Modal visible={visible} animationType="fade" transparent>
          <View style={[{ backgroundColor: modelColor, }, styles.container]}>
              <View style={{ borderRadius: isIOS ? 10 : 2, backgroundColor: backgroundColor, padding: 25,  }}>
                  {!isIOS && props.title &&
                    <Text style={[{ paddingLeft: isIOS ? 0 : 8, }, styles.titleText]}>
                        {props.title}
                    </Text>
                  }
                  <View style={{ flexDirection: isIOS ? 'column' : 'row', justifyContent: 'space-between', paddingLeft: isIOS ? 0 : 0, }}>
                    <ActivityIndicator color={contentColor} size="large" />
                    {props.subtitle &&
                        <Text style={[{ color: contentColor,
                                        paddingHorizontal: isIOS ? 0 : 40,
                                        paddingBottom: isIOS ? 0 : 10,  }, styles.subtitleText]}>
                            {props.subtitle}
                        </Text>
                    }
                  </View>
              </View>
          </View>
      </Modal>
    );
  
    return props.visible ? (
      <CustomProgressBar visible={props.visible} />
    )
    : (<View />)
}
  
export default LoadingDialog