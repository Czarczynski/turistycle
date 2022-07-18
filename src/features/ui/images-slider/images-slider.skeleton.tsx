import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { VFC } from 'react'
import { View } from 'react-native'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

import styles from './images-slider.styles'

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
export const SkeletonImagesSlider: VFC = () => {
  return (
    <View style={[styles.container, styles.image]}>
      <ShimmerPlaceholder
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          width: 150,
          height: 20,
        }}
      />
    </View>
  )
}
