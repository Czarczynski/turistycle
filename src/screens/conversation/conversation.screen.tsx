import { observer } from 'mobx-react-lite'
import React, { VFC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { KeyboardAvoidingView, Platform, View } from 'react-native'

import { MessageInput } from '~features/ui/message-input'
import { MessageList } from '~features/ui/message-list'

import { useChat } from '~utils/chat-provider'

import { User } from '~models/user.model'

import styles from './conversation.styles'

interface ConversationScreenProps {
  corresponder: User
  conversationId: string
}

export const ConversationScreen: VFC<ConversationScreenProps> = observer(
  ({ corresponder, conversationId }) => {
    const { t } = useTranslation('conversation')
    const { currentConversation, subscribeConversation, nextMessagePage } = useChat()
    const [isFocused, setIsFocused] = useState(false)
    useEffect(() => {
      const unsubscribe = subscribeConversation(conversationId)
      return () => unsubscribe()
    }, [])

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.innerContainer}>
          <MessageList
            isInputFocused={isFocused}
            data={currentConversation.messages}
            nextPage={async () => await nextMessagePage(conversationId)}
          />
          <MessageInput
            onFocusable={setIsFocused}
            isFocused={isFocused}
            onChangeText={() => null}
            onSubmitEditing={() => null}
          />
        </View>
      </KeyboardAvoidingView>
    )
  },
)
