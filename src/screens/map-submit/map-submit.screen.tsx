import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

import styles from './map-submit.styles'

interface MapSubmitScreenProps {
  title?: string
}

export const MapSubmitScreen: VFC<MapSubmitScreenProps> = ({ title = 'MapSubmitScreen' }) => {
  const { t } = useTranslation('map-submit')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}
