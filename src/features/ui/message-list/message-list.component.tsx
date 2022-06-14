import React, { VFC, useState } from 'react'
import { FlatList, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Message as MessageModel } from '~models/message.model'

import { Message } from '../message'
import styles from './message-list.styles'

interface MessageListProps {
  data: MessageModel[]
  nextPage: () => Promise<void>
  isInputFocused?: boolean
}

export const MessageList: VFC<MessageListProps> = ({ data, nextPage, isInputFocused }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [allMessagesLoaded, setAllMessagesLoaded] = useState(false)
  const insets = useSafeAreaInsets()
  const onRefresh = async () => {
    if (!allMessagesLoaded) {
      try {
        setIsLoading(true)
        await nextPage()
      } catch {
        setAllMessagesLoaded(true)
      } finally {
        setIsLoading(false)
      }
    }
  }
  return (
    <FlatList
      onEndReached={onRefresh}
      onEndReachedThreshold={0}
      refreshing={isLoading}
      initialNumToRender={15}
      style={styles.container}
      contentContainerStyle={[
        styles.contentContainer,
        { paddingTop: (isInputFocused ? 0 : insets.bottom) + 66 },
      ]}
      ItemSeparatorComponent={Separator}
      extraData={data.length}
      showsVerticalScrollIndicator={false}
      data={data.sort((a, b) => b.time.toSeconds() - a.time.toSeconds())}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({ item, index }) => <Message key={index} item={item} next={data[index + 1]} />}
      inverted={true}
    />
  )
}

const Separator = () => {
  return <View style={styles.separator} />
}
