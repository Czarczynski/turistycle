import _ from 'lodash'
import React, { VFC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ActivityIndicator, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useMarker } from '~features/markers/hooks/use-marker'
import { AddRate } from '~features/ui/add-rate'
import { Address } from '~features/ui/address'
import { ImagesSlider } from '~features/ui/images-slider'
import { RateList } from '~features/ui/rate-list'

import { useStores } from '~hooks/use-store'

import { User } from '~models/user.model'

import styles from './marker-details.styles'

interface MarkerDetailsScreenProps {
  markerId: string
}

export const MarkerDetailsScreen: VFC<MarkerDetailsScreenProps> = ({ markerId }) => {
  const { t } = useTranslation('marker-details')
  const { top } = useSafeAreaInsets()
  const { global } = useStores()
  const { isLoading, data: marker, mutate } = useMarker(markerId)
  useEffect(() => {
    mutate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <View style={[styles.container, { marginTop: top }]}>
      <View style={styles.dragger} />
      <View style={styles.contentContainer}>
        {isLoading || !marker ? (
          <ActivityIndicator />
        ) : (
          <>
            <Text style={styles.title}>{marker.name}</Text>
            {marker.photos!.length > 0 && (
              <ImagesSlider images={marker.photos!} rating={_.meanBy(marker.rates, 'rate')} />
            )}
            <View style={styles.section}>
              <Text style={styles.subtitle}>{t`address`}</Text>
              <Address coordinate={{ longitude: marker.longitude, latitude: marker.latitude }} />
            </View>
            {marker.rates!.length > 0 && (
              <View style={[styles.sectionPlus]}>
                <Text style={styles.subtitle}>{t`rates`}</Text>
                <RateList rates={marker.rates!} />
              </View>
            )}
          </>
        )}
      </View>
      {!_.some(marker?.rates, { user: (global.user as User).displayName }) && (
        <AddRate markerId={markerId} onAfterAddRate={mutate} />
      )}
    </View>
  )
}
