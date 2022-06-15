import { plainToInstance } from 'class-transformer'
import {
  Query,
  Timestamp,
  Unsubscribe,
  addDoc,
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

import { useStores } from '~hooks/use-store'

import { Message } from '~models/message.model'
import { User } from '~models/user.model'

type UseCurrentConversationType = {
  nextPage: () => Promise<void>
  subscribeConversation: () => Unsubscribe
  sendMessage: (message: string) => Promise<void>
}

export const useCurrentConversation = (): UseCurrentConversationType => {
  const { global } = useStores()
  const firestore = getFirestore()

  const orderByRef = orderBy('time', 'desc')
  const [nextQuery, setNextQuery] = useState<Query>(null!)

  const nextPage = async (first?: boolean) => {
    const collectionRef = collection(firestore, 'chat', global.currentConversationId!, 'messages')
    const snapshot = await getDocs(first ? query(collectionRef, orderByRef, limit(15)) : nextQuery)
    // setCurrentConversation({
    //   messages: [
    //     ...(first ? [] : currentConversation.messages),
    //     ...snapshot.docs.map((mess) => plainToInstance(Message, mess.data())),
    //   ],
    // })
    const lastVisible = snapshot.docs[snapshot.docs.length - 1]
    const startAfterRef = startAfter(lastVisible)
    const next = query(collectionRef, orderByRef, startAfterRef, limit(15))
    setNextQuery(next)
  }

  const sendMessage = async (message: string) => {
    const collectionRef = collection(firestore, 'chat', global.currentConversationId!, 'messages')
    await addDoc(collectionRef, {
      senderUid: (global.user as User).uid,
      text: message,
      time: Timestamp.fromDate(new Date()),
    })
  }

  const subscribeConversation = () => {
    let isFirstCall = true
    const collectionRef = collection(firestore, 'chat', global.currentConversationId!, 'messages')
    const queryRef = query(collectionRef)
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    // nextPage(true).then()

    return onSnapshot(
      queryRef,
      (snapshot) => {
        if (isFirstCall) {
          isFirstCall = false
          global.updateConversationMessages(
            snapshot.docs.map((mess) => plainToInstance(Message, mess.data())),
          )
          return
        }
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            global.updateConversationMessages(plainToInstance(Message, change.doc.data()))
          }
        })
      },
      (error) => {
        console.log({ error })
      },
    )
  }
  return { subscribeConversation, nextPage, sendMessage }
}
