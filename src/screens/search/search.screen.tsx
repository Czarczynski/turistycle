import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { View } from 'react-native'

import { CurrentFiltersType } from '~features/filters/types/current-filters.type'
import { useSearch } from '~features/search/hooks/use-search'
import { useTrips } from '~features/trips/hooks/use-trips'
import { Filters } from '~features/ui/filters'
import { TripList } from '~features/ui/trip-list'

import { useStores } from '~hooks/use-store'

import { User } from '~models/user.model'

import styles from './search.styles'

interface SearchScreenProps {}

export const SearchScreen: VFC<SearchScreenProps> = observer(() => {
  const { global, searchFilters } = useStores()
  const {
    mutate,
    isLoading,
    data: trips,
  } = useTrips(global.user as User, searchFilters.searchQuery, searchFilters.filters)
  useSearch(searchFilters.searchQuery, mutate)

  const onApplyFilters = (_filters: CurrentFiltersType) => {
    {
      searchFilters.setFilters(_filters)
      mutate(undefined)
      searchFilters.setIsFilterModalVisible(false)
    }
  }
  return (
    <View style={styles.container}>
      <TripList trips={trips!} refreshing={isLoading} />
      <Filters
        onClose={onApplyFilters}
        filters={searchFilters.filters}
        visible={searchFilters.isFilterModalVisible}
      />
    </View>
  )
})
