import React from 'react'

import { RootStackScreenProps } from '~navigation/index.navigator'

import { MapRideScreen } from './map-ride.screen'

export default function ({ navigation }: RootStackScreenProps<'MapRide'>) {
  return <MapRideScreen />
}
