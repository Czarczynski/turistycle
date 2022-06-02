import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

import styles from './saved.styles'

interface SavedScreenProps {
  title?: string
}

export const SavedScreen: VFC<SavedScreenProps> = ({ title = 'SavedScreen' }) => {
  const { t } = useTranslation('saved')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t(title)}</Text>
    </View>
  )
}
