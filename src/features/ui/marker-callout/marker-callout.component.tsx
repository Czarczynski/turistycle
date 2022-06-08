import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import { Callout } from 'react-native-maps'

import { ImagesSlider } from '~features/ui/images-slider'

import useNavigation from '~hooks/useNavigation'

import { Marker } from '~models/marker.model'

import styles from './marker-callout.styles'

interface MarkerCalloutProps {
  marker: Marker
}

export const MarkerCallout: VFC<MarkerCalloutProps> = ({ marker }) => {
  const { t } = useTranslation('marker-callout')
  const navigation = useNavigation()
  return (
    <Callout
      style={styles.container}
      onPress={() => navigation.navigate('MarkerDetails', { marker })}
    >
      <View style={styles.sliderWrapper}>
        {marker.photos.length > 0 && <ImagesSlider images={marker.photos} rating={2} />}
      </View>
      <Text>{marker.name}</Text>
    </Callout>
  )
}
