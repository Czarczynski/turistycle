import React, { VFC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ActivityIndicator, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useMarker } from '~features/markers/hooks/use-marker'
import { AddRate } from '~features/ui/add-rate'
import { Address } from '~features/ui/address'
import { ImagesSlider } from '~features/ui/images-slider'
import { RateList } from '~features/ui/rate-list'

import styles from './marker-details.styles'

interface MarkerDetailsScreenProps {
  markerId: string
}

export const MarkerDetailsScreen: VFC<MarkerDetailsScreenProps> = ({ markerId }) => {
  const { t } = useTranslation('marker-details')
  const { top } = useSafeAreaInsets()
  const { isLoading, data: marker, mutate } = useMarker(markerId)
  useEffect(() => {
    mutate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading || !marker) return <ActivityIndicator />
  return (
    <View style={[styles.container, { marginTop: top }]}>
      <Text style={styles.title}>{marker.name}</Text>
      {marker.photos!.length > 0 && <ImagesSlider images={marker.photos!} rating={2.5} />}
      <View style={styles.section}>
        <Text style={styles.subtitle}>Address</Text>
        <Address coordinate={{ longitude: marker.longitude, latitude: marker.latitude }} />
      </View>
      {marker.rates!.length > 0 && (
        <View style={[styles.sectionPlus]}>
          <Text style={styles.subtitle}>Rates</Text>
          <RateList rates={marker.rates!} />
        </View>
      )}
      <AddRate markerId={marker._id.$oid} onAfterAddRate={mutate} />
    </View>
  )
}
