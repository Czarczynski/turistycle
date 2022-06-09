import * as Location from 'expo-location'
import { LocationGeocodedLocation } from 'expo-location/src/Location.types'
import React, { VFC, useEffect, useState } from 'react'
import { Text } from 'react-native'

import styles from './address.styles'

interface AddressProps {
  coordinate: LocationGeocodedLocation
}

export const Address: VFC<AddressProps> = ({ coordinate }) => {
  const [address, setAddress] = useState<Location.LocationGeocodedAddress | null>(null)
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    Location.reverseGeocodeAsync(coordinate).then((adrs) => {
      setAddress(adrs[0])
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (!address) return null
  return (
    <>
      <Text style={styles.address}>
        {address.city}, {address.country} {address.postalCode}, {address.street}{' '}
        {address.streetNumber}
      </Text>
    </>
  )
}
