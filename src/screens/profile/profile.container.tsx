import React from 'react'

import { RootStackScreenProps } from '~navigation/index.navigator'

import { ProfileScreen } from './profile.screen'

export default function ({ navigation }: RootStackScreenProps<'Profile'>) {
  return <ProfileScreen />
}
