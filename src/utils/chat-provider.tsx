import 'firebase/firestore'
import { Unsubscribe } from 'firebase/firestore'
import { observer } from 'mobx-react-lite'
import React, { FC, createContext, useContext, useEffect } from 'react'

import { useConversationList } from '~features/chat/hooks/use-chat-list'
import { useCurrentConversation } from '~features/chat/hooks/use-current-conversation'

import { useStores } from '~hooks/use-store'

import { Conversation } from '~models/conversation.model'

type ChatContextType = {
  chatList: Conversation[]
  subscribeConversation: () => Unsubscribe
  nextMessagePage: () => Promise<void>
  sendMessage: (message: string) => Promise<void>
}

const initialState = {} as ChatContextType

const ChatContext = createContext<ChatContextType>(initialState)

const ChatContextProvider = ChatContext.Provider

interface ChatProviderProps {
  children: React.ReactElement
}

export const useChat = () => useContext(ChatContext)

export const ChatProvider: FC<ChatProviderProps> = observer(({ children }) => {
  const { subscribeConversation, nextPage: nextMessagePage, sendMessage } = useCurrentConversation()
  const { chatList, subscribeChat } = useConversationList()
  const { global } = useStores()

  useEffect(() => {
    let unsubscribe: Unsubscribe | undefined
    if (global.user) {
      unsubscribe = subscribeChat()
    }
    return () => {
      unsubscribe?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [global.user])

  return (
    <ChatContextProvider value={{ chatList, subscribeConversation, nextMessagePage, sendMessage }}>
      {children}
    </ChatContextProvider>
  )
})
