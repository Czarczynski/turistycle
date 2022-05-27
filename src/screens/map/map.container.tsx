import React from 'react'

import { RootStackScreenProps } from '~navigation/index.navigator'

import { MapScreen } from './map.screen'

export default function ({ navigation }: RootStackScreenProps<'Map'>) {
  return <MapScreen />
}
