import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

import styles from './trace.styles'

interface TraceScreenProps {
  title?: string
}

export const TraceScreen: VFC<TraceScreenProps> = ({ title = 'TraceScreen' }) => {
  const { t } = useTranslation('trace')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}
