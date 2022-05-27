import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

import styles from './conversation.styles'

interface ConversationScreenProps {
  title?: string
}

export const ConversationScreen: VFC<ConversationScreenProps> = ({
  title = 'ConversationScreen',
}) => {
  const { t } = useTranslation('conversation')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}
