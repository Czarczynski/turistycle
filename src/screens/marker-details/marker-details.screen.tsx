import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ImagesSlider } from '~features/ui/images-slider'

import { Marker } from '~models/marker.model'

import styles from './marker-details.styles'

interface MarkerDetailsScreenProps {
  marker: Marker
}

export const MarkerDetailsScreen: VFC<MarkerDetailsScreenProps> = ({
  marker,
}) => {
  const { t } = useTranslation('marker-details')
  const { top } = useSafeAreaInsets()
  return (
    <View style={[styles.container, { marginTop: top }]}>
      <Text style={styles.title}>{marker.name}</Text>
      {marker.photos.length > 0 && <ImagesSlider images={marker.photos} rating={2.5} />}
    </View>
  )
}
