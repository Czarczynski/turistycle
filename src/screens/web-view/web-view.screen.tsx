import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import WebView from 'react-native-webview'

import styles from './web-view.styles'

interface WebViewScreenProps {
  uri: string
}

export const WebViewScreen: VFC<WebViewScreenProps> = ({ uri }) => {
  const { t } = useTranslation('web-view')
  const { top } = useSafeAreaInsets()

  return (
    <View style={[styles.container, { marginTop: top }]}>
      <View style={styles.dragger} />
      <WebView style={styles.webContainer} source={{ uri: t(uri) }} />
    </View>
  )
}
