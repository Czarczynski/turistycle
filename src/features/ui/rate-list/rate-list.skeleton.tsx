import React from 'react'
import { VFC } from 'react'
import { View } from 'react-native'

import { SkeletonRate } from '~features/ui/rate/rate.skeleton'

import styles from './rate-list.styles'

export const SkeletonRateList: VFC = () => {
  return (
    <View style={styles.container}>
      <SkeletonRate />
      <View style={styles.separator} />
      <SkeletonRate />
      <View style={styles.separator} />
      <SkeletonRate />
      <View style={styles.separator} />
      <SkeletonRate />
      <View style={styles.separator} />
      <SkeletonRate />
      <View style={styles.separator} />
      <SkeletonRate />
    </View>
  )
}
