import React, { VFC } from 'react'
import { Text, View } from 'react-native'

import { RatingStars } from '~features/ui/rating-stars'

import { Rate as RateModel } from '~models/marker.model'

import styles from './rate.styles'

interface RateProps {
  rate: RateModel
}

export const Rate: VFC<RateProps> = ({ rate }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.user}>{rate.user}</Text>
        <RatingStars rating={rate.rate} background={false} />
      </View>
      {rate.opinion && <Text style={styles.opinion}>{rate.opinion}</Text>}
    </View>
  )
}
