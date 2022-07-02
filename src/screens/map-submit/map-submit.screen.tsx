import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { Text, View } from 'react-native'

import styles from './map-submit.styles'

interface MapSubmitScreenProps {
  title?: string
}

export const MapSubmitScreen: VFC<MapSubmitScreenProps> = observer(
  ({ title = 'MapSubmitScreen' }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    )
  },
)
