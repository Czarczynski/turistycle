import React, { VFC } from 'react'
import { View } from 'react-native'

import { Icon } from '~features/ui/icon'

import styles from './rating-stars.styles'

interface RatingStarsProps {
  rating: number
}

export const RatingStars: VFC<RatingStarsProps> = ({ rating }) => {
  return (
    <View style={styles.container}>
      {[...Array(5).keys()].map((i) => (
        <View key={i} style={styles.star}>
          <Icon
            name={'half-star-left'}
            size={15}
            strokeWidth={50}
            color={rating >= i + 0.5 ? styles.starHalf.color : undefined}
          />
          <View style={styles.starHalfWrapper}>
            <Icon
              name={'half-star-right'}
              size={15}
              strokeWidth={50}
              color={rating >= i + 1 ? styles.starHalf.color : undefined}
            />
          </View>
        </View>
      ))}
    </View>
  )
}
