import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

import styles from './web-view.styles'

interface WebViewScreenProps {
  title?: string
}

export const WebViewScreen: VFC<WebViewScreenProps> = ({ title = 'WebViewScreen' }) => {
  const { t } = useTranslation('web-view')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}
