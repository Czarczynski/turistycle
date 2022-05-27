import React from 'react'

import { RootStackScreenProps } from '~navigation/index.navigator'

import { MapSubmitScreen } from './map-submit.screen'

export default function ({ navigation }: RootStackScreenProps<'MapSubmit'>) {
  return <MapSubmitScreen />
}
