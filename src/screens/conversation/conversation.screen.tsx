import { observer } from 'mobx-react-lite'
import React, { VFC, useEffect, useState } from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'

import { MessageInput } from '~features/ui/message-input'
import { MessageList } from '~features/ui/message-list'

import { useStores } from '~hooks/use-store'
import { useChat } from '~utils/chat-provider'

import { User } from '~models/user.model'

import styles from './conversation.styles'

interface ConversationScreenProps {
  corresponder: User
  conversationId: string
}

export const ConversationScreen: VFC<ConversationScreenProps> = observer(({ conversationId }) => {
  const { global } = useStores()
  const { subscribeConversation, sendMessage } = useChat()
  const [isFocused, setIsFocused] = useState(false)
  const [messageText, setMessageText] = useState('')
  useEffect(() => {
    global.setCurrentConversationId(conversationId)
    const unsubscribe = subscribeConversation()

    return () => {
      unsubscribe()
      global.setCurrentConversationId(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.innerContainer}>
        <MessageList
          isInputFocused={isFocused}
          data={[...global.currentConversationMessages]}
          // nextPage={async () => await nextMessagePage()}
        />
        <MessageInput
          onFocusable={setIsFocused}
          isFocused={isFocused}
          value={messageText}
          onChangeText={setMessageText}
          onPress={sendMessage}
        />
      </View>
    </KeyboardAvoidingView>
  )
})
