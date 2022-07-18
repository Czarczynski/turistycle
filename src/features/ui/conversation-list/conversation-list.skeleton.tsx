import React from 'react'
import { VFC } from 'react'
import { View } from 'react-native'

import { SkeletonConversationPreview } from '~features/ui/conversation-preview/conversation-preview.skeleton'

import styles from './conversation-list.styles'

export const SkeletonConversationList: VFC = () => {
  return (
    <View style={styles.container}>
      <SkeletonConversationPreview />
      <View style={styles.separator} />
      <SkeletonConversationPreview />
      <View style={styles.separator} />
      <SkeletonConversationPreview />
      <View style={styles.separator} />
      <SkeletonConversationPreview />
      <View style={styles.separator} />
      <SkeletonConversationPreview />
      <View style={styles.separator} />
      <SkeletonConversationPreview />
    </View>
  )
}
