import React, { VFC } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'

import { TripPreview } from '~features/ui/trip-preview'

import { Trip } from '~models/trip.model'

import styles from './trip-list.styles'

interface TripListProps {
  trips: Trip[]
  refreshing: boolean
}

export const TripList: VFC<TripListProps> = ({ trips, refreshing }) => {
  return (
    <FlatList
      ListHeaderComponent={refreshing ? <ActivityIndicator /> : <View />}
      refreshing={refreshing}
      style={styles.container}
      data={trips}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={(item) => `${item._id.$oid}`}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => <TripPreview key={item._id.$oid} trip={item} />}
    />
  )
}

const Separator = () => <View style={styles.separator} />
