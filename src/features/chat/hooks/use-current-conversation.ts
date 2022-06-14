import { plainToInstance } from 'class-transformer'
import {
  DocumentData,
  Unsubscribe,
  collection,
  getDocs,
  getFirestore,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAfter,
} from 'firebase/firestore'
import { useState } from 'react'
import { Query } from 'react-query'

import { Message } from '~models/message.model'

type CurrentConversationType = {
  conversationId: string
  messages: Message[]
}

type UseCurrentConversationType = {
  currentConversation: CurrentConversationType
  nextPage: (conversationId: string) => Promise<void>
  subscribeConversation: (conversationId: string) => Unsubscribe
}

export const useCurrentConversation = (): UseCurrentConversationType => {
  const firestore = getFirestore()
  const [currentConversation, setCurrentConversation] = useState<CurrentConversationType>({
    conversationId: '',
    messages: [],
  })
  const orderByRef = orderBy('time', 'desc')
  const [nextQuery, setNextQuery] = useState<any>(null!)

  const nextPage = async (conversationId: string, first?: boolean) => {
    const collectionRef = collection(firestore, `chat/${conversationId}/messages`)
    const snapshot = await getDocs(first ? query(collectionRef, orderByRef, limit(15)) : nextQuery)
    setCurrentConversation({
      ...currentConversation,
      messages: [
        ...(first ? [] : currentConversation.messages),
        ...snapshot.docs.map((mess) => plainToInstance(Message, mess.data())),
      ],
    })
    const lastVisible = snapshot.docs[snapshot.docs.length - 1]
    const startAfterRef = startAfter(lastVisible)
    const next = query(collectionRef, orderByRef, startAfterRef, limit(15))
    console.log({ next })
    setNextQuery(next)
  }

  const subscribeConversation = (conversationId: string) => {
    const listToUpdate: Message[] = []
    let isFirstCall = true
    const collectionRef = collection(firestore, `chat/${conversationId}/messages`)
    const queryRef = query(collectionRef)
    // @typescript-eslint/no-floating-promises
    nextPage(conversationId, true).then()
    setCurrentConversation({
      conversationId,
      messages: [],
    })

    return onSnapshot(
      queryRef,
      (snapshot) => {
        if (isFirstCall) {
          isFirstCall = false
          return
        }

        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            listToUpdate.push(plainToInstance(Message, change.doc.data()))
          }
        })
        setCurrentConversation({
          ...currentConversation,
          messages: listToUpdate,
        })
      },
      (error) => {
        console.log({ error })
      },
    )
  }
  return { currentConversation, subscribeConversation, nextPage }
}
