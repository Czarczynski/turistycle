import React, { VFC } from 'react'
import { FlatList, View } from 'react-native'

import { Rate } from '~features/ui/rate'

import { Rate as RateModel } from '~models/marker.model'

import styles from './rate-list.styles'

interface RateListProps {
  rates: RateModel[]
}

export const RateList: VFC<RateListProps> = ({ rates }) => {
  return (
    <FlatList
      style={styles.container}
      data={rates}
      ItemSeparatorComponent={Separator}
      keyExtractor={(_, i) => `${i}`}
      renderItem={({ item, index }) => <Rate key={index} rate={item} />}
    />
  )
}

const Separator = () => <View style={styles.separator} />
