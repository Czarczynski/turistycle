import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { VFC } from 'react'
import { View } from 'react-native'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

import { SkeletonAddress } from '~features/ui/address/address.skeleton'
import { SkeletonImagesSlider } from '~features/ui/images-slider/images-slider.skeleton'
import { SkeletonRateList } from '~features/ui/rate-list/rate-list.skeleton'

import styles from './marker-details.styles'

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

export const SkeletonMarkerDetails: VFC = () => {
  return (
    <>
      <ShimmerPlaceholder style={styles.title} />
      <SkeletonImagesSlider />
      <View style={styles.section}>
        <ShimmerPlaceholder style={styles.subtitle} />
        <SkeletonAddress />
      </View>
      <View style={styles.section}>
        <ShimmerPlaceholder style={styles.subtitle} />
        <SkeletonRateList />
      </View>
    </>
  )
}
