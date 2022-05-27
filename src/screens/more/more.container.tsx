import React from 'react'

import { RootStackScreenProps } from '~navigation/index.navigator'

import { MoreScreen } from './more.screen'

export default function ({ navigation }: RootStackScreenProps<'More'>) {
  return <MoreScreen />
}
