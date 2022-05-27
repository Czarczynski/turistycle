import React from 'react'

import { RootStackScreenProps } from '~navigation/index.navigator'

import { TraceScreen } from './trace.screen'

export default function ({ navigation }: RootStackScreenProps<'Trace'>) {
  return <TraceScreen />
}
