import React, { VFC } from 'react'
import { FlatList } from 'react-native'

import { MessageLeft, MessageRight } from '~features/ui/message'

import { Message as MessageModel } from '~models/message.model'

import styles from './message-list.styles'

interface MessageListProps {
  data: MessageModel[]
  userUid: string
}

export const MessageList: VFC<MessageListProps> = ({ data, userUid }) => {
  return (
    <FlatList
      style={styles.container}
      data={data.sort((a, b) => b.time.toSeconds() - a.time.toSeconds())}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({ item, index }) => {
        let showDate = false
        if (index < data.length - 1) {
          const { time: previousTime } = data[index + 1]
          showDate = item.time.diff(previousTime, ['minutes']).toObject().minutes! > 120
        }
        return item.senderUid === userUid ? (
          <MessageLeft key={index} message={item} showDate={showDate} />
        ) : (
          <MessageRight key={index} message={item} showDate={showDate} />
        )
      }}
      inverted={true}
    />
  )
}
