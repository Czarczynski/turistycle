import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Text, View } from 'react-native'

import { ConversationList } from '~features/ui/conversation-list'

import { useChat } from '~utils/chat-provider'

import styles from './chat.styles'

interface ChatScreenProps {
  title?: string
}

export const ChatScreen: VFC<ChatScreenProps> = observer(({ title = 'ChatScreen' }) => {
  const { t } = useTranslation('chat')

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ConversationList />
      <Button
        title={'Navigate Conversation'}
        onPress={() => navigation.navigate('ChatNavigator', { screen: 'Conversation' })}
      />
    </View>
  )
})
