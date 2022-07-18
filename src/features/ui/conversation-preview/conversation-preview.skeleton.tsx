import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { VFC } from 'react'
import { View } from 'react-native'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

import styles from './conversation-preview.styles'

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
export const SkeletonConversationPreview: VFC = () => {
  return (
    <View style={styles.container}>
      <ShimmerPlaceholder style={styles.photo} />
      <View style={styles.innerContainer}>
        <ShimmerPlaceholder style={styles.name} />
        <ShimmerPlaceholder style={styles.text} />
      </View>
    </View>
  )
}
