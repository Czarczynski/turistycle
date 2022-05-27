import React from 'react'

import { AuthStackScreenProps } from '~navigation/auth.navigator'

import { LoginScreen } from './login.screen'

export default function ({ navigation }: AuthStackScreenProps<'Login'>) {
  return <LoginScreen />
}
