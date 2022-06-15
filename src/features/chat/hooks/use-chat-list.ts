import { plainToInstance } from 'class-transformer'
import { Unsubscribe, collection, getFirestore, onSnapshot, query, where } from 'firebase/firestore'
import { useState } from 'react'

import { useStores } from '~hooks/use-store'

import { Conversation } from '~models/conversation.model'
import { User } from '~models/user.model'

type UseConversationList = {
  subscribeChat: () => Unsubscribe
  chatList: Conversation[]
}

export const useConversationList = (): UseConversationList => {
  const { global } = useStores()
  const [chatList, setChatList] = useState<Conversation[]>([])
  const firestore = getFirestore()
  const subscribeChat = () => {
    const listToUpdate: Conversation[] = []
    const collectionRef = collection(firestore, 'chat')
    const whereRef = where('users', 'array-contains', (global.user as User).uid)
    const queryRef = query(collectionRef, whereRef)

    return onSnapshot(
      queryRef,
      (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            listToUpdate.push({ ...(change.doc.data() as Conversation), id: change.doc.id })
          } else if (change.type === 'modified') {
            listToUpdate.map((item) => {
              if (item.id === change.doc.id) {
                item.lastMessage = change.doc.data().lastMessage
              }
              return item
            })
          }
        })
        setChatList(plainToInstance(Conversation, listToUpdate))
      },
      (error) => {
        console.log({ error })
      },
      () => {
        console.log('onCompletion')
      },
    )
  }

  return { chatList, subscribeChat }
}
