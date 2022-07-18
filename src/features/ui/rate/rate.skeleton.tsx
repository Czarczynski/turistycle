import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { VFC } from 'react'
import { View } from 'react-native'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

import styles from './rate.styles'

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

export const SkeletonRate: VFC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ShimmerPlaceholder style={[styles.user, { width: '20%' }]} />
        <ShimmerPlaceholder
          style={{
            width: 150,
            height: 20,
          }}
        />
      </View>
      <ShimmerPlaceholder style={styles.opinion} />
    </View>
  )
}
