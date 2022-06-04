import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Text, View } from 'react-native'

import styles from './map.styles'

interface MapScreenProps {
  title?: string
}

export const MapScreen: VFC<MapScreenProps> = observer(({ title = 'MapScreen' }) => {
  const { t } = useTranslation('map')
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button title={'Navigate Map Submit'} onPress={() => navigation.navigate('MapSubmit')} />
      <Button title={'Navigate Map Ride'} onPress={() => navigation.navigate('MapRide')} />
    </View>
  )
})
