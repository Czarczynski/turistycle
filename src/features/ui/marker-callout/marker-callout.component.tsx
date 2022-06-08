import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import { Callout } from 'react-native-maps'

import { ImagesSlider } from '~features/ui/images-slider'

import styles from './marker-callout.styles'

interface MarkerCalloutProps {
  name: string
  photos: string[]
}

export const MarkerCallout: VFC<MarkerCalloutProps> = ({ name, photos }) => {
  const { t } = useTranslation('marker-callout')

  return (
    <Callout style={styles.container} onPress={() => console.log('works')}>
      <View style={styles.sliderWrapper}>
        {photos.length > 0 && <ImagesSlider images={photos} rating={2} />}
      </View>
      <Text>{name}</Text>
    </Callout>
  )
}
