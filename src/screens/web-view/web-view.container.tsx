import React from 'react'

import { WebViewScreen } from './web-view.screen'

interface WebViewContainerProps {
  route: {
    params: {
      uri: string
    }
  }
}
export default function ({ route }: WebViewContainerProps) {
  return <WebViewScreen uri={route.params.uri} />
}
