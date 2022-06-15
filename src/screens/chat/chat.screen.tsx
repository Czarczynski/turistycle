import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { View } from 'react-native'

import { ConversationList } from '~features/ui/conversation-list'

import { useChat } from '~utils/chat-provider'

import styles from './chat.styles'

interface ChatScreenProps {}

export const ChatScreen: VFC<ChatScreenProps> = observer(() => {
  const { chatList } = useChat()
  return (
    <View style={styles.container}>
      <ConversationList data={chatList} />
    </View>
  )
})
