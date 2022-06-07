import { Instance, SnapshotOut, types } from 'mobx-state-tree'

import { initialFiltersState } from '~features/filters/states/filters.state'
import { CurrentFiltersType } from '~features/filters/types/current-filters.type'

types.optional(types.boolean, false)
export const SearchFiltersStore = types
  .model('search-filters', {
    isFilterModalVisible: types.optional(types.boolean, false),
    searchQuery: types.optional(types.string, ''),
    filters: types.optional(
      types.model('filters', {
        categories: types.array(types.string),
        tags: types.array(types.string),
        citiesAround: types.array(types.string),
        distance: types.model('distance', { min: types.number, max: types.number }),
      }),
      initialFiltersState,
    ),
  })
  .props({})
  .views(() => ({}))
  .actions((self) => ({
    setIsFilterModalVisible: (isFilterModalVisible: boolean) => {
      self.isFilterModalVisible = isFilterModalVisible
    },
    setSearchQuery: (searchQuery: string) => {
      self.searchQuery = searchQuery
    },
    setFilters: (filters: CurrentFiltersType) => {
      // @ts-ignore
      self.filters = filters
    },
  }))
  .actions(() => ({
    submitQueryEditing:()=>{

    }
  }))

type SearchFiltersType = Instance<typeof SearchFiltersStore>

export interface SearchFilters extends SearchFiltersType {}

type SearchFiltersSnapshotType = SnapshotOut<typeof SearchFiltersStore>

export interface SearchFiltersSnapshot extends SearchFiltersSnapshotType {}
