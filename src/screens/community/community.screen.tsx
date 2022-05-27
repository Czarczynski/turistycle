import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

import styles from './community.styles'

interface CommunityScreenProps {
  title?: string
}

export const CommunityScreen: VFC<CommunityScreenProps> = ({ title = 'CommunityScreen' }) => {
  const { t } = useTranslation('community')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}
