import React from 'react'

import { RootStackScreenProps } from '~navigation/index.navigator'

import { HomeScreen } from './home.screen'

export default function ({ navigation }: RootStackScreenProps<'Home'>) {
  return <HomeScreen />
}
