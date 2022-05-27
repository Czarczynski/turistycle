import React from 'react'

import { RootStackScreenProps } from '~navigation/index.navigator'

import { WebViewScreen } from './web-view.screen'

export default function ({ navigation }: RootStackScreenProps<'WebView'>) {
  return <WebViewScreen />
}
