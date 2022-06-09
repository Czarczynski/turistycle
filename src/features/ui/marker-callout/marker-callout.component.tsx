import React, { VFC } from 'react'
import { Text } from 'react-native'
import { Callout } from 'react-native-maps'

import useNavigation from '~hooks/useNavigation'

import { Marker } from '~models/marker.model'

import styles from './marker-callout.styles'

interface MarkerCalloutProps {
  marker: Marker
}

export const MarkerCallout: VFC<MarkerCalloutProps> = ({ marker }) => {
  const navigation = useNavigation()
  return (
    <Callout
      style={styles.container}
      onPress={() => navigation.navigate('MarkerDetails', { markerId: marker._id.$oid })}
    >
      <Text>{marker.name} ...</Text>
    </Callout>
  )
}
