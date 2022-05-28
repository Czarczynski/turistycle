import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

import { Message as MessageModel } from '~models/message.model'

import styles from './message.styles'

interface MessageProps {
  message: MessageModel
  showDate?: boolean
  userUid: string
}

export const Message: VFC<MessageProps> = ({ message, showDate, userUid }) => {
  const { t } = useTranslation('message')
  const { senderUid, time, text } = message
  const isRightMessage = Boolean(senderUid === userUid)

  return (
    <View style={isRightMessage ? styles.containerRight : styles.containerLeft}>
      {showDate && (
        <View style={styles.timeContainer}>
          <View style={styles.timeLine} />
          <Text style={styles.timeValue}>{time.toFormat('LLL dd, H:mm')}</Text>
          <View style={styles.timeLine} />
        </View>
      )}
      <View style={[styles.message, isRightMessage ? styles.messageRight : styles.messageLeft]}>
        <Text>{text}</Text>
      </View>
    </View>
  )
}
