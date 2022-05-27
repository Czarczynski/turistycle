import React from 'react'

import { RootStackScreenProps } from '~navigation/index.navigator'

import { CommunityScreen } from './community.screen'

export default function ({ navigation }: RootStackScreenProps<'Community'>) {
  return <CommunityScreen />
}
