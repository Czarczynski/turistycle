import React, { VFC } from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'

import styles from './card-home.styles'

interface CardHomeProps {}

export const CardHome: VFC<CardHomeProps> = () => {
  return (
    <View style={styles.card}>
      <MapView style={styles.map} pointerEvents={'none'} />
    </View>
  )
}
