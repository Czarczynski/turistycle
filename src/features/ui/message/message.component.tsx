import { DateTime } from 'luxon'
import React, { VFC } from 'react'
import { Text, View } from 'react-native'

import { useStores } from '~hooks/use-store'

import { Message as MessageModel } from '~models/message.model'

import styles from './message.styles'

interface MessageProps {
  message: MessageModel
  showDate?: boolean
}
interface CoreMessageProps {
  item: MessageModel
  next?: MessageModel
}
export const Message: VFC<CoreMessageProps> = ({ item, next }) => {
  const { global } = useStores()
  let showDate = false
  if (next) {
    const { time: previousTime } = next
    showDate = item.time.diff(previousTime, ['minutes']).toObject().minutes! > 120
  }
  return item.senderUid !== global.user.uid ? (
    <MessageLeft message={item} showDate={showDate} />
  ) : (
    <MessageRight message={item} showDate={showDate} />
  )
}

const MessageLeft: VFC<MessageProps> = ({ message, showDate }) => {
  const { time, text } = message

  return (
    <View style={styles.containerLeft}>
      {showDate && <MessageTime time={time} />}
      <View style={[styles.message, styles.messageLeft]}>
        <Text>{text}</Text>
      </View>
    </View>
  )
}

const MessageRight: VFC<MessageProps> = ({ message, showDate }) => {
  const { time, text } = message

  return (
    <View style={styles.containerRight}>
      {showDate && <MessageTime time={time} />}
      <View style={[styles.message, styles.messageRight]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  )
}

interface MessageTimeProps {
  time: DateTime
}

const MessageTime: VFC<MessageTimeProps> = ({ time }) => {
  return (
    <View style={styles.timeContainer}>
      <View style={styles.timeLine} />
      <Text style={styles.timeValue}>{time.toFormat('LLL dd, H:mm')}</Text>
      <View style={styles.timeLine} />
    </View>
  )
}
