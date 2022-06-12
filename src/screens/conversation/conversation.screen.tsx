import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

import { ConversationList } from '~features/ui/conversation-list'

import styles from './conversation.styles'

interface ConversationScreenProps {
  title?: string
}

export const ConversationScreen: VFC<ConversationScreenProps> = observer(
  ({ title = 'ConversationScreen' }) => {
    const { t } = useTranslation('conversation')

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    )
  },
)
