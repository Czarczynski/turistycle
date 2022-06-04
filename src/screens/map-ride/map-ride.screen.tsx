import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

import styles from './map-ride.styles'

interface MapRideScreenProps {
  title?: string
}

export const MapRideScreen: VFC<MapRideScreenProps> = observer(({ title = 'MapRideScreen' }) => {
  const { t } = useTranslation('map-ride')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
})
