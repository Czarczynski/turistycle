import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { VFC } from 'react'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

import styles from './address.styles'

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
export const SkeletonAddress: VFC = () => {
  return <ShimmerPlaceholder style={styles.address} />
}
