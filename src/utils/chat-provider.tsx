import 'firebase/firestore'
import { collection, doc, getFirestore, onSnapshot, query, where } from 'firebase/firestore'
import { observer } from 'mobx-react-lite'
import React, { FC, createContext, useContext, useEffect, useState } from 'react'

import { useStores } from '~hooks/use-store'

import { Conversation } from '~models/conversation.model'
import { User } from '~models/user.model'
import {useUsers} from "~features/users/hooks/use-users";

type ChatContextType = { chatList: Conversation[] }
const ChatContext = createContext<ChatContextType>({ chatList: [] })

const ChatContextProvider = ChatContext.Provider

interface ChatProviderProps {
  children: React.ReactElement
}
export const useChat = () => useContext(ChatContext)

export const ChatProvider: FC<ChatProviderProps> = observer(({ children }) => {
  const [firstCallForSlubrcription, setFirstCallForSlubrcription] = useState()
  const [chatList, setChatList] = useState<Conversation[]>([])
  const { global } = useStores()

  useEffect(() => {
    const unsubscribe = subscribeChat()
    return () => unsubscribe()
  }, [global.user])

  const subscribeChat = () => {
    const firestore = getFirestore()
    const queryConnection = query(
      collection(firestore, 'chat'),
      where('users', 'array-contains', global.user.uid),
    )

    return onSnapshot(
      queryConnection,
      (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            setChatList([...chatList, change.doc.data() as Conversation])
          }
        })
      },
      (error) => {
        console.log({ error })
      },
      () => {
        console.log('onCompletion')
      },
    )
  }
  return <ChatContextProvider value={{ chatList }}>{children}</ChatContextProvider>
})
